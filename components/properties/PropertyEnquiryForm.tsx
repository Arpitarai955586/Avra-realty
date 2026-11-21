"use client";

import { useState, type FormEvent } from "react";
import { Loader2, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { validateEnquiryForm } from "@/lib/validation";
import { buildWhatsAppUrl } from "@/lib/utils";

export function PropertyEnquiryForm({
  propertyName,
  propertySlug,
}: {
  propertyName: string;
  propertySlug: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      honeypot: String(formData.get("company") || ""),
    };

    const result = validateEnquiryForm(payload);
    if (!result.valid) {
      setErrors(result.errors);
      if (result.errors.form) setFormError(result.errors.form);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const body = [
        `Property: ${propertyName}`,
        `Slug: ${propertySlug}`,
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        "",
        payload.message,
      ].join("\n");

      window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
        `Property Enquiry: ${propertyName}`
      )}&body=${encodeURIComponent(body)}`;

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError("Unable to open email. Please use WhatsApp instead.");
    }
  }

  const whatsapp = buildWhatsAppUrl(
    `Hello Avra Realty, I want to enquire about "${propertyName}" (${propertySlug}).`
  );

  return (
    <div className="bg-white p-6 shadow-[0_8px_30px_rgba(11,29,54,0.06)] md:p-8">
      <h2 className="font-display text-2xl text-navy md:text-3xl">
        Enquire About This Property
      </h2>
      <p className="mt-2 text-sm text-grey-600">
        Share your details and we will get back to you.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hp-field"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="enq-name" className="mb-1.5 block text-sm text-grey-600">
            Full Name
          </label>
          <input id="enq-name" name="name" required className="input-field" />
          {errors.name ? (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enq-email" className="mb-1.5 block text-sm text-grey-600">
            Email
          </label>
          <input
            id="enq-email"
            name="email"
            type="email"
            required
            className="input-field"
          />
          {errors.email ? (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enq-phone" className="mb-1.5 block text-sm text-grey-600">
            Phone
          </label>
          <input id="enq-phone" name="phone" required className="input-field" />
          {errors.phone ? (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="enq-message"
            className="mb-1.5 block text-sm text-grey-600"
          >
            Message
          </label>
          <textarea
            id="enq-message"
            name="message"
            required
            rows={4}
            className="input-field resize-y"
            defaultValue={`I am interested in ${propertyName}. Please share more details.`}
          />
          {errors.message ? (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          ) : null}
        </div>

        {formError ? (
          <p className="text-sm text-red-600" role="alert">
            {formError}
          </p>
        ) : null}
        {status === "success" ? (
          <p className="text-sm text-green-700" role="status">
            Your email client should open shortly.
          </p>
        ) : null}

        <button
          type="submit"
          className="btn-gold w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-full"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Enquiry
        </a>
      </form>
    </div>
  );
}
