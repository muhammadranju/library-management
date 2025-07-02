import BookCard from "@/components/module/BookCard";
import BorrowDialog from "@/components/module/BorrowDialog";
import DeleteBookDialog from "@/components/module/DeleteBookDialog";
import EditBookDialog from "@/components/module/EditBookDialog";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";
import { useGetBooksQuery } from "@/redux/api/booksApi";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";
import type { IBook } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BooksApiResponse {
  books: IBook[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

export default function Books() {
  const [page, setPage] = useState(1);
  const limit = 9;

  const {
    data: booksData,
    isLoading,
    isError,
    refetch,
  } = useGetBooksQuery({ page, limit }) as {
    data?: BooksApiResponse;
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
  };

  const { refetch: refetchBorrows } = useGetAllBorrowsQuery(undefined);

  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleBorrow = (book: IBook) => {
    setSelectedBook(book);
    setBorrowOpen(true);
  };

  const handleEdit = (book: IBook) => {
    setSelectedBook(book);
    setEditOpen(true);
  };

  const handleDelete = (book: IBook) => {
    setSelectedBook(book);
    setDeleteOpen(true);
  };

  const total = booksData?.meta?.total || 0;
  const totalPages = Math.ceil(total / limit);

  if (isError)
    return (
      <p className="text-center text-destructive">Failed to load books.</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 mt-10">All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 9 }).map((_, i) => <CardSkeleton key={i} />)
          : booksData?.books?.map((book) => (
              <BookCard
                key={book._id}
                book={book}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onBorrow={handleBorrow}
              />
            ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === page ? "default" : "outline"}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Dialogs */}
      <BorrowDialog
        book={selectedBook}
        open={borrowOpen}
        onOpenChange={setBorrowOpen}
        onComplete={() => {
          setSelectedBook(null);
          refetchBorrows();
          refetch();
        }}
      />
      <EditBookDialog
        book={selectedBook}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSuccess={() => {
          setSelectedBook(null);
          refetch();
        }}
      />
      <DeleteBookDialog
        book={selectedBook}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onSuccess={() => {
          setSelectedBook(null);
          refetch();
          refetchBorrows();
        }}
      />
    </div>
  );
}
