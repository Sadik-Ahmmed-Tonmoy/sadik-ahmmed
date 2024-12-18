import { baseApi } from "../../api/baseApi";

const pollApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPoll: builder.query({
        query: () => ({
          url: "active-polls",
          method: "GET",
        }),
        providesTags: ["poll"],
      }),
    votePoll: builder.mutation({
      query: (data) => {
        return {
          url: "poll-vote",
          method: "POST",
          body: data,
        };
      },
    //   invalidatesTags: ["poll"],
    }),
  
  }),
});

export const {
useGetPollQuery,
useVotePollMutation
} = pollApi;
