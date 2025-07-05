export interface IBook {
  _id: string;
  title: string;
  author: string;
  image: string;
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

export interface BooksProps {
  _id: string;
  title: string;
  author: string;
  image: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export interface BorrowProps {
  _id: string;
  bookId: string;
  quantity: number;
  isbn: number;
  dueDate: string;
  totalQuantity: number;
  book: {
    _id: string;
    title: string;
    author: string;
    image: string;
    genre: string;
    isbn: string;
    description?: string;
    copies: number;
    available: boolean;
  };
}
