import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  const cardContent = (
    <>
      <h3 className="text-xl font-semibold text-[#17324D] transition-colors duration-200 group-hover:text-[#2F6690]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[#374151]">
        {description}
      </p>

      <span className="mt-5 inline-flex font-semibold text-[#2F6690] transition-colors duration-200 group-hover:text-[#17324D]">
        Learn More →
      </span>
    </>
  );

  const cardClassName =
    "group block h-full rounded-lg border border-[#CBD5E1] bg-white p-6 shadow-sm transition-colors duration-200 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2";

  if (!href) {
    return (
      <div className={cardClassName}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={href} className={cardClassName}>
      {cardContent}
    </Link>
  );
}
