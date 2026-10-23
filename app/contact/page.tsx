"use client";

import { FormEvent, useState } from "react";

type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
  serviceAddress?: string;
  service?: string;
  message?: string;
};

type ApiResponse = {
  success: boolean;
  message?: string;
  error?: string;
  field?: keyof FieldErrors;
  requestReference?: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [requestReference, setRequestReference] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
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
    const message = String(formData.get("message") ?? "").trim();

    const errors: FieldErrors = {};

    if (name.length < 2) {
      errors.name = "Please enter your name.";
    }

    if (phone.includes("@")) {
      errors.phone = "Please enter a phone number, not an email address.";
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

    if (message.length < 10) {
      errors.message =
        "Please provide at least 10 characters describing the service you need.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }

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
          message,
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

        return;
      }

      setSuccessMessage(
        data.message ?? "Your service request has been submitted successfully."
      );

      setRequestReference(data.requestReference ?? "");

      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setFormError(
        "Your service request could not be submitted. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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

            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
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
                  autoComplete="name"
                  maxLength={100}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />

                {fieldErrors.name && (
                  <p className="mt-2 text-sm text-red-700">
                    {fieldErrors.name}
                  </p>
                )}
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
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={30}
                  placeholder="250-555-0100"
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />

                {fieldErrors.phone && (
                  <p className="mt-2 text-sm text-red-700">
                    {fieldErrors.phone}
                  </p>
                )}
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
                  autoComplete="email"
                  maxLength={255}
                  placeholder="name@example.com"
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />

                {fieldErrors.email && (
                  <p className="mt-2 text-sm text-red-700">
                    {fieldErrors.email}
                  </p>
                )}
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
                  autoComplete="street-address"
                  maxLength={255}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />

                {fieldErrors.serviceAddress && (
                  <p className="mt-2 text-sm text-red-700">
                    {fieldErrors.serviceAddress}
                  </p>
                )}
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
                  defaultValue=""
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Plumbing">Plumbing</option>
                  <option value="Re-Pipes">Re-Pipes</option>
                  <option value="Hot Water Tanks">
                    Hot Water Tanks
                  </option>
                  <option value="Boilers">Boilers</option>
                  <option value="Drainage">Drainage</option>
                  <option value="Backflows">Backflows</option>
                  <option value="Inspections">Inspections</option>
                </select>

                {fieldErrors.service && (
                  <p className="mt-2 text-sm text-red-700">
                    {fieldErrors.service}
                  </p>
                )}
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
                  maxLength={5000}
                  className="mt-2 w-full rounded border border-gray-300 px-4 py-3 text-black"
                />

                {fieldErrors.message && (
                  <p className="mt-2 text-sm text-red-700">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {formError && (
                <div
                  className="rounded border border-red-300 bg-red-50 p-4 text-red-800"
                  role="alert"
                >
                  {formError}
                </div>
              )}

              {successMessage && (
                <div
                  className="rounded border border-green-300 bg-green-50 p-4 text-green-800"
                  role="status"
                >
                  <p className="font-medium">
                    {successMessage}
                  </p>

                  {requestReference && (
                    <p className="mt-2 text-sm">
                      Request reference: {requestReference}
                    </p>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-500"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}