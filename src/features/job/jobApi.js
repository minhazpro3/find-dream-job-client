import apiSlice from "./../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    jobPost: builder.mutation({
      query: (data) => ({
        url: "/api/post-job",
        method: "POST",
        body: data,
      }),
    }),
    getJobs: builder.query({
      query: (data) => ({
        url: "/api/get-job",
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/api/get-jobById/${id}`,
      }),
    }),
  }),
});

export const { useJobPostMutation, useGetJobsQuery, useGetJobByIdQuery } =
  jobApi;
