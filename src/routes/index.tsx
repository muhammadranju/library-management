import App from "@/App";
import BookDetails from "@/pages/BookDetails";
import Books from "@/pages/Books";
import BorrowBooks from "@/pages/BorrowBooks";
import CreateBook from "@/pages/CreateBook";
import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "books",
        Component: Books,
      },
      {
        path: "books/:id",
        Component: BookDetails,
      },
      {
        path: "create-book",
        Component: CreateBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowBooks,
      },
    ],
  },
]);

export default router;
