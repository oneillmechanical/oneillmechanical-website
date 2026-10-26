import Image from "next/image";
import Link from "next/link";

type ServicePageProps = {
  title: string;
  intro: string;
  overview: string[];
  services: string[];
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

export default function ServicePage({
  title,
  intro,
  overview,
  services,
}: ServicePageProps) {
  const icon = serviceIcons[title];

  return (
    <>
      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
            ONeill Mechanical Services
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            {icon && (
              <Image
                src={icon}
                alt=""
                width={88}
                height={88}
                className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                aria-hidden="true"
              />
            )}

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#17324D] sm:text-5xl">
              {title}
            </h1>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#374151] sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              {icon && (
                <Image
                  src={icon}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 object-contain"
                  aria-hidden="true"
                />
              )}

              <h2 className="text-3xl font-bold text-[#17324D]">
                {title} Services
              </h2>
            </div>

            {overview.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7 text-[#374151]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-[#17324D]">
            What We Can Help With
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#CBD5E1] bg-white p-5 text-[#374151] shadow-sm"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex justify-center rounded-lg border border-[#CBD5E1] bg-white px-5 py-3 font-semibold text-[#17324D] transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
