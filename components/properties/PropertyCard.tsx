"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Maximize2, MessageCircle } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { CATEGORY_LABELS, PROPERTY_TYPE_LABELS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import type { Property } from "@/types";

export function PropertyCard({ property }: { property: Property }) {
  const whatsapp = buildWhatsAppUrl(
    `Hello Avra Realty, I am interested in "${property.name}" (${property.slug}). Please share more details.`
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_8px_30px_rgba(11,29,54,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,29,54,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="bg-navy/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
            {CATEGORY_LABELS[property.category]}
          </span>
          <span className="bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy">
            {PROPERTY_TYPE_LABELS[property.type]}
          </span>
          {property.isDemo ? <DemoBadge /> : null}
        </div>
        <p className="absolute bottom-3 left-3 font-display text-2xl text-white">
          {property.priceLabel}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl text-navy">
          <Link
            href={`/properties/${property.slug}`}
            className="transition hover:text-gold"
          >
            {property.name}
          </Link>
        </h3>
        <p className="mt-2 flex items-start gap-1.5 text-sm text-grey-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          {property.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-4 border-y border-grey-100 py-3 text-sm text-grey-600">
          <span className="inline-flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-gold" />
            {property.areaSqFt.toLocaleString("en-IN")} sq.ft
          </span>
          {property.bedrooms != null ? (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-gold" />
              {property.bedrooms} Beds
            </span>
          ) : null}
          {property.bathrooms != null ? (
            <span className="inline-flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-gold" />
              {property.bathrooms} Baths
            </span>
          ) : null}
        </div>

        <p className="mt-4 line-clamp-2 flex-1 text-sm leading-relaxed text-grey-600">
          {property.shortDescription}
        </p>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/properties/${property.slug}`}
            className="btn-primary flex-1 !py-2.5 text-xs"
          >
            View Details
          </Link>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 !py-2.5 text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}
