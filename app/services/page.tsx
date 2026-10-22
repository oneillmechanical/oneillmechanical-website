import ServiceCard from "../../components/ServiceCard";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-bold text-black">
            Plumbing & Mechanical Services
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            Explore the plumbing and mechanical services offered by
            ONeill Mechanical.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <ServiceCard
              title="Plumbing"
              description="General plumbing services, repairs and installations."
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
              description="Boiler installation, service and maintenance."
            />

            <ServiceCard
              title="Drainage"
              description="Drainage services, repairs and troubleshooting."
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
    </main>
  );
}