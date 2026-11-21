import { Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Avra Realty by phone, email, or WhatsApp. Share your property requirements and we will respond during business hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <PageHero
        title="Contact Us"
        description="We would love to hear about your property goals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="section-padding bg-off-white">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-navy md:text-4xl">
              Get in touch with {SITE_NAME}
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-grey-600">
              Use the form or reach us directly. Office address, maps, and
              visiting hours will be added once confirmed by the business.
            </p>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-3 text-navy transition hover:text-gold"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy text-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-grey-400">
                      Call
                    </span>
                    {CONTACT.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center gap-3 text-navy transition hover:text-gold"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy text-gold">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-grey-400">
                      Email
                    </span>
                    {CONTACT.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-navy transition hover:text-gold"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-navy text-gold">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-grey-400">
                      WhatsApp
                    </span>
                    Chat on WhatsApp
                  </span>
                </a>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="bg-white p-6 shadow-[0_8px_30px_rgba(11,29,54,0.06)] md:p-8">
              <h2 className="font-display text-2xl text-navy md:text-3xl">
                Send an Enquiry
              </h2>
              <p className="mt-2 text-sm text-grey-600">
                All fields are validated. A honeypot field helps reduce spam.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
