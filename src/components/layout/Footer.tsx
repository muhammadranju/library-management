import { Link } from "react-router";
import bookIcon from "../../assets/book.svg";
export const Footer = () => {
  return (
    <footer className="px-4 pt-16 mx-auto   md:px-24 lg:px-8 container">
      <div className="grid gap-16 mb-8 lg:grid-cols-6">
        <div className=" lg:col-span-2">
          <Link className="inline-flex items-center mr-8" to={"/"}>
            <img
              src={bookIcon}
              alt="book"
              className="w-8 text-black dark:text-white dark:invert"
            />
            <span className="ml-2 text-lg font-bold tracking-wide uppercase">
              Books
            </span>
          </Link>
          <div className="mt-4 text-sm text-gray-800 dark:text-gray-400 space-y-4 lg:max-w-sm">
            <p>
              Easily organize, track, and manage your entire book collection
              with our intuitive book management system.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
          {[
            {
              title: "Category",
              links: ["News", "World", "Games"],
            },
            {
              title: "Business",
              links: ["Web", "eCommerce", "Business"],
            },
            {
              title: "Apples",
              links: ["Media", "Brochure", "Nonprofit"],
            },
            {
              title: "Cherry",
              links: ["Infopreneur", "Personal", "Wiki"],
            },
          ].map((section) => (
            <div key={section.title}>
              <p className="font-semibold tracking-wide text-gray-800 dark:text-gray-100">
                {section.title}
              </p>
              <ul className="mt-2 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-gray-600 dark:text-gray-400 transition duration-300 hover:text-deep-purple-accent-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center pt-5 pb-10 border-t border-gray-300 dark:border-gray-700 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © Copyright {new Date().getFullYear()} Md Ranju. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
