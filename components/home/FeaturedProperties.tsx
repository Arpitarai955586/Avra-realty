import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { getFeaturedProperties } from "@/data/properties";

export function FeaturedProperties() {
  const featured = getFeaturedProperties().slice(0, 3);

  return (
    <section className="section-padding bg-off-white">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Featured"
            title="Featured Properties"
            description="A curated preview of demo listings. Replace with verified Avra Realty inventory before launch."
          />
        </AnimatedSection>
        <AnimatedSection className="mt-12" delay={0.1}>
          <PropertyGrid properties={featured} />
        </AnimatedSection>
        <div className="mt-10 text-center">
          <Link href="/properties" className="btn-outline">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
