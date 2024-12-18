import { baseApi } from "../../api/baseApi";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
        query: () => ({
          url: "categories",
          method: "GET",
        }),
        providesTags: ["categories"],
      }),
    // votePoll: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "poll-vote",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["poll"],
    // }),
  
  }),
});

export const {
useGetCategoriesQuery
} = categoriesApi;
