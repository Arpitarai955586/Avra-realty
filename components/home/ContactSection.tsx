import { Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-grey-100">
      <div className="container-premium grid gap-10 lg:grid-cols-2">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Speak With Avra Realty"
            description="Reach out with your requirements. Business hours and office address will be listed once confirmed."
            align="left"
          />
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-3 text-navy transition hover:text-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-navy text-gold">
                  <Phone className="h-5 w-5" />
                </span>
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-3 text-navy transition hover:text-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-navy text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-navy transition hover:text-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-navy text-gold">
                  <MessageCircle className="h-5 w-5" />
                </span>
                WhatsApp Enquiry
              </a>
            </li>
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <div className="bg-white p-6 shadow-[0_8px_30px_rgba(11,29,54,0.06)] md:p-8">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
