import ServicePage from "../../../components/ServicePage";

export default function BoilersPage() {
  return (
    <ServicePage
      title="Boilers"
      intro="Boiler installation, service, maintenance and troubleshooting for hydronic heating and related mechanical systems."
      overview={[
        "ONeill Mechanical provides boiler-related mechanical service for installations, system issues, maintenance requirements and equipment replacement planning.",
        "Provide the boiler make and model when available, the service address, and a description of the heating or equipment issue with the service request.",
      ]}
      services={[
        "Boiler installation",
        "Boiler replacement",
        "Heating system troubleshooting",
        "Hydronic piping service",
        "Boiler maintenance",
        "System upgrade planning",
      ]}
    />
  );
}
