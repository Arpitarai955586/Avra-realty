import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  Check,
  MapPin,
  Maximize2,
} from "lucide-react";
import { PropertyEnquiryForm } from "@/components/properties/PropertyEnquiryForm";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  CATEGORY_LABELS,
  PROPERTY_TYPE_LABELS,
} from "@/lib/constants";
import { getPropertyBySlug, properties } from "@/data/properties";
import {
  breadcrumbJsonLd,
  createPropertyMetadata,
} from "@/lib/seo";

interface PropertyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) {
    return { title: "Property Not Found" };
  }
  return createPropertyMetadata(property);
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Properties", path: "/properties" },
          { name: property.name, path: `/properties/${property.slug}` },
        ])}
      />

      <section className="bg-off-white pt-28 pb-16 md:pt-32">
        <div className="container-premium">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Properties", href: "/properties" },
              { label: property.name },
            ]}
          />

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="bg-navy px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
              {CATEGORY_LABELS[property.category]}
            </span>
            <span className="bg-grey-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy">
              {PROPERTY_TYPE_LABELS[property.type]}
            </span>
            {property.isDemo ? <DemoBadge /> : null}
          </div>

          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-4xl text-navy md:text-5xl">
                {property.name}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-grey-600">
                <MapPin className="h-4 w-4 text-gold" />
                {property.location}
              </p>
            </div>
            <p className="font-display text-3xl text-gold md:text-4xl">
              {property.priceLabel}
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <PropertyGallery images={property.images} />

              <div className="mt-10 bg-white p-6 shadow-[0_8px_30px_rgba(11,29,54,0.06)] md:p-8">
                <h2 className="font-display text-2xl text-navy md:text-3xl">
                  Property Overview
                </h2>
                <div className="gold-rule mt-4" />
                <p className="mt-5 text-base leading-relaxed text-grey-600">
                  {property.description}
                </p>

                <h3 className="mt-10 font-display text-2xl text-navy">
                  Specifications
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  <li className="flex items-center gap-2 border border-grey-100 px-4 py-3 text-sm text-grey-600">
                    <Maximize2 className="h-4 w-4 text-gold" />
                    Area: {property.areaSqFt.toLocaleString("en-IN")} sq.ft
                  </li>
                  <li className="flex items-center gap-2 border border-grey-100 px-4 py-3 text-sm text-grey-600">
                    Type: {PROPERTY_TYPE_LABELS[property.type]}
                  </li>
                  {property.bedrooms != null ? (
                    <li className="flex items-center gap-2 border border-grey-100 px-4 py-3 text-sm text-grey-600">
                      <BedDouble className="h-4 w-4 text-gold" />
                      Bedrooms: {property.bedrooms}
                    </li>
                  ) : null}
                  {property.bathrooms != null ? (
                    <li className="flex items-center gap-2 border border-grey-100 px-4 py-3 text-sm text-grey-600">
                      <Bath className="h-4 w-4 text-gold" />
                      Bathrooms: {property.bathrooms}
                    </li>
                  ) : null}
                </ul>

                <h3 className="mt-10 font-display text-2xl text-navy">
                  Amenities
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-grey-600"
                    >
                      <Check className="h-4 w-4 text-gold" />
                      {amenity}
                    </li>
                  ))}
                </ul>

                {property.isDemo ? (
                  <p className="mt-8 border border-dashed border-gold/40 bg-gold/5 px-4 py-3 text-sm text-grey-600">
                    This is demo inventory for website preview. Pricing,
                    location, and availability are placeholders and not real
                    offerings.
                  </p>
                ) : null}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <PropertyEnquiryForm
                propertyName={property.name}
                propertySlug={property.slug}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
