import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useGetBooksQuery } from "@/redux/api/booksApi";
import { useCreateBorrowMutation } from "@/redux/api/borrowsApi";
import type { IBook } from "@/types";
import CardSkeleton from "@/components/Skeletons/CardSkeleton";

export default function Books() {
  const [open, setOpen] = useState(false);
  const {
    data: books,
    isLoading,
    isError,
    refetch,
  } = useGetBooksQuery(undefined);
  const [createBorrow] = useCreateBorrowMutation();
  const navigate = useNavigate();

  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const handleDelete = (bookId: string) => {
    console.log(bookId);
    toast.error("Delete function not implemented yet.");
  };

  const handleBorrowSubmit = async () => {
    if (!selectedBook || !quantity || !dueDate) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await createBorrow({
        book: selectedBook._id,
        quantity,
        dueDate,
      }).unwrap();

      refetch();
      setDueDate("");
      toast.success("Book borrowed successfully!");
      setSelectedBook(null);
      setQuantity(1);
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to borrow book.");
    }
  };

  // if (isLoading)
  //   return (
  //     <p className="text-center text-muted-foreground">Loading books...</p>
  //   );
  if (isError)
    return (
      <p className="text-center text-destructive">Failed to load books.</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📚 All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array(9)
              .fill(null)
              .map((_, i) => <CardSkeleton key={i} />)
          : books?.books?.map((book: IBook) => (
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
                    {/* Borrow Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedBook(book)}>
                          Borrow
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-sm">
                        <DialogHeader>
                          <DialogTitle>
                            Borrow "{selectedBook?.title}"
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              min={1}
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(Number(e.target.value))
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="dueDate">Due Date</Label>
                            <Input
                              id="dueDate"
                              type="date"
                              value={dueDate}
                              onChange={(e) => setDueDate(e.target.value)}
                            />
                          </div>

                          <Button
                            className="w-full"
                            onClick={handleBorrowSubmit}
                          >
                            Confirm Borrow
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/edit-book/${book._id}`)}
                      >
                        <Pencil className="w-4 h-4 mr-1" />
                        Edit
                      </Button>

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
