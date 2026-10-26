import ServicePage from "../../../components/ServicePage";

export default function GasServicesPage() {
  return (
    <ServicePage
      title="Gas Services"
      intro="Gas piping, appliance connections and related gas work for appropriate residential and commercial applications."
      overview={[
        "ONeill Mechanical provides gas-related service for piping, appliance connections and related mechanical work where the requested work falls within the applicable scope and requirements.",
        "Submit the appliance or equipment details, service address and a description of the proposed gas work so the request can be reviewed before scheduling.",
      ]}
      services={[
        "Gas piping",
        "Appliance connections",
        "Gas line modifications",
        "Equipment connection work",
        "Gas piping troubleshooting",
        "Installation planning",
      ]}
    />
  );
}
