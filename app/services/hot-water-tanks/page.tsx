import ServicePage from "../../../components/ServicePage";

export default function HotWaterTanksPage() {
  return (
    <ServicePage
      title="Hot Water Tanks"
      intro="Hot water tank installation, replacement, service and troubleshooting for residential and commercial applications."
      overview={[
        "ONeill Mechanical provides hot water tank service for replacement, installation and troubleshooting of common hot-water system issues.",
        "Submit the service address, existing tank information when available, and a description of the issue or planned replacement so the request can be reviewed efficiently.",
      ]}
      services={[
        "Hot water tank replacement",
        "New tank installation",
        "Leak troubleshooting",
        "No-hot-water troubleshooting",
        "Connection and piping work",
        "Replacement planning",
      ]}
    />
  );
}
