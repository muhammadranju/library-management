import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreateBookInput } from "@/schema/book.schema";
import type { IBook } from "@/types";

interface GetBooksParams {
  page?: number;
  limit?: number;
}

interface GetBooksResponse {
  books: IBook[];
  total: number;
  page: number;
  limit: number;
}

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Books", "Borrows"],
  endpoints: (builder) => ({
    createBook: builder.mutation<void, CreateBookInput>({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books", "Borrows"],
    }),

    getBooks: builder.query<GetBooksResponse, GetBooksParams | void>({
      query: ({ page = 1, limit = 6 } = {}) =>
        `/books?page=${page}&limit=${limit}`,
      providesTags: ["Books"],
    }),

    getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),

    updateBook: builder.mutation<void, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books", "Borrows"],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books", "Borrows"],
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
