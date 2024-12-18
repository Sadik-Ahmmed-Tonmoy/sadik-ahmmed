/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (data) => {
        const params = new URLSearchParams();
        if (data?.queryObj) {
          data?.queryObj.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        console.log(params);
        return {
          url: `active-questions`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["question"],
    }),

    createQuestion: builder.mutation({
      query: (data) => {
        return {
          url: "questions",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["question"],
    }),
  }),
});

export const { useCreateQuestionMutation, useGetQuestionsQuery } = questionApi;
