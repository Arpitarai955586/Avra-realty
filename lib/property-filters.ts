import type { Property } from "@/types";

export interface PropertyFilterParams {
  q?: string;
  category?: string;
  location?: string;
  type?: string;
  minPrice?: string;
  maxPrice?: string;
}

export function filterProperties(
  list: Property[],
  params: PropertyFilterParams
): Property[] {
  const q = params.q?.trim().toLowerCase() || "";
  const min = params.minPrice ? Number(params.minPrice) : null;
  const max = params.maxPrice ? Number(params.maxPrice) : null;

  return list.filter((property) => {
    if (params.category && property.category !== params.category) return false;
    if (params.location && property.locationKey !== params.location) return false;
    if (params.type && property.type !== params.type) return false;
    if (min != null && !Number.isNaN(min) && property.price < min) return false;
    if (max != null && !Number.isNaN(max) && property.price > max) return false;
    if (q) {
      const haystack = [
        property.name,
        property.location,
        property.shortDescription,
        property.type,
        property.category,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}
