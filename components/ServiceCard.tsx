type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-black">
        {title}
      </h3>

      <p className="mt-3 text-gray-700">
        {description}
      </p>
    </div>
  );
}