"use client";

import { useMemo, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import {
  getLocationLabel,
  getUniqueLocations,
  properties,
} from "@/data/properties";
import { PROPERTY_TYPE_LABELS } from "@/lib/constants";

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  const locations = useMemo(() => getUniqueLocations(), []);
  const types = useMemo(
    () => Array.from(new Set(properties.map((p) => p.type))),
    []
  );

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    startTransition(() => {
      router.push(`/properties?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <div className="bg-white p-5 shadow-[0_8px_30px_rgba(11,29,54,0.06)] md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <div className="relative lg:col-span-2">
          <label htmlFor="q" className="mb-1.5 block text-sm text-grey-600">
            Search
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-grey-400" />
            <input
              id="q"
              defaultValue={searchParams.get("q") || ""}
              onChange={(e) => updateParam("q", e.target.value)}
              className="input-field !pl-10"
              placeholder="Search by name or keyword"
            />
          </div>
        </div>

        <div>
          <label htmlFor="category" className="mb-1.5 block text-sm text-grey-600">
            Category
          </label>
          <select
            id="category"
            className="input-field"
            value={searchParams.get("category") || ""}
            onChange={(e) => updateParam("category", e.target.value)}
          >
            <option value="">All</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm text-grey-600">
            Location
          </label>
          <select
            id="location"
            className="input-field"
            value={searchParams.get("location") || ""}
            onChange={(e) => updateParam("location", e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {getLocationLabel(loc)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="type" className="mb-1.5 block text-sm text-grey-600">
            Property Type
          </label>
          <select
            id="type"
            className="input-field"
            value={searchParams.get("type") || ""}
            onChange={(e) => updateParam("type", e.target.value)}
          >
            <option value="">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {PROPERTY_TYPE_LABELS[type]}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-1">
          <div>
            <label htmlFor="minPrice" className="mb-1.5 block text-sm text-grey-600">
              Min ₹
            </label>
            <input
              id="minPrice"
              type="number"
              min={0}
              className="input-field"
              placeholder="Min"
              defaultValue={searchParams.get("minPrice") || ""}
              onChange={(e) => updateParam("minPrice", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="mb-1.5 block text-sm text-grey-600">
              Max ₹
            </label>
            <input
              id="maxPrice"
              type="number"
              min={0}
              className="input-field"
              placeholder="Max"
              defaultValue={searchParams.get("maxPrice") || ""}
              onChange={(e) => updateParam("maxPrice", e.target.value)}
            />
          </div>
        </div>
      </div>
      {pending ? (
        <p className="mt-3 text-xs text-grey-400">Updating results...</p>
      ) : null}
      <p className="mt-3 text-xs text-grey-400">
        Filters apply to demo inventory until live listings are connected.
      </p>
    </div>
  );
}
