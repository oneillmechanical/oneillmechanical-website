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

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  const icon = serviceIcons[title];
  const cardClassName =
    "group block h-full rounded-xl border border-[#405363] bg-[#263746] p-6 shadow-sm transition-colors duration-200 hover:border-[#3282B8] hover:bg-[#2D4253] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17212B]";

  const content = (
    <>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#E9EEF2] p-1.5">
            <Image src={icon} alt="" width={48} height={48} className="h-12 w-auto object-contain" aria-hidden="true" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-[#F1F5F9] transition-colors duration-200 group-hover:text-white">
          {title}
        </h3>
      </div>
      <p className="mt-4 leading-7 text-[#CBD5E1]">{description}</p>
      <span className="mt-5 inline-flex font-semibold text-[#6CB6E8] transition-colors duration-200 group-hover:text-[#BFD7EA]">
        Learn More →
      </span>
    </>
  );

  if (!href) return <div className={cardClassName}>{content}</div>;
  return <Link href={href} className={cardClassName}>{content}</Link>;
}
