"use client";

import { FormEvent, useRef, useState } from "react";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  serviceAddress?: string;
  service?: string;
  urgency?: string;
  preferredContact?: string;
  message?: string;
  turnstile?: string;
};

type ApiResponse = {
  success: boolean;
  message?: string;
  error?: string;
  field?: keyof FieldErrors;
  requestReference?: string;
};

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-[#17324D] outline-none transition-colors duration-150 placeholder:text-[#6B7280] focus:border-[#2F6690] focus:ring-2 focus:ring-[#2F6690]/20";

const labelClassName = "block font-semibold text-[#17324D]";
const errorClassName = "mt-2 text-sm font-medium text-[#B42318]";

export default function ContactPage() {
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [requestReference, setRequestReference] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFieldErrors({});
    setFormError("");
    setSuccessMessage("");
    setRequestReference("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const serviceAddress = String(
      formData.get("serviceAddress") ?? ""
    ).trim();
    const service = String(formData.get("service") ?? "").trim();
    const urgency = String(formData.get("urgency") ?? "").trim();
    const preferredContact = String(
      formData.get("preferredContact") ?? ""
    ).trim();
    const message = String(formData.get("message") ?? "").trim();

    const errors: FieldErrors = {};

    if (name.length < 2) {
      errors.name = "Please enter your name.";
    }

    if (phone.includes("@")) {
      errors.phone =
        "Please enter a phone number, not an email address.";
    } else if (!/^[0-9+\-().\s]+$/.test(phone)) {
      errors.phone =
        "Phone numbers can only contain numbers, spaces, +, -, brackets and periods.";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");

      if (digitsOnly.length < 10 || digitsOnly.length > 15) {
        errors.phone =
          "Please enter a valid phone number containing 10 to 15 digits.";
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (serviceAddress.length < 5) {
      errors.serviceAddress = "Please enter the service address.";
    }

    if (!service) {
      errors.service = "Please select a service.";
    }

    if (!["Normal", "Urgent"].includes(urgency)) {
      errors.urgency = "Please select the urgency.";
    }

    if (!["Phone", "Email"].includes(preferredContact)) {
      errors.preferredContact =
        "Please select your preferred contact method.";
    }

    if (message.length < 10) {
      errors.message =
        "Please provide at least 10 characters describing the service you need.";
    }

    if (!turnstileToken) {
      errors.turnstile = "Please complete the security verification.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          serviceAddress,
          service,
          urgency,
          preferredContact,
          message,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok || !data.success) {
        if (data.field && data.error) {
          setFieldErrors({
            [data.field]: data.error,
          });
        } else {
          setFormError(
            data.error ??
              "Your service request could not be submitted. Please try again."
          );
        }

        setTurnstileToken("");
        turnstileRef.current?.reset();
        return;
      }

      setSuccessMessage(
        data.message ??
          "Your service request has been submitted successfully."
      );
      setRequestReference(data.requestReference ?? "");

      form.reset();
      setTurnstileToken("");
      turnstileRef.current?.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setFormError(
        "Your service request could not be submitted. Please try again."
      );
      setTurnstileToken("");
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-[#F4F6F8]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="mb-3 text-base font-semibold text-[#2F6690] sm:text-lg">
            Contact ONeill Mechanical
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#17324D] sm:text-5xl">
            How Can We Help?
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-[#374151] sm:text-lg">
            Submit a service request with the property details, preferred
            contact method and a description of the plumbing or mechanical
            service required.
          </p>
        </div>
      </section>

      <section
        id="request-service"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <div className="mb-7">
              <h2 className="text-3xl font-bold text-[#17324D]">
                Request Service
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-[#374151]">
                Complete the form below. Required information is validated
                before the request is securely submitted to ONeill Mechanical.
              </p>
            </div>

            <form
              className="space-y-6 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-5 shadow-sm sm:p-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClassName}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    className={fieldClassName}
                  />
                  {fieldErrors.name && (
                    <p className={errorClassName}>{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClassName}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={30}
                    placeholder="250-555-0100"
                    className={fieldClassName}
                  />
                  {fieldErrors.phone && (
                    <p className={errorClassName}>{fieldErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClassName}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    maxLength={255}
                    placeholder="name@example.com"
                    className={fieldClassName}
                  />
                  {fieldErrors.email && (
                    <p className={errorClassName}>{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="serviceAddress"
                    className={labelClassName}
                  >
                    Service Address
                  </label>
                  <input
                    type="text"
                    id="serviceAddress"
                    name="serviceAddress"
                    autoComplete="street-address"
                    maxLength={255}
                    className={fieldClassName}
                  />
                  {fieldErrors.serviceAddress && (
                    <p className={errorClassName}>
                      {fieldErrors.serviceAddress}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className={labelClassName}>
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Re-Pipes">Re-Pipes</option>
                    <option value="Hot Water Tanks">Hot Water Tanks</option>
                    <option value="Boilers">Boilers</option>
                    <option value="Gas Services">Gas Services</option>
                    <option value="Drainage">Drainage</option>
                    <option value="Backflows">Backflows</option>
                    <option value="Inspections">Inspections</option>
                    <option value="Fixture Installation">
                      Fixture Installation
                    </option>
                  </select>
                  {fieldErrors.service && (
                    <p className={errorClassName}>{fieldErrors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="urgency" className={labelClassName}>
                    Urgency
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    defaultValue="Normal"
                    className={fieldClassName}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                  {fieldErrors.urgency && (
                    <p className={errorClassName}>{fieldErrors.urgency}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="preferredContact"
                    className={labelClassName}
                  >
                    Preferred Contact
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    defaultValue=""
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      Select a contact method
                    </option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                  </select>
                  {fieldErrors.preferredContact && (
                    <p className={errorClassName}>
                      {fieldErrors.preferredContact}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClassName}>
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={5000}
                  className={fieldClassName}
                />
                {fieldErrors.message && (
                  <p className={errorClassName}>{fieldErrors.message}</p>
                )}
              </div>

              <div className="rounded-lg border border-[#CBD5E1] bg-white p-4">
                <p className={labelClassName}>Security Verification</p>

                <div className="mt-3 overflow-hidden">
                  {TURNSTILE_SITE_KEY ? (
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      options={{
                        theme: "light",
                        size: "flexible",
                        refreshExpired: "auto",
                      }}
                      onSuccess={(token) => {
                        setTurnstileToken(token);
                        setFieldErrors((current) => ({
                          ...current,
                          turnstile: undefined,
                        }));
                      }}
                      onExpire={() => {
                        setTurnstileToken("");
                      }}
                      onError={() => {
                        setTurnstileToken("");
                        setFieldErrors((current) => ({
                          ...current,
                          turnstile:
                            "Security verification failed. Please try again.",
                        }));
                      }}
                    />
                  ) : (
                    <p className={errorClassName}>
                      Security verification is not configured.
                    </p>
                  )}
                </div>

                {fieldErrors.turnstile && (
                  <p className={errorClassName}>
                    {fieldErrors.turnstile}
                  </p>
                )}
              </div>

              {formError && (
                <div
                  className="rounded-lg border border-[#FDA29B] bg-[#FEF3F2] p-4 text-[#B42318]"
                  role="alert"
                >
                  {formError}
                </div>
              )}

              {successMessage && (
                <div
                  className="rounded-lg border border-[#A6F4C5] bg-[#ECFDF3] p-4 text-[#067647]"
                  role="status"
                >
                  <p className="font-semibold">{successMessage}</p>

                  {requestReference && (
                    <p className="mt-2 text-sm">
                      Request reference: {requestReference}
                    </p>
                  )}

                  <p className="mt-2 text-sm">
                    ONeill Mechanical will review your request and contact you
                    using the information provided.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !turnstileToken ||
                  !TURNSTILE_SITE_KEY
                }
                className="inline-flex w-full justify-center rounded-lg border border-[#17324D] bg-[#17324D] px-6 py-3 font-semibold text-white transition-colors duration-150 hover:border-[#2F6690] hover:bg-[#2F6690] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6690] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-[#94A3B8] disabled:bg-[#94A3B8] sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
