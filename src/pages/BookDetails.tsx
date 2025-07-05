import BorrowDialog from "@/components/module/BorrowDialog";
import SingleBookSkeleton from "@/components/Skeletons/SingleBookSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetBookByIdQuery, useGetBooksQuery } from "@/redux/api/booksApi";
import { useGetAllBorrowsQuery } from "@/redux/api/borrowsApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading, isError, refetch } = useGetBookByIdQuery(id!);
  const { refetch: refetchBorrows } = useGetAllBorrowsQuery(undefined);
  const { refetch: refetchBooks } = useGetBooksQuery({ page, limit });

  const book = data?.data;

  const handleBorrow = () => {
    setBorrowOpen(true);
  };

  useEffect(() => {
    setPage(1);
  }, [page]);

  if (isLoading) return <SingleBookSkeleton />;
  if (isError || !book)
    return <p className="p-4 text-center">Book not found.</p>;

  return (
    <>
      {/* <SingleBookSkeleton /> */}
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <Card className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 rounded-2xl shadow-lg">
          <div className="w-full h-full">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <CardContent className="space-y-4 p-0">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">{book.title}</h2>
              <Badge className={book.available ? "bg-green-600" : "bg-red-600"}>
                {book.available ? "Available" : "Unavailable"}
              </Badge>
            </div>

            <div>
              <p className="text-muted-foreground text-sm">By</p>
              <p className="font-medium text-lg">{book.author}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div>
                <strong>Genre:</strong> {book.genre}
              </div>
              <div>
                <strong>ISBN:</strong> {book.isbn}
              </div>
            </div>

            <div>
              <strong>Copies:</strong> {book.copies}
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                {book.description}
              </p>
            </div>

            <Button onClick={handleBorrow} className="w-full mt-4">
              Borrow Book
            </Button>
          </CardContent>
        </Card>
        {/* Dialogs */}
        <BorrowDialog
          book={book}
          open={borrowOpen}
          onOpenChange={setBorrowOpen}
          onComplete={() => {
            refetchBorrows();
            refetch();
            refetchBooks();
          }}
        />
      </div>
    </>
  );
}
