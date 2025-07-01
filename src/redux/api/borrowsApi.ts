import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowsApi = createApi({
  reducerPath: "borrowsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library.mdranju.xyz/api",
  }),
  tagTypes: ["Borrows", "Books"],
  endpoints: (builder) => ({
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrows", "Books"],
    }),
    getAllBorrows: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrows", "Books"],
    }),
  }),
});

export const { useGetAllBorrowsQuery, useCreateBorrowMutation } = borrowsApi;
