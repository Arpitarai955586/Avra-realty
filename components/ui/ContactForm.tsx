"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { validateContactForm } from "@/lib/validation";
import { buildWhatsAppUrl } from "@/lib/utils";

export function ContactForm() {
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
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      honeypot: String(formData.get("company") || ""),
    };

    const result = validateContactForm(payload);
    if (!result.valid) {
      setErrors(result.errors);
      if (result.errors.form) setFormError(result.errors.form);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      // Client-side mailto + WhatsApp ready handoff until a server endpoint is connected
      const body = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Subject: ${payload.subject}`,
        "",
        payload.message,
      ].join("\n");

      window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
        `Website Enquiry: ${payload.subject}`
      )}&body=${encodeURIComponent(body)}`;

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError("Something went wrong. Please try calling or WhatsApp instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-grey-600">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="input-field"
            placeholder="Your name"
          />
          {errors.name ? (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-grey-600">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="input-field"
            placeholder="+91 ..."
          />
          {errors.phone ? (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-grey-600">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input-field"
          placeholder="you@example.com"
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm text-grey-600">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className="input-field"
          placeholder="How can we help?"
        />
        {errors.subject ? (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-grey-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field resize-y"
          placeholder="Share your requirements..."
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
          Your email client should open shortly. You can also reach us on
          WhatsApp.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="btn-gold"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
        <a
          href={buildWhatsAppUrl(
            "Hello Avra Realty, I would like to discuss a property enquiry."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          WhatsApp Instead
        </a>
      </div>
    </form>
  );
}
