import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router";
import bookIcon from "../../assets/book.svg";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto   text-black dark:text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link className="inline-flex items-center mr-8" to={"/"}>
            <img
              src={bookIcon}
              alt="book"
              className="w-8 dark:invert text-black dark:text-white"
            />
            <span className="ml-2 text-lg font-bold tracking-wide uppercase">
              Books
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <Link to={"/books"}>
              <li className="font-medium tracking-wide text-black dark:text-white transition-colors duration-200 hover:underline">
                All Books
              </li>
            </Link>
            <Link to={"/create-book"}>
              <li className="font-medium tracking-wide text-black dark:text-white transition-colors duration-200 hover:underline">
                Add Book
              </li>
            </Link>
            <Link to={"/borrow-summary"}>
              <li className="font-medium tracking-wide text-black dark:text-white transition-colors duration-200 hover:underline">
                Borrow Summary
              </li>
            </Link>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-black/10 dark:hover:bg-white/10"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black dark:text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white dark:bg-black border rounded shadow-sm text-black dark:text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link className="inline-flex items-center mr-8" to={"/"}>
                      <img
                        src={bookIcon}
                        alt="book"
                        className="w-8 dark:invert text-black dark:text-white"
                      />
                      <span className="ml-2 text-lg font-bold tracking-wide uppercase">
                        Books
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 text-black dark:text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <Link to={"/books"}>
                      <li className="font-medium tracking-wide text-black dark:text-white transition-colors duration-200 hover:underline">
                        All Books
                      </li>
                    </Link>
                    <Link to={"/create-book"}>
                      <li className="font-medium tracking-wide text-black dark:text-white transition-colors duration-200 hover:underline">
                        Add Book
                      </li>
                    </Link>
                    <Link to={"/borrow-summary"}>
                      <li className="font-medium tracking-wide text-black dark:text-white transition-colors duration-200 hover:underline">
                        Borrow Summary
                      </li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
