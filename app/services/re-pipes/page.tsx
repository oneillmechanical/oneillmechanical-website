import ServicePage from "../../../components/ServicePage";

export default function RePipesPage() {
  return (
    <ServicePage
      title="Re-Pipes"
      intro="Re-piping services for aging, damaged or outdated water distribution piping in residential and commercial properties."
      overview={[
        "ONeill Mechanical can assess existing plumbing piping and help plan replacement or upgrading where aging, deterioration, leaks or system changes make re-piping appropriate.",
        "Provide the property details and a description of the existing piping or concerns so the required work can be reviewed before service is scheduled.",
      ]}
      services={[
        "Whole-building re-piping",
        "Water line replacement",
        "Aging pipe replacement",
        "Leak-related pipe replacement",
        "Plumbing system upgrades",
        "Replacement planning",
      ]}
    />
  );
}
