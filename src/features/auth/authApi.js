import apiSlice from "./../api/apiSlice";
import { getUser, setUser, setUserLocal, toggleLoading } from "./authSlice";
const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/api/add-user",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;

          if (res.data.status) {
            dispatch(setUserLocal(data));
          }
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;
