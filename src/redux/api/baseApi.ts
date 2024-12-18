import { createApi, fetchBaseQuery,BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    // const token = getTokenFromLocalStorage();
    headers.set("accept", "application/json");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  
});

const baseQueryWithRefreshToken: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
  ) => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result.error?.status === 401) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`, {
          method: "POST",
          credentials: "include", // Sends cookies with the request
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await res.json();
  
        if (data?.data?.accessToken) {
          const user = (api.getState() as RootState).auth.user;
  
          // Dispatch new access token to update state
          api.dispatch(setUser({ user, token: data.data.accessToken }));
  
          // Retry the original query with the new token
          result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
          console.error("Failed to obtain a new access token");
        }
      } catch (error) {
        console.error("Error during token refresh:", error);
      }
    }
  
    return result;
  };
  
  

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["User", "contact", "poll", "categories", "question", "banners", "blogs" ],
  endpoints: () => ({}),
});
