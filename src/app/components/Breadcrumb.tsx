interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-start gap-2 self-stretch flex-wrap content-start p-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex flex-col items-start">
            <div
              className={`self-stretch text-base font-medium leading-6 ${
                index === items.length - 1
                  ? "text-neutral-900"
                  : "text-neutral-500"
              }`}
            >
              {item.label}
            </div>
          </div>
          {index < items.length - 1 && (
            <div className="flex flex-col items-start">
              <div className="self-stretch text-base font-medium leading-6 text-neutral-500">
                /
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
