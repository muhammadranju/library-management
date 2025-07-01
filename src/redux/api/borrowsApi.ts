import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowsApi = createApi({
  reducerPath: "borrowsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api", // Your backend base URL
  }),
  tagTypes: ["Borrows"],
  endpoints: (builder) => ({
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrows"],
    }),
    getAllBorrows: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrows"],
    }),
  }),
});

export const { useGetAllBorrowsQuery, useCreateBorrowMutation } = borrowsApi;
