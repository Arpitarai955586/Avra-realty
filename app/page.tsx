import { ContactSection } from "@/components/home/ContactSection";
import { CTA } from "@/components/home/CTA";
import {
  CommercialProperties,
  ResidentialProperties,
} from "@/components/home/CategoryProperties";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { PropertySearch } from "@/components/home/PropertySearch";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChoose } from "@/components/home/WhyChoose";
import { JsonLd } from "@/components/ui/JsonLd";
import { createPageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Avra Realty | Find Your Dream Property",
  description:
    "Avra Realty helps you explore residential and commercial properties with premium guidance. Enquire by phone, email, or WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      <Hero />
      <PropertySearch />
      <Intro />
      <FeaturedProperties />
      <ResidentialProperties />
      <CommercialProperties />
      <WhyChoose />
      <ServicesPreview />
      <Testimonials />
      <CTA />
      <ContactSection />
    </>
  );
}
