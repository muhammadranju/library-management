import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetBooksQuery } from "@/redux/api/booksApi";
import type { IBook } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Books() {
  const { data: books, isLoading, isError } = useGetBooksQuery(undefined);
  const navigate = useNavigate();

  if (isLoading)
    return (
      <p className="text-center text-muted-foreground">Loading books...</p>
    );
  if (isError)
    return (
      <p className="text-center text-destructive">Failed to load books.</p>
    );

  function handleDelete(bookId: string) {
    console.log(bookId);
    toast.error("Delete function not implemented yet.");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books?.books?.map((book: IBook) => (
          <Card key={book._id} className="rounded-2xl border shadow-sm">
            <CardContent className="p-4 space-y-2">
              <div>
                <h2 className="text-lg font-semibold text-primary">
                  {book.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  by {book.author}
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Genre:</span>{" "}
                {book.genre}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">ISBN:</span>{" "}
                {book.isbn}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Copies:</span>{" "}
                {book.copies}
              </p>

              <p
                className={`text-sm font-medium ${
                  book.available
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-500"
                }`}
              >
                {book.available ? "Available" : "Unavailable"}
              </p>

              <div className="flex items-center justify-between pt-4">
                {/* Borrow Button */}
                <Button onClick={() => navigate(`/borrow/${book._id}`)}>
                  Borrow
                </Button>

                <div className="flex gap-2">
                  {/* Edit Button */}
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>

                  {/* Delete Button */}
                  <Button
                    variant="ghost"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => handleDelete(book._id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
