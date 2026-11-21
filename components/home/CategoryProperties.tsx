import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import {
  getCommercialProperties,
  getResidentialProperties,
} from "@/data/properties";

export function ResidentialProperties() {
  const list = getResidentialProperties().slice(0, 3);
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Residential"
            title="Residential Properties"
            description="Homes, apartments, and villas presented with a premium listing experience."
            align="left"
          />
        </AnimatedSection>
        <AnimatedSection className="mt-10" delay={0.08}>
          <PropertyGrid properties={list} />
        </AnimatedSection>
        <div className="mt-8">
          <Link
            href="/properties?category=residential"
            className="btn-outline"
          >
            Browse Residential
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CommercialProperties() {
  const list = getCommercialProperties().slice(0, 3);
  return (
    <section className="section-padding bg-grey-100">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Commercial"
            title="Commercial Properties"
            description="Office and retail demo spaces for businesses exploring their next location."
            align="left"
          />
        </AnimatedSection>
        <AnimatedSection className="mt-10" delay={0.08}>
          <PropertyGrid properties={list} />
        </AnimatedSection>
        <div className="mt-8">
          <Link href="/properties?category=commercial" className="btn-outline">
            Browse Commercial
          </Link>
        </div>
      </div>
    </section>
  );
}
