export const Statistic = () => {
  return (
    <div className="text-foreground py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        {/* Total Books */}
        <div className="border border-foreground/10 p-6 rounded-lg">
          <div className="flex items-center">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-primary">
              1.2K
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-400 dark:bg-teal-600 w-7 h-7">
              <svg
                className="text-black dark:text-white w-4 h-4"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg text-foreground">
            Total Books
          </p>
          <p className="text-muted-foreground">
            The complete collection of titles available in your library,
            including both.
          </p>
        </div>

        {/* Total Borrows */}
        <div className="border border-foreground/10 p-6 rounded-lg">
          <div className="flex items-center">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-primary">
              5.7K
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-400 dark:bg-teal-600 w-7 h-7">
              <svg
                className="text-black dark:text-white w-4 h-4"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg text-foreground">
            Total Borrows
          </p>
          <p className="text-muted-foreground">
            Tracks how many times books have been borrowed by users across all
            categories.
          </p>
        </div>

        {/* Books Sold */}
        <div className="border border-foreground/10 p-6 rounded-lg">
          <div className="flex items-center">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-primary">
              3.2K
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-400 dark:bg-teal-600 w-7 h-7">
              <svg
                className="text-black dark:text-white w-4 h-4"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg text-foreground">
            Books Sold
          </p>
          <p className="text-muted-foreground">
            Total number of books sold via direct purchases or online
            marketplace platforms.
          </p>
        </div>
      </div>
    </div>
  );
};
