interface RatingBreakdownProps {
  ratings: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export function RatingBreakdown({ ratings }: RatingBreakdownProps) {
  const total = Object.values(ratings).reduce((sum, count) => sum + count, 0);

  const getPercentage = (count: number) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  const getBarWidth = (count: number) => {
    const percentage = getPercentage(count);
    // Scale to fit the container (max width around 170px)
    return Math.round((percentage / 100) * 170);
  };

  return (
    <div className="flex min-w-[200px] max-w-[400px] flex-col items-start gap-3 flex-1">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div key={rating} className="flex items-center flex-1 self-stretch">
          <div className="flex w-5 flex-col items-start self-stretch">
            <div className="self-stretch text-sm font-normal leading-5 text-neutral-900">
              {rating}
            </div>
          </div>
          <div className="flex h-2 items-start flex-1 rounded bg-stone-300">
            <div
              className="flex flex-col items-start self-stretch rounded bg-neutral-900"
              style={{
                width: `${getBarWidth(ratings[rating as keyof typeof ratings])}px`,
              }}
            ></div>
          </div>
          <div className="flex w-10 flex-col items-start self-stretch">
            <div className="self-stretch text-right text-sm font-normal leading-5 text-neutral-500">
              {getPercentage(ratings[rating as keyof typeof ratings])}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
