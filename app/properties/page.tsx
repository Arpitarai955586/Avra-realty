import { Suspense } from "react";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { properties } from "@/data/properties";
import { filterProperties } from "@/lib/property-filters";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Properties",
  description:
    "Browse residential and commercial demo properties from Avra Realty. Filter by type, location, and price. Replace with live inventory before launch.",
  path: "/properties",
});

interface PropertiesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;
  const get = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const filtered = filterProperties(properties, {
    q: get("q"),
    category: get("category"),
    location: get("location"),
    type: get("type"),
    minPrice: get("minPrice"),
    maxPrice: get("maxPrice"),
  });

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Properties", path: "/properties" },
        ])}
      />
      <PageHero
        title="Properties"
        description="Explore demo residential and commercial listings. All inventory shown is placeholder content until live data is connected."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Properties" },
        ]}
      />

      <section className="section-padding bg-off-white">
        <div className="container-premium space-y-8">
          <Suspense
            fallback={
              <div className="bg-white p-6 text-sm text-grey-400">
                Loading filters...
              </div>
            }
          >
            <PropertyFilters />
          </Suspense>

          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              {filtered.length}{" "}
              {filtered.length === 1 ? "Property" : "Properties"} Found
            </h2>
          </div>

          <PropertyGrid
            properties={filtered}
            emptyMessage="No demo properties match your filters. Try adjusting search criteria."
          />
        </div>
      </section>
    </>
  );
}
