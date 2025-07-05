import BorrowSkeleton from "@/components/Skeletons/BorrowSkeleton";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";
import type { BorrowProps } from "@/types";
import { Helmet } from "react-helmet";

export default function BorrowBooks() {
  const {
    data: borrows,
    isLoading,
    isError,
  } = useGetAllBorrowsQuery(undefined);
  console.log(borrows);

  // if (isLoading) return <p>Loading borrows…</p>;
  if (isError) return <p>Error loading borrow records.</p>;

  return (
    <div>
      <Helmet>
        <title>Borrow Summary</title>
        <meta name="description" content="Borrow Summary" />
      </Helmet>
      <h2 className="text-xl font-semibold mb-4">Borrow Summary</h2>
      <ul className="space-y-2 ">
        {isLoading ? (
          <BorrowSkeleton />
        ) : (
          borrows?.data?.map((borrow: BorrowProps) => (
            <li
              key={borrow.isbn}
              className="border p-2 rounded dark:bg-neutral-900/40"
            >
              <p>
                <strong>Book Title:</strong> {borrow.book.title}
              </p>
              <p>
                <strong>Book ISBN:</strong> {borrow.book.isbn}
              </p>
              <p>
                <strong>Total Quantity:</strong> {borrow.totalQuantity}
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
