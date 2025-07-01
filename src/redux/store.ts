// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./api/booksApi";
import { borrowsApi } from "./api/borrowsApi";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [borrowsApi.reducerPath]: borrowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(booksApi.middleware)
      .concat(borrowsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
