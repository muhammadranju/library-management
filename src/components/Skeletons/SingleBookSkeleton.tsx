const SingleBookSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 rounded-2xl shadow-lg">
        <div className="w-full h-full bg-neutral-300 dark:bg-neutral-700 rounded-xl" />
        <div className="space-y-4 p-0">
          <div className="flex items-center justify-between">
            <div className="h-8 bg-neutral-300 dark:bg-neutral-700 rounded w-1/3" />
            <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-1/4" />
          </div>
          <div>
            <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />
            <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-2/3" />
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="w-1/2">
              <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded" />
            </div>
            <div className="w-1/2">
              <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded" />
            </div>
          </div>
          <div>
            <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-1/3" />
          </div>
          <div className="h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded" />
          <div>
            <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded mb-2 w-1/3" />
            <div className="h-16 bg-neutral-300 dark:bg-neutral-700 rounded" />
          </div>
          <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded w-full mt-4" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />{" "}
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2 w-2/4" />{" "}
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />{" "}
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2 w-2/5" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2 w-2/6" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2 w-1/2" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2 w-2/3" />
          <div className="h-5 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />
        </div>
      </div>
    </div>
  );
};

export default SingleBookSkeleton;
