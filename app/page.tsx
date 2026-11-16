import Image from "next/image";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import PageIdentifier from "../components/PageIdentifier";
import FeaturedWorkCard from "../components/FeaturedWorkCard";

const services = [
  { title: "Plumbing", description: "Plumbing repairs, installations and service.", href: "/services/plumbing" },
  { title: "Re-Pipes", description: "Poly-B replacement and re-piping of aging residential plumbing systems.", href: "/services/re-pipes" },
  { title: "Hot Water Tanks", description: "Hot water tank installation, replacement and service.", href: "/services/hot-water-tanks" },
  { title: "Boilers", description: "Boiler, hydronic heating and hot-water baseboard installation, service and repair.", href: "/services/boilers" },
  { title: "Gas Services", description: "Gas piping, appliance connections and related gas services.", href: "/services/gas-services" },
  { title: "Drainage", description: "Drainage repairs, service and troubleshooting.", href: "/services/drainage" },
  { title: "Backflows", description: "Backflow prevention services and testing.", href: "/services/backflows" },
  { title: "Inspections", description: "Plumbing and mechanical system inspections.", href: "/services/inspections" },
  { title: "Fixture Installation", description: "Installation and replacement of faucets, sinks, toilets and other plumbing fixtures.", href: "/services/fixture-installation" },
];

const reasons = [
  { title: "Clear Communication", description: "Service requests capture the important details up front so the work can be reviewed and followed up clearly." },
  { title: "Practical Service", description: "Plumbing and mechanical work is approached with a focus on the problem, the property and the service required." },
  { title: "Organized Follow-Up", description: "Each website service request receives a reference number so the request can be tracked from the first contact." },
];

export default function Home() {
  return (
    <main className="bg-[#E8EDF1] text-[#17324D]">
      {/* Shared technical canvas for Hero + Services */}
      <div className="relative overflow-hidden bg-[#E8EDF1]">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-[0.40]"
          style={{
            backgroundImage: "url('/images/OM-technical-background.png')",
          }}
          aria-hidden="true"
        />

        {/* Hero */}
        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-7">
            <div className="mb-4">
              <PageIdentifier current="Home" />
            </div>

            <div className="grid items-center gap-6 md:grid-cols-[1.08fr_0.92fr] md:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0">
              <div className="relative z-10 rounded-xl border border-[#AABAC6] bg-white/95 px-6 py-5 shadow-xl shadow-slate-900/10 backdrop-blur-[1px] sm:px-7 sm:py-6 lg:pr-28">
                <h1 className="text-3xl font-bold leading-tight text-[#17324D] sm:text-4xl lg:whitespace-nowrap">
                  Plumbing &amp; Mechanical Services
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#374B5C] sm:text-lg">
                  ONeill Mechanical provides plumbing and mechanical service throughout Mission,
                  Abbotsford and the Fraser Valley, including plumbing repairs, re-pipes, hot water
                  tanks, boilers, gas services, drainage, backflows, inspections and fixture installation.
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-[#526879]">
                  Mission and Abbotsford are the primary service area, with service available throughout
                  the Fraser Valley and surrounding Lower Mainland communities.
                </p>

              </div>

              <div className="relative z-20 mt-2 md:mt-0 lg:-ml-24 lg:-mt-16 lg:w-[calc(100%+6rem)] lg:translate-x-6">
                <div className="overflow-hidden rounded-xl border border-[#AABAC6] bg-[#F4F7F9] shadow-xl shadow-slate-900/15">
                  <Image
                    src="/images/hppic01.png"
                    alt="Professional plumbing and mechanical equipment installation"
                    width={1536}
                    height={1024}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="mt-3 flex items-center justify-center gap-3">
                  <Image
                    src="/images/red-seal-icon.png"
                    alt="Red Seal"
                    width={48}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />

                  <span className="text-lg font-semibold text-[#17324D] sm:text-xl">
                    Red Seal Plumber
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - same background continues underneath */}
        <section className="relative">
          
          <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-3 sm:px-6 sm:pb-16 sm:pt-4">
            <div className="rounded-2xl border border-[#AABAC6] bg-white/80 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-[2px] sm:p-7 lg:p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#17324D]">
                  Our Services
                </h2>

                <p className="mt-2 max-w-2xl leading-7 text-[#374B5C]">
                  Explore the plumbing and mechanical services offered by ONeill Mechanical.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.href} {...service} />
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Featured common plumbing and mechanical work requests */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-2xl border border-[#AABAC6] bg-white/85 p-5 shadow-xl shadow-slate-900/10 backdrop-blur-[2px] sm:p-7 lg:p-8">
            <div className="max-w-full">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2F7FAF]">
                Featured Work
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#17324D] sm:text-4xl lg:whitespace-nowrap">
                Featured Common Plumbing &amp; Mechanical Work Requests
              </h2>
              <p className="mt-4 max-w-full leading-7 text-[#374B5C]">
                <span className="block">
                  Residential plumbing services include Poly-B replacement and re-piping, leak repairs,
                  fixture service, toilets, drains and other common household plumbing needs.
                </span>

                <span className="mt-1 block">
                  Commercial mechanical services include hydronic heating, circulation and recirculation
                  pumps, booster and sump pumps, boiler systems, hot-water baseboards and related equipment.
                </span>

                <span className="mt-1 block">
                  ONeill Mechanical provides residential and commercial plumbing and mechanical service
                  throughout Mission, Abbotsford and surrounding Fraser Valley communities.
                </span>
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <FeaturedWorkCard
                category="Residential"
                title="Poly-B Re-Pipe & Leak Repair"
                description="Assessment and replacement of aging Poly-B water-supply piping, including leak repairs, whole-home re-piping and planned plumbing-system upgrades."
                image="/images/featured/featured-polyb.png"
                items={[
                  "Poly-B identification and assessment",
                  "Poly-B pipe replacement",
                  "Whole-home re-piping",
                  "Water-line replacement",
                  "Leak-related repairs",
                  "Replacement planning",
                ]}
              />

              <FeaturedWorkCard
                category="Residential"
                title="Plumbing Repairs & Fixture Service"
                description="Troubleshooting and repair of common household plumbing problems, including leaking fixtures, toilets, drains, valves and related plumbing components."
                image="/images/featured/featured-residential-service.png"
                items={[
                  "Leaking faucets and fixtures",
                  "Toilet repairs and replacements",
                  "Blocked sinks and drains",
                  "Pipe and connection leaks",
                  "Shutoff valve replacement",
                  "Sump pump service",
                  "General plumbing repairs",
                ]}
              />

              <FeaturedWorkCard
                category="Commercial"
                title="Hydronic Heating & Mechanical Systems"
                description="Commercial and multi-unit mechanical service involving hydronic heating, circulation, drainage and water-pressure equipment."
                image="/images/featured/featured-commercial-mechanical.png"
                items={[
                  "Hydronic circulation pumps",
                  "Hot-water recirculation pumps",
                  "Booster pumps",
                  "Sump pumps",
                  "Boiler systems and controls",
                  "Hot-water baseboard systems",
                  "Zone valves and hydronic piping",
                  "Expansion tanks and related equipment",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
