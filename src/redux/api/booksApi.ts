// src/redux/api/booksApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateBookInput } from "@/schema/book.schema";
import type { IBook } from "@/types";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    createBook: builder.mutation<void, CreateBookInput>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),

    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),

    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),

    updateBook: builder.mutation<void, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
