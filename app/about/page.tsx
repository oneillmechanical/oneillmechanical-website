import Link from "next/link";

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
    <>
      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
            About ONeill Mechanical
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#17324D] sm:text-5xl">
            Plumbing &amp; Mechanical Services
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#374151] sm:text-lg">
            ONeill Mechanical provides plumbing and mechanical services with a
            focus on professional workmanship, clear communication and practical
            solutions for customers.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#17324D]">
              About the Business
            </h2>

            <p className="mt-4 leading-7 text-[#374151]">
              ONeill Mechanical provides plumbing and mechanical services
              including plumbing, re-pipes, hot water tanks, boilers, gas
              services, drainage, backflows, inspections and fixture
              installation.
            </p>

            <p className="mt-4 leading-7 text-[#374151]">
              The business is building a straightforward service process that
              makes it easy to request work, provide the information needed to
              review the request and keep track of service activity from the
              first contact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
              Our Approach
            </p>

            <h2 className="text-3xl font-bold text-[#17324D] sm:text-4xl">
              Simple, Clear and Organized
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#CBD5E1] bg-white p-6 shadow-sm transition-colors duration-200 hover:border-[#2F6690] hover:bg-[#EAF1F6]"
              >
                <h3 className="text-xl font-semibold text-[#17324D]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#374151]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#17324D]">
              Need Plumbing or Mechanical Service?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#374151] sm:text-lg">
              Send ONeill Mechanical the service address, your preferred contact
              information and a description of the work required.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
               <Link
                href="/services"
                className="inline-flex justify-center rounded-lg border border-[#CBD5E1] bg-white px-6 py-3 font-semibold text-[#17324D] transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
