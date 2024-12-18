import { baseApi } from "../../api/baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
        query: () => ({
          url: "blogs?feature_status=1&active_status=1&limit=4",
          method: "GET",
        }),
        providesTags: ["blogs"],
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
useGetBlogsQuery
} = blogsApi;
