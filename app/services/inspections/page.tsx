import ServicePage from "../../../components/ServicePage";

export default function InspectionsPage() {
  return (
    <ServicePage
      title="Inspections"
      intro="Plumbing and mechanical inspections to review system condition, visible concerns and service requirements."
      overview={[
        "ONeill Mechanical can review plumbing and mechanical systems to help identify visible issues, maintenance concerns and potential repair or upgrade requirements.",
        "Provide the property type, systems to be reviewed and the reason for the inspection when submitting the request.",
      ]}
      services={[
        "Plumbing system reviews",
        "Mechanical system reviews",
        "Visible leak assessments",
        "Equipment condition reviews",
        "Upgrade planning reviews",
        "Service requirement assessments",
      ]}
    />
  );
}
