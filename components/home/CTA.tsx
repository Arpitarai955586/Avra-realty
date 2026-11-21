import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CONTACT } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,150,62,0.22),transparent_45%)]" />
      <div className="container-premium relative z-10 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Ready to Begin
          </p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-5xl">
            Let&apos;s find the right property together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Tell us what you are looking for. Call, email, or send a WhatsApp
            message — we are ready to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Contact Avra Realty
            </Link>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
