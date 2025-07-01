import { Link } from "react-router";

export const HeroSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  ">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-teal-100 uppercase rounded-full bg-teal-accent-400 dark:bg-teal-700">
                New Books
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              Simplify Your Library,
              <br className="hidden md:block" />
              One Book{" "}
              <span className="inline-block text-deep-purple-accent-400 dark:text-deep-purple-300">
                One Book at a Time
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
              Easily organize, track, and manage your entire book collection
              with our intuitive book management system. Whether you're a
              personal collector or a library administrator, keep everything at
              your fingertips—efficiently and effortlessly.
            </p>
          </div>
          <Link
            to="/borrow-summary"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 dark:text-deep-purple-300 hover:text-deep-purple-800 dark:hover:text-deep-purple-500"
          >
            See more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="relative ">
          <svg
            className="absolute w-full text-teal-accent-400 dark:text-teal-700"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8" />
            <rect x="525" y="260" width="75" height="132" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="315" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg
            className="relative w-full text-deep-purple-accent-400 dark:text-deep-purple-300"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="311" width="75" height="81" rx="8" />
            <rect x="525" y="351" width="75" height="41" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="315" y="83" width="75" height="309" rx="8" />
          </svg>
        </div>
      </div>
    </div>
  );
};
