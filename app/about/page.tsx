import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SITE_NAME } from "@/lib/constants";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Avra Realty — a real estate company focused on clear guidance for residential and commercial property needs.",
  path: "/about",
  image: "/images/about/about-office.jpg",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <PageHero
        title="About Avra Realty"
        description="Premium real estate guidance built around clarity, communication, and client trust."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        imageSrc="/images/about/about-office.jpg"
        imageAlt="Modern real estate office setting"
      />

      <section className="section-padding bg-white">
        <div className="container-premium grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about/about-office.jpg"
                alt="Professional property consultation environment for Avra Realty"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
              Built to help you move forward with confidence
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-grey-600 md:text-lg">
              {SITE_NAME} is a real estate company helping clients explore
              residential and commercial opportunities. We believe property
              decisions deserve clear information, attentive support, and a
              polished experience from first enquiry to next steps.
            </p>
            <p className="mt-4 text-base leading-relaxed text-grey-600 md:text-lg">
              Company history, founding details, years of experience, RERA
              information, and verified office locations will be published here
              once provided by the business. Until then, this page shares only
              confirmed contact details and a clear overview of how we work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="container-premium grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Mission",
              text: "Help clients discover suitable properties through transparent communication and thoughtful guidance.",
            },
            {
              title: "Approach",
              text: "Listen first, present options clearly, and keep enquiries easy via phone, email, and WhatsApp.",
            },
            {
              title: "Promise",
              text: "Maintain a premium digital experience and honest information — never exaggerated claims.",
            },
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <div className="h-full bg-white p-6 shadow-[0_8px_30px_rgba(11,29,54,0.05)]">
                <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey-600">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="font-display text-3xl text-navy md:text-4xl">
              A team-ready foundation
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-grey-600 md:text-lg">
              Team profiles, leadership bios, and professional credentials will
              appear in this section once Avra Realty provides approved content
              and photographs.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src="/images/about/about-team.jpg"
                alt="Collaborative professional meeting placeholder for Avra Realty team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
