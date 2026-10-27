import Link from "next/link";
import PageIdentifier from "../../components/PageIdentifier";

const approachItems = [
  {
    title: "Practical Solutions",
    description:
      "Plumbing and mechanical service focused on understanding the work required and identifying a practical path forward.",
  },
  {
    title: "Clear Communication",
    description:
      "A structured service-request process helps capture the service address, contact details and description of the work from the start.",
  },
  {
    title: "Organized Follow-Up",
    description:
      "Website service requests receive a reference number so requests can be tracked as ONeill Mechanical follows up with customers.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0F1720]">
      <section className="border-b border-[#324554] bg-[#0F1720]">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-7">
          <div className="mb-3">
            <PageIdentifier current="About" />
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#F1F5F9] sm:text-5xl">
            Plumbing &amp; Mechanical Services
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#CBD5E1] sm:text-lg">
            ONeill Mechanical provides plumbing and mechanical services with a
            focus on professional workmanship, clear communication and practical
            solutions for customers.
          </p>
        </div>
      </section>

      <section className="bg-[#17212B]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#F1F5F9]">
              About the Business
            </h2>

            <p className="mt-4 leading-7 text-[#CBD5E1]">
              ONeill Mechanical provides plumbing and mechanical services
              including plumbing, re-pipes, hot water tanks, boilers, gas
              services, drainage, backflows, inspections and fixture
              installation.
            </p>

            <p className="mt-4 leading-7 text-[#CBD5E1]">
              The business is building a straightforward service process that
              makes it easy to request work, provide the information needed to
              review the request and keep track of service activity from the
              first contact.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#324554] bg-[#1F2D3A]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-base font-semibold text-[#6CB6E8] sm:text-lg">
              Our Approach
            </p>

            <h2 className="text-3xl font-bold text-[#F1F5F9] sm:text-4xl">
              Simple, Clear and Organized
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#405363] bg-[#263746] p-6 shadow-sm transition-colors duration-200 hover:border-[#3282B8] hover:bg-[#2D4253]"
              >
                <h3 className="text-xl font-semibold text-[#F1F5F9]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#CBD5E1]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#324554] bg-[#17212B]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#F1F5F9]">
              Explore ONeill Mechanical Services
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#CBD5E1] sm:text-lg">
              Review the available plumbing and mechanical service categories
              to learn more about the work ONeill Mechanical provides.
            </p>

            <div className="mt-7">
              <Link
                href="/services"
                className="inline-flex justify-center rounded-lg border border-[#526879] bg-[#263746] px-6 py-3 font-semibold text-[#F1F5F9] transition-colors duration-150 hover:border-[#3282B8] hover:bg-[#2D4253] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3282B8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17212B]"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
