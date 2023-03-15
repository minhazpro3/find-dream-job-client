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
    jobApply: builder.mutation({
      query: (data) => ({
        url: "/api/job-apply",
        method: "PATCH",
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
    getJobByEmail: builder.query({
      query: (email) => ({
        url: `/api/get-jobByEmail/${email}`,
      }),
    }),
  }),
});

export const {
  useJobPostMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
  useJobApplyMutation,
  useGetJobByEmailQuery,
} = jobApi;
