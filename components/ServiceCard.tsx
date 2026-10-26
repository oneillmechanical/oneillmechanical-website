import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
};

const serviceIcons: Record<string, string> = {
  Plumbing: "/images/OM-ICONS/plumbing.png",
  "Re-Pipes": "/images/OM-ICONS/re-pipe.png",
  "Hot Water Tanks": "/images/OM-ICONS/hotwater-tank.png",
  Boilers: "/images/OM-ICONS/boilers.png",
  "Gas Services": "/images/OM-ICONS/gas.png",
  Drainage: "/images/OM-ICONS/drainage.png",
  Backflows: "/images/OM-ICONS/backflows.png",
  Inspections: "/images/OM-ICONS/inspections.png",
  "Fixture Installation": "/images/OM-ICONS/fixtures.png",
};

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  const icon = serviceIcons[title];

  const cardContent = (
    <>
      <div className="flex items-center gap-3">
        {icon && (
          <Image
            src={icon}
            alt=""
            width={52}
            height={52}
            className="h-13 w-13 shrink-0 object-contain"
            aria-hidden="true"
          />
        )}

        <h3 className="text-xl font-semibold text-[#17324D] transition-colors duration-200 group-hover:text-[#2F6690]">
          {title}
        </h3>
      </div>

      <p className="mt-4 leading-7 text-[#374151]">
        {description}
      </p>

      <span className="mt-5 inline-flex font-semibold text-[#2F6690] transition-colors duration-200 group-hover:text-[#17324D]">
        Learn More →
      </span>
    </>
  );

  const cardClassName =
    "group block h-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] p-6 shadow-sm transition-colors duration-200 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2";

  if (!href) {
    return <div className={cardClassName}>{cardContent}</div>;
  }

  return (
    <Link href={href} className={cardClassName}>
      {cardContent}
    </Link>
  );
}
