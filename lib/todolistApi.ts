import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const todolistApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: (page) => `/todos?_page=${page}&_limit=10`,
    }),
  }),
});

export const {
  useGetTodoListQuery,
  util: { getRunningQueriesThunk },
} = todolistApi;

export const { getTodoList } = todolistApi.endpoints;
