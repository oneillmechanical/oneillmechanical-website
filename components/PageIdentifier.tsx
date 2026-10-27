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
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#6CB6E8] sm:text-base">
        {parent && (
          <>
            <li>
              <Link
                href={parent.href}
                className="transition-colors duration-150 hover:text-[#BFD7EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1720]"
              >
                {parent.label}
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#64788A]">
              /
            </li>
          </>
        )}
        <li aria-current="page" className="text-[#6CB6E8]">
          {current}
        </li>
      </ol>
    </nav>
  );
}
