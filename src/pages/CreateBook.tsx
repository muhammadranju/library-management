import { useCreateBookMutation } from "@/redux/api/booksApi";
import { createBookSchema, type CreateBookInput } from "@/schema/book.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export default function CreateBook() {
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateBookInput>({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      available: true,
    },
  });

  const onSubmit = async (data: CreateBookInput) => {
    try {
      await createBook(data).unwrap();
      toast.success("Book created successfully!");
      navigate("/books");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create book");
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-10">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Add New Book</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              placeholder="Add your title here"
              id="title"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>

          {/* Author */}
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              placeholder="Add your author here"
              id="author"
              {...register("author")}
            />
            {errors.author && (
              <p className="text-sm text-destructive">
                {errors.author.message}
              </p>
            )}
          </div>
          {/* Image */}
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              placeholder="Add your image url here"
              id="image"
              {...register("image")}
            />
            {errors.image && (
              <p className="text-sm text-destructive">{errors.image.message}</p>
            )}
          </div>

          {/* Genre (Dropdown) */}
          <div className="space-y-2 ">
            <Label htmlFor="genre">Genre</Label>
            <Select
              onValueChange={(
                value:
                  | "FICTION"
                  | "NON_FICTION"
                  | "SCIENCE"
                  | "HISTORY"
                  | "BIOGRAPHY"
                  | "FANTASY"
              ) => setValue("genre", value)}
            >
              <SelectTrigger id="genre" className="w-full">
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre.replace("_", " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.genre && (
              <p className="text-sm text-destructive">{errors.genre.message}</p>
            )}
          </div>

          {/* ISBN */}
          <div className="space-y-2">
            <Label htmlFor="isbn">ISBN</Label>
            <Input
              placeholder="Add your ISBN here"
              id="isbn"
              {...register("isbn")}
            />
            {errors.isbn && (
              <p className="text-sm text-destructive">{errors.isbn.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Add your description here"
              id="description"
              rows={3}
              {...register("description")}
            />
          </div>

          {/* Copies */}
          <div className="space-y-2">
            <Label htmlFor="copies">Copies</Label>
            <Input
              placeholder="Add your copies here"
              id="copies"
              type="number"
              {...register("copies", { valueAsNumber: true })}
            />
            {errors.copies && (
              <p className="text-sm text-destructive">
                {errors.copies.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" disabled={isLoading} className="w-full mt-4">
            {isLoading ? "Creating..." : "Create Book"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
