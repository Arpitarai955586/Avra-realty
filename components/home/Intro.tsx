import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SITE_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium grid items-center gap-10 lg:grid-cols-2">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            About {SITE_NAME}
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl lg:text-5xl">
            A refined approach to finding the right property
          </h2>
          <div className="gold-rule mt-5" />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-base leading-relaxed text-grey-600 md:text-lg">
            {SITE_NAME} is a real estate company dedicated to helping clients
            explore residential and commercial opportunities with clarity and
            care. Whether you are buying, selling, or renting, we focus on
            understanding your requirements and guiding you through the next
            steps.
          </p>
          <p className="mt-4 text-base leading-relaxed text-grey-600 md:text-lg">
            Detailed company history, service areas, and credentials will be
            published here once confirmed by the business.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
