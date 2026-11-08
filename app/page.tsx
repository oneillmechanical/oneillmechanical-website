import Image from "next/image";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import PageIdentifier from "../components/PageIdentifier";

const services = [
  {
    title: "Plumbing",
    description: "Plumbing repairs, installations and service.",
    href: "/services/plumbing",
  },
  {
    title: "Re-Pipes",
    description: "Replacement and upgrading of existing plumbing systems.",
    href: "/services/re-pipes",
  },
  {
    title: "Hot Water Tanks",
    description: "Hot water tank installation, replacement and service.",
    href: "/services/hot-water-tanks",
  },
  {
    title: "Boilers",
    description: "Boiler installation, maintenance and service.",
    href: "/services/boilers",
  },
  {
    title: "Gas Services",
    description: "Gas piping, appliance connections and related gas services.",
    href: "/services/gas-services",
  },
  {
    title: "Drainage",
    description: "Drainage repairs, service and troubleshooting.",
    href: "/services/drainage",
  },
  {
    title: "Backflows",
    description: "Backflow prevention services and testing.",
    href: "/services/backflows",
  },
  {
    title: "Inspections",
    description: "Plumbing and mechanical system inspections.",
    href: "/services/inspections",
  },
  {
    title: "Fixture Installation",
    description:
      "Installation and replacement of faucets, sinks, toilets and other plumbing fixtures.",
    href: "/services/fixture-installation",
  },
];

const reasons = [
  {
    title: "Clear Communication",
    description:
      "Service requests capture the important details up front so the work can be reviewed and followed up clearly.",
  },
  {
    title: "Practical Service",
    description:
      "Plumbing and mechanical work is approached with a focus on the problem, the property and the service required.",
  },
  {
    title: "Organized Follow-Up",
    description:
      "Each website service request receives a reference number so the request can be tracked from the first contact.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#E8EDF1] text-[#17324D]">
      <section className="relative overflow-hidden border-b border-[#B7C5D0] bg-[#E8EDF1]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.40]"
          style={{
            backgroundImage: "url('/images/OM-technical-background.png')",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-7">
          <div className="mb-4">
            <PageIdentifier current="Home" />
          </div>

          <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-10">
            <div className="rounded-xl border border-[#AABAC6] bg-white/95 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-[1px] sm:p-7">
              <h1 className="text-3xl font-bold leading-tight text-[#17324D] sm:text-4xl lg:whitespace-nowrap">
                Plumbing &amp; Mechanical Services
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#374B5C] sm:text-lg">
                ONeill Mechanical provides plumbing and mechanical service
                throughout Mission, Abbotsford and the Fraser Valley,
                including plumbing repairs, re-pipes, hot water tanks,
                boilers, gas services, drainage, backflows, inspections and
                fixture installation.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-[#526879]">
                Mission and Abbotsford are the primary service area, with
                service available throughout the Fraser Valley and surrounding
                Lower Mainland communities.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#374B5C] sm:text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#2F7FAF]" aria-hidden="true">
                    ✓
                  </span>
                  Red Seal Plumber
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-[#2F7FAF]" aria-hidden="true">
                    ✓
                  </span>
                  Mission &amp; Abbotsford
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#AABAC6] bg-[#F4F7F9] shadow-xl shadow-slate-900/10">
              <Image
                src="/images/hppic01.png"
                alt="Professional plumbing and mechanical equipment installation"
                width={1536}
                height={1024}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#DCE4EA]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-[#17324D]">
            Our Services
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#374B5C]">
            Explore the plumbing and mechanical services offered by ONeill
            Mechanical.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#324554] bg-[#1F2D3A]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-base font-semibold text-[#6CB6E8] sm:text-lg">
              Why ONeill Mechanical
            </p>

            <h2 className="text-3xl font-bold text-[#F1F5F9] sm:text-4xl">
              Straightforward Service From First Contact
            </h2>

            <p className="mt-4 leading-7 text-[#CBD5E1]">
              ONeill Mechanical is building a simple, organized service
              process that makes it easier to request work, share the right
              information and keep track of each request.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-[#405363] bg-[#263746] p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#F1F5F9]">
                  {reason.title}
                </h3>

                <p className="mt-3 leading-7 text-[#CBD5E1]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex justify-center rounded-lg border border-[#526879] bg-[#263746] px-5 py-3 font-semibold text-[#F1F5F9] transition-colors duration-150 hover:border-[#3282B8] hover:bg-[#2D4253] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2D3A]"
            >
              About ONeill Mechanical
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
