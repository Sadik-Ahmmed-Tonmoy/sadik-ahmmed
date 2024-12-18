import { baseApi } from "../../api/baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (data) => {
        return {
          url: "contact-us",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["contact"],
    }),
  
  }),
});

export const {
  useContactUsMutation,
} = contactUsApi;
