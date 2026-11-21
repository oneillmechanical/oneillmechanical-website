import PageIdentifier from "../../components/PageIdentifier";
import ServiceFeature from "../../components/ServiceFeature";

export default function ServicesPage() {
  return (
    <main className="bg-[#E8EDF1] text-[#17324D]">
      {/* Shared technical background */}
      <div className="relative overflow-hidden bg-[#E8EDF1]">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-[0.40]"
          style={{
            backgroundImage: "url('/images/OM-technical-background.png')",
          }}
          aria-hidden="true"
        />

        {/* Services page introduction */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-7">
            <div className="mb-3">
              <PageIdentifier current="Services" />
            </div>

            <h1 className="text-4xl font-bold text-[#17324D] sm:text-5xl">
              Plumbing & Mechanical Services
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-[#374B5C] sm:text-lg">
              ONeill Mechanical provides residential and commercial plumbing
              and mechanical services throughout Mission, Abbotsford and
              surrounding Fraser Valley communities.
            </p>
          </div>
        </section>

        {/* Plumbing service feature */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
            <ServiceFeature
              title="Plumbing"
              label="Plumbing Services"
              description="ONeill Mechanical provides residential and commercial plumbing service for repairs, troubleshooting, replacements and new installations throughout Mission, Abbotsford and surrounding Fraser Valley communities."
              secondaryDescription="From leaking pipes, valves and fixtures to water-supply piping and general plumbing concerns, service can include identifying the source of a problem, completing the required repair and recommending replacement or further work when existing components are damaged, worn or no longer reliable."
              href="/services/plumbing"
              icon="/images/OM-ICONS/plumbing.png"
              image="/images/services/plumbing-service.png"
              imageAlt="Residential plumbing service beneath a kitchen sink"
              items={[
                "Plumbing repairs & troubleshooting",
                "Leaking pipes & connections",
                "Valves & water-supply piping",
                "Toilets, faucets & fixtures",
                "Plumbing replacements & installations",
                "Residential & commercial service",
              ]}
              textSide="left"
            />
          </div>
        </section>
        {/* Re-Pipes service feature */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
            <ServiceFeature
              title="Re-Pipes"
              label="Re-Piping Services"
              description="ONeill Mechanical provides residential re-piping services for aging and deteriorating water-supply systems, with particular emphasis on the replacement of Poly-B piping in homes throughout Mission, Abbotsford and surrounding Fraser Valley communities."
              secondaryDescription="Poly-B piping can be found in many older residential plumbing systems. Re-piping involves assessing the existing water-supply system, removing or abandoning aging piping where appropriate, and installing modern replacement piping to provide a more reliable long-term plumbing system."
              href="/services/re-pipes"
              icon="/images/OM-ICONS/re-pipe.png"
              image="/images/services/re-pipes-service.png"
              imageAlt="Poly-B residential water-supply piping being removed during a home re-piping project"
              items={[
                "Poly-B identification & assessment",
                "Poly-B pipe replacement",
                "Whole-home re-piping",
                "Water-supply pipe replacement",
                "Leak-related pipe replacement",
                "Re-piping planning & upgrades",
              ]}
              textSide="right"
            />
          </div>
        </section>
        {/* Hot Water Tanks service feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Hot Water Tanks"
      label="Hot Water Tank Services"
      description="ONeill Mechanical provides residential hot water tank installation, replacement, troubleshooting and service throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Whether a hot water tank has stopped producing enough hot water, is leaking, showing signs of age or needs to be replaced, service can include assessing the existing system, identifying the cause of the problem and completing the appropriate repair or replacement."
      href="/services/hot-water-tanks"
      icon="/images/OM-ICONS/hotwater-tank.png"
      image="/images/services/hotwater-tank-service.png"
      imageAlt="Modern residential hot water tank installation with connected water piping"
      items={[
        "Hot water tank replacement",
        "New tank installation",
        "Leaking hot water tanks",
        "Hot water troubleshooting",
        "Valves & water connections",
        "Expansion tanks & related components",
      ]}
      textSide="left"
    />
  </div>
</section>
{/* Boilers service feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Boilers"
      label="Boiler & Hydronic Heating Services"
      description="ONeill Mechanical provides boiler and hydronic heating installation, service, troubleshooting and repair for residential and commercial systems throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Hydronic heating systems rely on the boiler, pumps, piping and controls working together to circulate heated water throughout the system. Service can include diagnosing heating problems, repairing or replacing system components and maintaining equipment such as circulation pumps, hot-water baseboards, zone valves and expansion tanks."
      href="/services/boilers"
      icon="/images/OM-ICONS/boilers.png"
      image="/images/services/boilers-service.png"
      imageAlt="Modern boiler and hydronic heating system with circulation pump, copper piping, zone controls and expansion tank"
      items={[
        "Boiler installation & replacement",
        "Boiler service & troubleshooting",
        "Hydronic heating systems",
        "Hot-water baseboard heating",
        "Circulation & recirculation pumps",
        "Zone valves, controls & piping",
        "Expansion tanks & related equipment",
      ]}
      textSide="right"
    />
  </div>
</section>
{/* Gas Services feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Gas Services"
      label="Gas Piping & Appliance Services"
      description="ONeill Mechanical provides residential and commercial gas piping and appliance connection services throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Gas service can include new piping and appliance connections, modifications to existing gas piping, shutoff valves, troubleshooting and checking accessible gas connections for leaks or other service concerns."
      href="/services/gas-services"
      icon="/images/OM-ICONS/gas.png"
      image="/images/services/gas-service.png"
      imageAlt="Gas piping, shutoff valve and appliance connection being checked with an electronic combustible-gas detector"
      items={[
        "Gas piping installation",
        "Gas appliance connections",
        "Gas shutoff valves",
        "Gas piping modifications",
        "Gas leak troubleshooting",
        "Gas connection inspection & service",
      ]}
      textSide="left"
    />
  </div>
</section>
{/* Drainage service feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Drainage"
      label="Drain & Drainage Services"
      description="ONeill Mechanical provides residential and commercial drain cleaning, drainage troubleshooting and repair throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Slow, blocked or poorly draining fixtures can result from localized clogs or problems farther into the drainage system. Service can include diagnosing the source of the problem, clearing accessible drain blockages and repairing or replacing drainage components when required."
      href="/services/drainage"
      icon="/images/OM-ICONS/drainage.png"
      image="/images/services/drainage-service.png"
      imageAlt="Professional drain cleaning equipment being used to service a residential drainage pipe"
      items={[
        "Drain cleaning",
        "Clogged sinks & drains",
        "Clogged toilets",
        "Slow-draining fixtures",
        "Drainage troubleshooting",
        "Drain pipe repairs",
        "Drainage component replacement",
      ]}
      textSide="right"
    />
  </div>
</section>
{/* Backflows service feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Backflows"
      label="Backflow Testing & Prevention"
      description="ONeill Mechanical provides backflow testing and backflow prevention services for residential and commercial properties throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Backflow prevention assemblies help protect potable water systems from contamination caused by reverse flow. Service can include testing existing backflow preventers, diagnosing failed tests, completing repairs where appropriate and replacing backflow prevention equipment when required."
      href="/services/backflows"
      icon="/images/OM-ICONS/backflows.png"
      image="/images/services/backflow-service.png"
      imageAlt="Backflow prevention assembly connected to a differential-pressure test kit for backflow testing"
      items={[
        "Backflow testing",
        "Backflow preventer inspection",
        "Failed-test troubleshooting",
        "Backflow preventer repairs",
        "Backflow preventer replacement",
        "Backflow prevention assemblies",
        "Residential & commercial service",
      ]}
      textSide="left"
    />
  </div>
</section>
{/* Service & Repairs feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Service & Repairs"
      label="Service, Diagnostics & Repairs"
      description="ONeill Mechanical provides residential and commercial plumbing and mechanical troubleshooting, diagnostics and repair throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Service and repair work can include identifying leaks, diagnosing plumbing and mechanical problems, repairing failed components and troubleshooting pumps and equipment. From common household plumbing issues to hydronic, sump, booster and recirculation pump problems, service focuses on identifying the cause and determining the appropriate repair or replacement."
      href="/services/service-repairs"
      icon="/images/OM-ICONS/inspections.png"
      image="/images/services/service-repairs-service.png"
      imageAlt="Hydronic circulation pump being checked during plumbing and mechanical service diagnostics"
      items={[
        "Leak diagnostics & repairs",
        "Plumbing troubleshooting",
        "Toilet & fixture repairs",
        "Valves, piping & connections",
        "Sump pump service & diagnostics",
        "Booster pump service & diagnostics",
        "Hydronic & recirculation pumps",
        "General mechanical service & repairs",
      ]}
      textSide="right"
    />
  </div>
</section>
{/* Fixture Installation service feature */}
<section className="relative">
  <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
    <ServiceFeature
      title="Fixture Installation"
      label="Plumbing Fixture Installation"
      description="ONeill Mechanical provides residential plumbing fixture installation and replacement throughout Mission, Abbotsford and surrounding Fraser Valley communities."
      secondaryDescription="Fixture service can include removing and replacing aging or damaged plumbing fixtures, installing new fixtures during renovations and completing the associated water-supply and drainage connections required for a proper installation."
      href="/services/fixture-installation"
      icon="/images/OM-ICONS/fixtures.png"
      image="/images/services/fixture-installation.png"
      imageAlt="New bathroom faucet being installed on a residential vanity"
      items={[
        "Faucet installation & replacement",
        "Sink installation",
        "Toilet installation & replacement",
        "Bathtub installation",
        "Shower fixtures & trim",
        "Water-supply connections",
        "Drain & waste connections",
      ]}
      textSide="left"
    />
  </div>
</section>

      </div>
    </main>
  );
}