export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "all" | "high" | "medium" | "low";
  assignedTo: string | null;
}

export interface IUser {
  id: string;
  name: string;
  // email: string;
}

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export interface IBorrow {
  _id: string;
  bookId: string;
  quantity: number;
  dueDate: string;
}
