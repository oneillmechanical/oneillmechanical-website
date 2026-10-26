import ServicePage from "../../../components/ServicePage";

export default function PlumbingPage() {
  return (
    <ServicePage
      title="Plumbing"
      intro="Plumbing service, repairs, installations and troubleshooting for residential and commercial plumbing systems."
      overview={[
        "ONeill Mechanical provides plumbing services for repairs, replacements, new installations and general plumbing troubleshooting.",
        "Whether you are dealing with a plumbing problem or planning an installation or upgrade, submit a service request with the details of the work required.",
      ]}
      services={[
        "Plumbing repairs",
        "Water supply piping",
        "Fixture installation",
        "Leak troubleshooting",
        "Pipe replacement",
        "Plumbing upgrades",
      ]}
    />
  );
}
