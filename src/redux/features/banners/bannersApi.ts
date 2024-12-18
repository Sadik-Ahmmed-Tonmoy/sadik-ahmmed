import { baseApi } from "../../api/baseApi";

const bannersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query({
        query: () => ({
          url: "banners",
          method: "GET",
        }),
        providesTags: ["banners"],
      }),
    // votePoll: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "poll-vote",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    // //   invalidatesTags: ["poll"],
    // }),
  
  }),
});

export const {
useGetBannersQuery
} = bannersApi;
