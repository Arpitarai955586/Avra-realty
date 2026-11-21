import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-premium grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {SITE_NAME} helps clients explore residential and commercial
            property opportunities with clear communication and personalised
            support.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="transition hover:text-gold-light">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 transition hover:text-gold-light"
              >
                <Phone className="h-4 w-4 text-gold" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-2 break-all transition hover:text-gold-light"
              >
                <Mail className="h-4 w-4 text-gold" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-gold-light"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                WhatsApp Enquiry
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-white/45">
            Business address and service locations will be published once
            confirmed by {SITE_NAME}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Get in Touch
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Share your property requirements and our team will respond during
            business hours.
          </p>
          <Link href="/contact" className="btn-gold mt-6 inline-flex">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col gap-2 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {SITE_NAME}. All rights reserved.
          </p>
          <p>Property listings marked Demo are placeholders for preview only.</p>
        </div>
      </div>
    </footer>
  );
}
