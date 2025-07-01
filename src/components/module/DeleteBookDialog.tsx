import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useDeleteBookMutation } from "@/redux/api/booksApi";
import type { IBook } from "@/types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: IBook | null;
  onSuccess: () => void;
}

export default function DeleteBookDialog({
  open,
  onOpenChange,
  book,
  onSuccess,
}: Props) {
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async () => {
    if (!book) return;
    try {
      await deleteBook(book._id).unwrap();
      toast.success("Book deleted.");
      onOpenChange(false);
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <p>
          Are you sure you want to delete{" "}
          <span className="font-semibold">{book?.title}</span>?
        </p>
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
