import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Services"
            title="Our Services"
            description="Practical real estate support tailored to buying, selling, renting, and consultation needs."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.05}>
              <article className="group h-full overflow-hidden bg-white shadow-[0_8px_30px_rgba(11,29,54,0.06)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Avra Realty`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey-600">
                    {service.shortDescription}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
