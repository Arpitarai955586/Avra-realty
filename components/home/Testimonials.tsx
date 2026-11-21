import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            description="Demo quotes for layout preview only. Real client reviews will replace these once available."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.06}>
              <blockquote className="relative h-full border border-grey-100 bg-off-white p-6 md:p-7">
                <Quote className="h-8 w-8 text-gold/50" />
                {item.isDemo ? (
                  <div className="mt-3">
                    <DemoBadge />
                  </div>
                ) : null}
                <p className="mt-4 text-base leading-relaxed text-grey-600">
                  “{item.quote}”
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block font-medium text-navy">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm text-grey-400">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
