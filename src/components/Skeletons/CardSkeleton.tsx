const CardSkeleton = () => {
  return (
    <div className="rounded-2xl border shadow-sm space-y-4 animate-pulse p-2 bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full h-96 bg-neutral-300 dark:bg-neutral-700 rounded-lg" />
      <div className="space-y-5">
        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 w-3/4 rounded-full " />
        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 w-1/2 rounded-full" />
      </div>
      <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-full w-1/3" />
      <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-full w-1/2" />
      <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-full w-1/4" />
      <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-full w-1/2" />
      <div className="flex items-center justify-between ">
        <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-1/4" />
        <div className="flex gap-2 ">
          <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-16" />
          <div className="h-10 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-16" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
