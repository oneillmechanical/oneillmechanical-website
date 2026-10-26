import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#17324D] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <p className="text-xl font-bold">ONeill Mechanical</p>
            <p className="mt-2 leading-7 text-[#E2E8F0]">
              Plumbing &amp; Mechanical Services
            </p>

            <p className="mt-5 font-semibold">Service Area</p>
            <p className="mt-2 text-[#E2E8F0]">Lower Mainland, BC</p>
          </div>

          <div>
            <p className="font-semibold">Contact</p>

            <div className="mt-3 grid gap-2 text-[#E2E8F0]">
              <p>
                Phone:{" "}
                <a
                  href="tel:+16048328956"
                  className="transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  (604) 832-8956
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:contact@oneillmechanical.ca"
                  className="break-all transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  contact@oneillmechanical.ca
                </a>
              </p>
            </div>

            <p className="mt-5 text-sm text-[#CBD5E1]">
              © 2026 ONeill Mechanical. All rights reserved.
            </p>
          </div>

          <div>
            <p className="font-semibold">Need Service?</p>
            <p className="mt-3 text-sm leading-6 text-[#E2E8F0]">
              Submit your plumbing or mechanical service request online.
            </p>

            <Link
              href="/contact#request-service"
              className="mt-4 inline-flex justify-center rounded-lg border border-white bg-white px-5 py-2.5 font-semibold text-[#17324D] transition-colors duration-150 hover:border-[#EAF1F6] hover:bg-[#EAF1F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17324D]"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
