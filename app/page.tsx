import Link from "next/link";
import ServiceCard from "../components/ServiceCard";

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
    description: "Installation and replacement of faucets, sinks, toilets and other plumbing fixtures.",
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
    <>
      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
            Plumbing &amp; Mechanical Services
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#17324D] sm:text-5xl">
            Professional Plumbing &amp; Mechanical Solutions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#374151] sm:mt-6 sm:text-lg">
            ONeill Mechanical provides plumbing and mechanical services
            including plumbing, re-pipes, hot water tanks, boilers, gas
            services, drainage, backflows, inspections and fixture installation.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="/contact#request-service"
              className="inline-flex justify-center rounded-lg border border-[#17324D] bg-[#17324D] px-6 py-3 font-semibold text-white transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#2F6690] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2"
            >
              Request Service
            </Link>

            <Link
              href="/services"
              className="inline-flex justify-center rounded-lg border border-[#CBD5E1] bg-white px-6 py-3 font-semibold text-[#17324D] transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-[#17324D]">
            Our Services
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#374151]">
            Explore the plumbing and mechanical services offered by ONeill Mechanical.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
              Why ONeill Mechanical
            </p>

            <h2 className="text-3xl font-bold text-[#17324D] sm:text-4xl">
              Straightforward Service From First Contact
            </h2>

            <p className="mt-4 leading-7 text-[#374151]">
              ONeill Mechanical is building a simple, organized service process that makes it easier to request work, share the right information and keep track of each request.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-lg border border-[#CBD5E1] bg-white p-6 shadow-sm transition-colors duration-200 hover:border-[#2F6690] hover:bg-[#EAF1F6]"
              >
                <h3 className="text-xl font-semibold text-[#17324D]">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-[#374151]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex justify-center rounded-lg border border-[#CBD5E1] bg-white px-5 py-3 font-semibold text-[#17324D] transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2"
            >
              About ONeill Mechanical
            </Link>

            <Link
              href="/contact#request-service"
              className="inline-flex justify-center rounded-lg border border-[#17324D] bg-[#17324D] px-5 py-3 font-semibold text-white transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#2F6690] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
