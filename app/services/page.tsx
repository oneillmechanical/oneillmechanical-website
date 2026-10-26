import ServiceCard from "../../components/ServiceCard";

const services = [
  { title: "Plumbing", description: "Plumbing repairs, installations and service.", href: "/services/plumbing" },
  { title: "Re-Pipes", description: "Replacement and upgrading of existing plumbing systems.", href: "/services/re-pipes" },
  { title: "Hot Water Tanks", description: "Hot water tank installation, replacement and service.", href: "/services/hot-water-tanks" },
  { title: "Boilers", description: "Boiler installation, maintenance and service.", href: "/services/boilers" },
  { title: "Gas Services", description: "Gas piping, appliance connections and related gas services.", href: "/services/gas-services" },
  { title: "Drainage", description: "Drainage repairs, service and troubleshooting.", href: "/services/drainage" },
  { title: "Backflows", description: "Backflow prevention services and testing.", href: "/services/backflows" },
  { title: "Inspections", description: "Plumbing and mechanical system inspections.", href: "/services/inspections" },
  { title: "Fixture Installation", description: "Installation and replacement of faucets, sinks, toilets and other plumbing fixtures.", href: "/services/fixture-installation" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
            ONeill Mechanical
          </p>
          <h1 className="text-4xl font-bold text-[#17324D] sm:text-5xl">
            Services
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-[#374151] sm:text-lg">
            Explore our plumbing and mechanical services and select a service to learn more.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
