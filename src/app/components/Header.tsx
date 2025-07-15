import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-3 w-full border-b border-slate-300 bg-neutral-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6667 0.333333H9.2222V4.7778H4.7778V9.2222H0.333333V13.6667H13.6667V0.333333Z"
                fill="#141414"
              />
            </svg>
          </div>
          <h1 className="text-lg font-bold text-neutral-900">StyleHub</h1>
        </div>

        <nav className="flex items-center gap-9">
          <Link
            href="/"
            className="text-sm font-normal text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            New Arrivals
          </Link>
          <Link
            href="/men"
            className="text-sm font-normal text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Men
          </Link>
          <div className="relative group">
            <Link
              href="/women"
              className="text-sm font-normal text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Women
            </Link>
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[160px]">
              <Link
                href="/women/dresses"
                className="block px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50 rounded-t-lg"
              >
                Dresses
              </Link>
              <Link
                href="/women"
                className="block px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
              >
                All Women's
              </Link>
            </div>
          </div>
          <Link
            href="/accessories"
            className="text-sm font-normal text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Accessories
          </Link>
          <Link
            href="/sale"
            className="text-sm font-normal text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Sale
          </Link>
        </nav>
      </div>

      <div className="flex justify-end items-start gap-8 flex-1">
        <div className="flex min-w-40 max-w-64">
          <div className="flex justify-center items-center pl-4 bg-slate-200 rounded-l-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5Z"
                fill="#737373"
              />
            </svg>
          </div>
          <div className="flex items-center py-2 px-4 flex-1 bg-slate-200 rounded-r-lg">
            <span className="text-base text-neutral-500">Search</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <button className="flex justify-center items-center p-2.5 w-10 h-10 bg-slate-200 rounded-lg">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9062 0.5C11.293 0.5 9.88047 1.19375 9 2.36641C8.11953 1.19375 6.70703 0.5 5.09375 0.5C2.41987 0.503014 0.253014 2.66987 0.25 5.34375C0.25 10.8125 8.35859 15.2391 8.70391 15.4219C8.88878 15.5213 9.11122 15.5213 9.29609 15.4219C9.64141 15.2391 17.75 10.8125 17.75 5.34375C17.747 2.66987 15.5801 0.503014 12.9062 0.5ZM9 14.1562C7.57344 13.325 1.5 9.53828 1.5 5.34375C1.50258 3.36005 3.11005 1.75258 5.09375 1.75C6.61328 1.75 7.88906 2.55937 8.42188 3.85938C8.51818 4.09382 8.74654 4.2469 9 4.2469C9.25346 4.2469 9.48182 4.09382 9.57812 3.85938C10.1109 2.55703 11.3867 1.75 12.9062 1.75C14.89 1.75258 16.4974 3.36005 16.5 5.34375C16.5 9.53203 10.425 13.3242 9 14.1562Z"
                fill="#141414"
              />
            </svg>
          </button>
          <button className="flex justify-center items-center p-2.5 w-10 h-10 bg-slate-200 rounded-lg">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.875 0.125H2.125C1.43464 0.125 0.875 0.684644 0.875 1.375V12.625C0.875 13.3154 1.43464 13.875 2.125 13.875H15.875C16.5654 13.875 17.125 13.3154 17.125 12.625V1.375C17.125 0.684644 16.5654 0.125 15.875 0.125ZM15.875 12.625H2.125V1.375H15.875V12.625ZM12.75 3.875C12.75 5.94607 11.0711 7.625 9 7.625C6.92893 7.625 5.25 5.94607 5.25 3.875C5.25 3.52982 5.52982 3.25 5.875 3.25C6.22018 3.25 6.5 3.52982 6.5 3.875C6.5 5.25571 7.61929 6.375 9 6.375C10.3807 6.375 11.5 5.25571 11.5 3.875C11.5 3.52982 11.7798 3.25 12.125 3.25C12.4702 3.25 12.75 3.52982 12.75 3.875Z"
                fill="#141414"
              />
            </svg>
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ad63b305a8a14d5165b31499bd6d5589cdbe285?width=80"
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
