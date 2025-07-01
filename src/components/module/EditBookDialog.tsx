import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useUpdateBookMutation } from "@/redux/api/booksApi";
import toast from "react-hot-toast";
import type { IBook } from "@/types";

interface FormState {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  image: string;
  copies: number;
  available: boolean;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: IBook | null;
  onSuccess: () => void;
}

export default function EditBookDialog({
  open,
  onOpenChange,
  book,
  onSuccess,
}: Props) {
  const [form, setForm] = useState<FormState>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    image: "",
    copies: 0,
    available: true,
  });

  const [updateBook] = useUpdateBookMutation();

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        image: book.image,
        copies: book.copies,
        available: book.available,
      });
    }
  }, [book]);

  const handleSubmit = async () => {
    if (!book) return;

    try {
      // Assuming the API expects id and data exactly as shown
      await updateBook({ id: book._id, data: form }).unwrap();
      toast.success("Book updated!");
      onOpenChange(false);
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Update failed.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Edit Book</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {(
            ["title", "author", "genre", "isbn", "image"] as (keyof FormState)[]
          ).map((field) => (
            <div key={field} className="space-y-1">
              <Label htmlFor={field} className="text-sm capitalize">
                {field}
              </Label>
              <Input
                id={field}
                value={form[field] as string}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, [field]: e.target.value }))
                }
              />
            </div>
          ))}

          <div className="space-y-1">
            <Label htmlFor="copies" className="text-sm">
              Copies
            </Label>
            <Input
              id="copies"
              type="number"
              value={form.copies}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  copies: Number(e.target.value) || 0,
                }))
              }
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="available" className="text-sm">
              Availability
            </Label>
            <Select
              value={form.available ? "true" : "false"}
              onValueChange={(val) =>
                setForm((prev) => ({ ...prev, available: val === "true" }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Available</SelectItem>
                <SelectItem value="false">Unavailable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full mt-2" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
