import Link from "next/link";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-lg font-medium text-gray-700">
            Plumbing & Mechanical Services
          </p>

          <h1 className="max-w-3xl text-5xl font-bold text-black">
            Professional Plumbing & Mechanical Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            ONeill Mechanical provides plumbing and mechanical services
            including plumbing, re-pipes, hot water tanks, boilers,
            drainage, backflows and inspections.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="rounded bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="rounded border border-gray-900 px-6 py-3 font-medium text-black hover:bg-gray-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-black">
            Our Services
          </h2>

          <p className="mt-3 text-gray-700">
            Explore the plumbing and mechanical services offered by
            ONeill Mechanical.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           <ServiceCard
              title="Plumbing"
              description="Plumbing repairs, installations and service."
            />

            <ServiceCard
              title="Re-Pipes"
              description="Replacement and upgrading of existing plumbing systems."
            />

            <ServiceCard
              title="Hot Water Tanks"
              description="Hot water tank installation, replacement and service."
            />

            <ServiceCard
              title="Boilers"
              description="Boiler installation, maintenance and service."
            />

            <ServiceCard
              title="Drainage"
              description="Drainage repairs, service and troubleshooting."
            />

            <ServiceCard
              title="Backflows"
              description="Backflow prevention services and testing."
            />

            <ServiceCard
              title="Inspections"
              description="Plumbing and mechanical system inspections."
            />
          </div>
        </div>
      </section>
    </>
  );
}