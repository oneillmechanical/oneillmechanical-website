import Link from "next/link";

type PageIdentifierProps = {
  current: string;
  parent?: {
    label: string;
    href: string;
  };
};

export default function PageIdentifier({
  current,
  parent,
}: PageIdentifierProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex rounded-lg bg-white px-3 py-1.5 shadow-sm"
    >
      <ol className="flex items-center gap-2 text-sm font-medium text-[#2F7FAF]">
        {parent && (
          <>
            <li>
              <Link
                href={parent.href}
                className="transition-colors duration-150 hover:text-[#17324D]"
              >
                {parent.label}
              </Link>
            </li>

            <li
              aria-hidden="true"
              className="text-[#94A3B8]"
            >
              /
            </li>
          </>
        )}

        <li
          aria-current="page"
          className="text-[#2F7FAF]"
        >
          {current}
        </li>
      </ol>
    </nav>
  );
}