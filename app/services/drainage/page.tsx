import ServicePage from "../../../components/ServicePage";

export default function DrainagePage() {
  return (
    <ServicePage
      title="Drainage"
      intro="Drainage service, repairs and troubleshooting for plumbing drainage systems and related piping."
      overview={[
        "ONeill Mechanical provides drainage service for common drainage problems, repairs, piping issues and system troubleshooting.",
        "Describe the affected fixtures or areas, when the problem began, and any relevant symptoms so the drainage request can be reviewed efficiently.",
      ]}
      services={[
        "Drainage troubleshooting",
        "Drain piping repairs",
        "Fixture drainage issues",
        "Leak-related drainage repairs",
        "Drainage piping replacement",
        "Drainage system upgrades",
      ]}
    />
  );
}
