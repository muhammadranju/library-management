"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useCreateBorrowMutation } from "@/redux/api/borrowsApi";
import type { BorrowProps, IBook } from "@/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface BorrowDialogProps {
  book: IBook | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: () => void;
  data?: BorrowProps;
}

export default function BorrowDialog({
  book,
  open,
  onOpenChange,
  onComplete,
}: BorrowDialogProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [createBorrow] = useCreateBorrowMutation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!book || quantity < 1 || !dueDate) {
      toast.error("Please fill all fields correctly");
      return;
    }

    try {
      await createBorrow({
        book: book._id,
        quantity,
        dueDate: dueDate.toISOString(),
      }).unwrap();
      toast.success("Book borrowed successfully!");

      onOpenChange(false);
      setTimeout(() => {
        setQuantity(1);
        setDueDate(null);
        onComplete();
        navigate("/borrow-summary");
      }, 300);
    } catch (error) {
      console.error(error);
      toast.error("Failed to borrow book.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Borrow "{book?.title}"
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* Quantity Input */}
          <div className="space-y-1">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setQuantity(val > 0 ? val : 1);
              }}
            />
          </div>

          {/* Date Picker */}
          <div className="space-y-1">
            <Label>Due Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dueDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dueDate ?? undefined}
                  onSelect={(date: Date | undefined) => {
                    if (date) setDueDate(date);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button className="w-full mt-2" onClick={handleSubmit}>
            Confirm Borrow
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
