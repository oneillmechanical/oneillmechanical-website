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
    <main className="bg-[#0F1720]">
      <section className="border-b border-[#324554] bg-[#0F1720]">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-7">
          <div className="mb-4">
            <PageIdentifier current="Home" />
          </div>

          <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-10">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#F1F5F9] sm:text-4xl lg:whitespace-nowrap">
                Plumbing &amp; Mechanical Services
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#CBD5E1] sm:text-lg">
                ONeill Mechanical provides plumbing and mechanical service
                throughout Mission, Abbotsford and the Fraser Valley,
                including plumbing repairs, re-pipes, hot water tanks,
                boilers, gas services, drainage, backflows, inspections and
                fixture installation.
              </p>

              <p className="mt-4 max-w-2xl leading-7 text-[#AFC0CE]">
                Mission and Abbotsford are the primary service area, with
                service available throughout the Fraser Valley and surrounding
                Lower Mainland communities.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#CBD5E1] sm:text-base">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#6CB6E8]" aria-hidden="true">
                    ✓
                  </span>
                  Red Seal Plumber
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="text-[#6CB6E8]" aria-hidden="true">
                    ✓
                  </span>
                  Mission &amp; Abbotsford
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#405363] bg-[#17212B] shadow-2xl shadow-black/30">
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

      <section className="bg-[#17212B]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-[#F1F5F9]">
            Our Services
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#CBD5E1]">
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
