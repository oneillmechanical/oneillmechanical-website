import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#405363] bg-[#0F1720] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <p className="text-xl font-bold text-[#F1F5F9]">ONeill Mechanical</p>
            <p className="mt-2 leading-7 text-[#CBD5E1]">
              Plumbing &amp; Mechanical Services
            </p>
            <p className="mt-5 font-semibold text-[#F1F5F9]">Service Area</p>
            <p className="mt-2 text-[#CBD5E1]">Lower Mainland, BC</p>
          </div>

          <div>
            <p className="font-semibold text-[#F1F5F9]">Contact</p>
            <div className="mt-3 grid gap-2 text-[#CBD5E1]">
              <p>
                Phone:{" "}
                <a href="tel:+16048328956" className="transition-colors duration-150 hover:text-[#6CB6E8]">
                  (604) 832-8956
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:contact@oneillmechanical.ca" className="break-all transition-colors duration-150 hover:text-[#6CB6E8]">
                  contact@oneillmechanical.ca
                </a>
              </p>
            </div>
            <p className="mt-5 text-sm text-[#94A3B8]">
              © 2026 ONeill Mechanical. All rights reserved.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#F1F5F9]">Need Service?</p>
            <p className="mt-3 text-sm leading-6 text-[#CBD5E1]">
              Submit your plumbing or mechanical service request online.
            </p>
            <Link
              href="/contact#request-service"
              className="mt-4 inline-flex justify-center rounded-lg border border-[#3282B8] bg-[#173B5F] px-5 py-2.5 font-semibold text-white transition-colors duration-150 hover:bg-[#245C86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6CB6E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1720]"
            >
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
