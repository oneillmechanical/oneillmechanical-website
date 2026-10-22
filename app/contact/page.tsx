export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-lg font-medium text-gray-700">
            Contact ONeill Mechanical
          </p>

          <h1 className="max-w-3xl text-4xl font-bold text-black">
            How Can We Help?
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-700">
            Contact ONeill Mechanical to discuss your plumbing or
            mechanical service needs.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">

            <h2 className="text-3xl font-bold text-black">
              Request Service
            </h2>

            <p className="mt-3 text-gray-700">
              Complete the form below with your contact information
              and a brief description of the service you require.
            </p>

            <form className="mt-8 space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-black"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-black"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-black"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="serviceAddress"
                  className="block font-medium text-black"
                >
                  Service Address
                </label>

                <input
                  type="text"
                  id="serviceAddress"
                  name="serviceAddress"
                  required
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block font-medium text-black"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="plumbing">Plumbing</option>
                  <option value="re-pipes">Re-Pipes</option>
                  <option value="hot-water-tanks">Hot Water Tanks</option>
                  <option value="boilers">Boilers</option>
                  <option value="drainage">Drainage</option>
                  <option value="backflows">Backflows</option>
                  <option value="inspections">Inspections</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-black"
                >
                  How Can We Help?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />
              </div>

              <button
                type="button"
                className="rounded bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
              >
                Submit Request
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}