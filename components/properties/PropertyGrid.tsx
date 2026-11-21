import { PropertyCard } from "@/components/properties/PropertyCard";
import type { Property } from "@/types";

export function PropertyGrid({
  properties,
  emptyMessage = "No properties match your filters.",
}: {
  properties: Property[];
  emptyMessage?: string;
}) {
  if (properties.length === 0) {
    return (
      <div className="border border-dashed border-grey-200 bg-white px-6 py-16 text-center">
        <p className="text-grey-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
