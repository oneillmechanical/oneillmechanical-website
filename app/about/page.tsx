import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-lg font-medium text-gray-700">
            About ONeill Mechanical
          </p>

          <h1 className="max-w-3xl text-4xl font-bold text-black">
            Plumbing & Mechanical Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-700">
            ONeill Mechanical provides plumbing and mechanical services
            with a focus on professional workmanship and practical solutions
            for our customers.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-black">
              About the Business
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              ONeill Mechanical provides plumbing and mechanical services
              including plumbing, re-pipes, hot water tanks, boilers,
              drainage, backflows and inspections.
            </p>

            <p className="mt-4 text-lg text-gray-700">
              This section will be expanded with more information about
              ONeill Mechanical, the company background, qualifications,
              experience and approach to customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-black">
            Need Plumbing or Mechanical Service?
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            Contact ONeill Mechanical to discuss your plumbing or
            mechanical service needs.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}