import ServicePage from "../../../components/ServicePage";

export default function FixtureInstallationPage() {
  return (
    <ServicePage
      title="Fixture Installation"
      intro="Installation and replacement of common plumbing fixtures for residential and commercial spaces."
      overview={[
        "ONeill Mechanical provides plumbing fixture installation and replacement services for common kitchen, bathroom and utility fixtures.",
        "Include the fixture type, service address and whether the fixture has already been purchased when submitting the service request.",
      ]}
      services={[
        "Faucet installation",
        "Sink installation",
        "Toilet installation",
        "Shower fixture installation",
        "Fixture replacement",
        "Fixture connection work",
      ]}
    />
  );
}
