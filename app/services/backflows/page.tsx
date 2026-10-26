import ServicePage from "../../../components/ServicePage";

export default function BackflowsPage() {
  return (
    <ServicePage
      title="Backflows"
      intro="Backflow prevention services, device-related work and testing support for applicable plumbing systems."
      overview={[
        "ONeill Mechanical provides backflow-related plumbing service for prevention devices, associated piping and testing requirements where applicable.",
        "Include the device information, location and any available testing or service details when submitting a request.",
      ]}
      services={[
        "Backflow device service",
        "Backflow prevention piping",
        "Device replacement",
        "Device installation",
        "Testing support",
        "Backflow system troubleshooting",
      ]}
    />
  );
}
