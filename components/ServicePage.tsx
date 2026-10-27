import Image from "next/image";
import Link from "next/link";
import PageIdentifier from "./PageIdentifier";

type ServicePageProps = { title: string; intro: string; overview: string[]; services: string[] };

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

export default function ServicePage({ title, intro, overview, services }: ServicePageProps) {
  const icon = serviceIcons[title];
  return (
    <main className="bg-[#0F1720]">
      <section className="border-b border-[#324554] bg-[#0F1720]">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-7">
          <div className="mb-3"><PageIdentifier current={title} parent={{ label: "Services", href: "/services" }} /></div>
          <div className="flex items-center gap-4 sm:gap-5">
            {icon && <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#E9EEF2] p-2 sm:h-24 sm:w-24"><Image src={icon} alt="" width={80} height={80} className="h-full w-full object-contain" aria-hidden="true" /></div>}
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#F1F5F9] sm:text-5xl">{title}</h1>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#CBD5E1] sm:text-lg">{intro}</p>
        </div>
      </section>

      <section className="bg-[#17212B]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              {icon && <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#E9EEF2] p-1.5"><Image src={icon} alt="" width={48} height={48} className="h-12 w-12 object-contain" aria-hidden="true" /></div>}
              <h2 className="text-3xl font-bold text-[#F1F5F9]">{title} Services</h2>
            </div>
            {overview.map((paragraph) => <p key={paragraph} className="mt-4 leading-7 text-[#CBD5E1]">{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-[#1F2D3A]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-[#F1F5F9]">What We Can Help With</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => <div key={item} className="rounded-xl border border-[#405363] bg-[#263746] p-5 text-[#CBD5E1] shadow-sm"><p className="font-medium">{item}</p></div>)}
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-flex justify-center rounded-lg border border-[#526879] bg-[#263746] px-5 py-3 font-semibold text-[#F1F5F9] transition-colors duration-150 hover:border-[#3282B8] hover:bg-[#2D4253]">View All Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
