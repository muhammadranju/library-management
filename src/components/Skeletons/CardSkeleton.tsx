const CardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-2xl border shadow-sm p-4 space-y-2">
        <div>
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-1/3 mt-1" />
        </div>
        <div className="h-3 bg-gray-200 rounded w-1/4" />
        <div className="h-3 bg-gray-200 rounded w-1/4 mt-1" />
        <div className="h-3 bg-gray-200 rounded w-1/4 mt-1" />
        <div className="h-3 bg-gray-200 rounded w-1/4 mt-1" />
        <div className="flex items-center justify-between pt-4">
          <div className="h-8 bg-gray-200 rounded w-1/4" />
          <div className="flex gap-2">
            <div className="h-8 bg-gray-200 rounded w-16 mr-1" />
            <div className="h-8 bg-gray-200 rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
