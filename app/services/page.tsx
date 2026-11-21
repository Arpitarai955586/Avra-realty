import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/data/services";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore Avra Realty services including property buying assistance, selling support, renting & leasing, and real estate consultation.",
  path: "/services",
  image: "/images/services/consultation.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Services", path: "/services" },
        ])}
      />
      <PageHero
        title="Our Services"
        description="Practical real estate support for buyers, sellers, and tenants."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
        ]}
        imageSrc="/images/services/consultation.jpg"
        imageAlt="Real estate consultation"
      />

      <section className="section-padding bg-off-white">
        <div className="container-premium space-y-10">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.04}>
              <article
                id={service.slug}
                className={`grid overflow-hidden bg-white shadow-[0_8px_30px_rgba(11,29,54,0.06)] lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[260px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} service by Avra Realty`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                    Service
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
                    {service.title}
                  </h2>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 text-base leading-relaxed text-grey-600">
                    {service.description}
                  </p>
                  <Link href="/contact" className="btn-primary mt-8 w-fit">
                    Enquire About This Service
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
