# Library Management System

A modern, full-stack **Library Management System** built with:

- **React**
- **Tailwind CSS**
- **ShadCN UI**
- **Redux Toolkit & RTK Query**
- **MongoDB (with Mongoose)**
- **Express.js Backend (via API routes or a separate server)**

---

## Features

- View all books with pagination
- Add, ✏️ Edit, ❌ Delete books
- Borrow and return books
- Real-time availability update
- Global state management using Redux Toolkit
- Fully responsive and elegant UI using ShadCN and Tailwind CSS

---

## Project Structure

```

.
├── components/ # UI components (modular and reusable)
│ ├── module/ # Dialogs and BookCard UI
│ └── Skeletons/ # Loading states
├── redux/ # RTK store and API slices
│ ├── api/ # RTK Query APIs (books & borrows)
│ └── store.ts # Redux store setup
├── pages/ or app/ # Next.js App pages
├── types/ # Shared TypeScript interfaces
├── utils/ # Utility functions (if needed)
├── public/ # Static assets
└── README.md # You're here!

```

---

## Tech Stack

| Frontend    | Backend            | Styling      | State/API     |
| ----------- | ------------------ | ------------ | ------------- |
| react.js 14 | Express.js         | Tailwind CSS | Redux Toolkit |
| React       | MongoDB + Mongoose | ShadCN UI    | RTK Query     |

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/muhammadranju/library-management.git
cd library-management
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file and add the following:

```
MONGODB_URI=your_mongodb_connection_string
API_BASE_URL=http://localhost:3000/api
```

> Adjust the API URL if using a separate backend.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:3000`.

---

## Pagination

Books are loaded with **pagination** from the backend using RTK Query. You can navigate using **Previous / Next / Page buttons**, and the component fetches data dynamically based on the current page.

---

## API Overview (via RTK Query)

- `GET /books?page=1&limit=9`
- `POST /books` — Add book
- `PUT /books/:id` — Update book
- `DELETE /books/:id` — Delete book
- `GET /borrows` — Get all borrow records
- `POST /borrows` — Borrow a book

API data is fetched using **RTK Query** for caching, auto refetching, and consistent state updates.

---

## UI and Styling

- Built with **ShadCN UI** components (Dialogs, Buttons, Inputs)
- Styled using **Tailwind CSS**
- Custom Skeletons for loading states
- Accessible, clean, and responsive design

---

## TypeScript Types

All components and API data are strongly typed using shared `IBook` and `IBorrow` interfaces in `types/`.

```ts
interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  image: string;
  copies: number;
  available: boolean;
}
```

---

## 🧠 Author

Built with ❤️ by Md Ranju
