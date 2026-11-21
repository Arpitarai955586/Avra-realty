import { Compass, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Sparkles,
    title: "Premium Presentation",
    text: "Properties are presented with clear details and a polished digital experience.",
  },
  {
    icon: Handshake,
    title: "Personal Guidance",
    text: "We prioritise clear communication so you can make confident decisions.",
  },
  {
    icon: Compass,
    title: "Residential & Commercial",
    text: "Support across home and business property requirements in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    text: "Straightforward enquiries via phone, email, or WhatsApp — no unnecessary complexity.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Us"
            title="Why Choose Avra Realty"
            description="A modern real estate partner focused on clarity, responsiveness, and premium client experience."
            light
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <div className="h-full border border-white/10 bg-white/5 p-6 transition hover:border-gold/40 hover:bg-white/8">
                <item.icon className="h-7 w-7 text-gold-light" />
                <h3 className="mt-5 font-display text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
