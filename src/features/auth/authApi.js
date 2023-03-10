import apiSlice from "./../api/apiSlice";
import { setRouteChange, setUserLocal } from "./authSlice";

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
            dispatch(setRouteChange());
          }
        } catch (error) {}
      },
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/api/get-userById/${id}`,
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetUserByIdQuery } = authApi;
