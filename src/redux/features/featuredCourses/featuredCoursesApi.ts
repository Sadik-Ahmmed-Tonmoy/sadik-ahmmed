import { baseApi } from "../../api/baseApi";

const featuredCoursesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedCourses: builder.query({
        query: () => ({
          url: "featured-courses",
          method: "GET",
        }),
        providesTags: ["poll"],
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
useGetFeaturedCoursesQuery
} = featuredCoursesApi;
