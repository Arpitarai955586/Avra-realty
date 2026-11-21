import type { Property } from "@/types";

/**
 * DEMO PROPERTY INVENTORY
 * These listings are placeholder demo data for design and development only.
 * Replace with verified client inventory before production launch.
 * Do not treat prices, locations, or availability as real offerings.
 */
export const properties: Property[] = [
  {
    id: "demo-001",
    slug: "demo-skyline-residences",
    name: "Skyline Residences",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-north",
    price: 8500000,
    priceLabel: "₹85 Lakh",
    category: "residential",
    type: "apartment",
    areaSqFt: 1250,
    bedrooms: 3,
    bathrooms: 2,
    status: "available",
    featured: true,
    shortDescription:
      "Demo listing: modern apartment with open living spaces and city views.",
    description:
      "This is a demo property listing for Avra Realty. Replace this description with verified property details provided by the client. Features open-plan living, natural light, and finishes suitable for contemporary lifestyles. Specifications, pricing, and availability shown here are placeholders only.",
    amenities: [
      "Parking",
      "Lift",
      "Security",
      "Power Backup",
      "Balcony",
      "Modular Kitchen",
    ],
    images: [
      {
        src: "/images/properties/apartment-1.jpg",
        alt: "Demo apartment exterior — Skyline Residences",
      },
      {
        src: "/images/properties/apartment-2.jpg",
        alt: "Demo apartment living area — Skyline Residences",
      },
      {
        src: "/images/properties/apartment-3.jpg",
        alt: "Demo apartment interior — Skyline Residences",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-002",
    slug: "demo-lakeview-villa",
    name: "Lakeview Villa",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-west",
    price: 25000000,
    priceLabel: "₹2.5 Cr",
    category: "residential",
    type: "villa",
    areaSqFt: 3200,
    bedrooms: 4,
    bathrooms: 4,
    status: "available",
    featured: true,
    shortDescription:
      "Demo listing: spacious villa with private garden and premium finishes.",
    description:
      "This is a demo villa listing for Avra Realty. Replace with verified details when available. Showcases a contemporary villa layout with private outdoor space, generous bedrooms, and a lifestyle-oriented floor plan. All information is placeholder demo content.",
    amenities: [
      "Private Garden",
      "Parking",
      "Security",
      "Servant Quarters",
      "Modular Kitchen",
      "Terrace",
    ],
    images: [
      {
        src: "/images/properties/villa-1.jpg",
        alt: "Demo luxury villa exterior — Lakeview Villa",
      },
      {
        src: "/images/properties/villa-2.jpg",
        alt: "Demo villa facade — Lakeview Villa",
      },
      {
        src: "/images/properties/villa-3.jpg",
        alt: "Demo modern villa architecture — Lakeview Villa",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-003",
    slug: "demo-urban-loft",
    name: "Urban Loft Apartment",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-central",
    price: 6200000,
    priceLabel: "₹62 Lakh",
    category: "residential",
    type: "apartment",
    areaSqFt: 980,
    bedrooms: 2,
    bathrooms: 2,
    status: "available",
    featured: true,
    shortDescription:
      "Demo listing: compact modern loft-style apartment for urban living.",
    description:
      "Demo apartment listing for Avra Realty. Intended to illustrate residential card and detail layouts. Replace with real inventory, accurate pricing, and confirmed amenities before going live.",
    amenities: ["Parking", "Lift", "Security", "Balcony", "Club House"],
    images: [
      {
        src: "/images/properties/apartment-2.jpg",
        alt: "Demo loft apartment interior — Urban Loft",
      },
      {
        src: "/images/properties/apartment-3.jpg",
        alt: "Demo loft living space — Urban Loft",
      },
      {
        src: "/images/properties/apartment-1.jpg",
        alt: "Demo loft building exterior — Urban Loft",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-004",
    slug: "demo-heritage-house",
    name: "Heritage Garden House",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-south",
    price: 18000000,
    priceLabel: "₹1.8 Cr",
    category: "residential",
    type: "house",
    areaSqFt: 2400,
    bedrooms: 3,
    bathrooms: 3,
    status: "available",
    featured: false,
    shortDescription:
      "Demo listing: independent house with garden and family-friendly layout.",
    description:
      "Placeholder independent house listing. Use this page structure for real residential inventory once Avra Realty provides verified property data.",
    amenities: [
      "Garden",
      "Parking",
      "Security",
      "Store Room",
      "Modular Kitchen",
    ],
    images: [
      {
        src: "/images/properties/villa-3.jpg",
        alt: "Demo independent house exterior — Heritage Garden House",
      },
      {
        src: "/images/properties/villa-2.jpg",
        alt: "Demo house facade — Heritage Garden House",
      },
      {
        src: "/images/properties/villa-1.jpg",
        alt: "Demo house architecture — Heritage Garden House",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-005",
    slug: "demo-corner-office",
    name: "Corner Office Suite",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-central",
    price: 12000000,
    priceLabel: "₹1.2 Cr",
    category: "commercial",
    type: "office",
    areaSqFt: 1800,
    status: "available",
    featured: true,
    shortDescription:
      "Demo listing: commercial office suite suitable for professional businesses.",
    description:
      "Demo commercial office listing for Avra Realty. Replace with verified commercial inventory. Layout is designed for flexible office use with open floor potential and building amenities.",
    amenities: [
      "Lift",
      "Parking",
      "Power Backup",
      "Reception Area",
      "Security",
      "Air Conditioning",
    ],
    images: [
      {
        src: "/images/properties/commercial-2.jpg",
        alt: "Demo commercial office interior — Corner Office Suite",
      },
      {
        src: "/images/properties/commercial-3.jpg",
        alt: "Demo office workspace — Corner Office Suite",
      },
      {
        src: "/images/properties/commercial-1.jpg",
        alt: "Demo commercial building — Corner Office Suite",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-006",
    slug: "demo-highstreet-retail",
    name: "Highstreet Retail Space",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-north",
    price: 9500000,
    priceLabel: "₹95 Lakh",
    category: "commercial",
    type: "retail",
    areaSqFt: 1100,
    status: "available",
    featured: false,
    shortDescription:
      "Demo listing: ground-level retail space for brand showrooms or stores.",
    description:
      "Placeholder retail property for demonstration. Confirm frontage, footfall context, and commercial terms with the client before publishing live listings.",
    amenities: [
      "Frontage",
      "Parking Nearby",
      "Power Backup",
      "Security",
      "Storage",
    ],
    images: [
      {
        src: "/images/properties/commercial-1.jpg",
        alt: "Demo retail commercial building — Highstreet Retail",
      },
      {
        src: "/images/properties/commercial-2.jpg",
        alt: "Demo retail interior space — Highstreet Retail",
      },
      {
        src: "/images/properties/building-1.jpg",
        alt: "Demo commercial street frontage — Highstreet Retail",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-007",
    slug: "demo-business-tower",
    name: "Business Tower Floor",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-west",
    price: 35000000,
    priceLabel: "₹3.5 Cr",
    category: "commercial",
    type: "office",
    areaSqFt: 4500,
    status: "available",
    featured: true,
    shortDescription:
      "Demo listing: large commercial floor in a modern business tower.",
    description:
      "Demo commercial tower floor for Avra Realty website previews. Replace with real floor plans, pricing, and building specifications when available.",
    amenities: [
      "Lift",
      "Parking",
      "Security",
      "Power Backup",
      "Conference Ready",
      "Air Conditioning",
    ],
    images: [
      {
        src: "/images/properties/building-1.jpg",
        alt: "Demo business tower exterior — Business Tower Floor",
      },
      {
        src: "/images/properties/commercial-1.jpg",
        alt: "Demo tower commercial facade — Business Tower Floor",
      },
      {
        src: "/images/properties/commercial-3.jpg",
        alt: "Demo office floor interior — Business Tower Floor",
      },
    ],
    isDemo: true,
  },
  {
    id: "demo-008",
    slug: "demo-penthouse-crest",
    name: "Crest Penthouse",
    location: "Demo Location — To Be Confirmed",
    locationKey: "demo-south",
    price: 42000000,
    priceLabel: "₹4.2 Cr",
    category: "residential",
    type: "penthouse",
    areaSqFt: 3800,
    bedrooms: 4,
    bathrooms: 4,
    status: "available",
    featured: false,
    shortDescription:
      "Demo listing: premium penthouse with expansive terrace and skyline views.",
    description:
      "Demo penthouse listing used to showcase luxury residential presentation. All details are placeholders pending client-verified inventory.",
    amenities: [
      "Private Terrace",
      "Parking",
      "Lift",
      "Security",
      "Jacuzzi Ready",
      "Smart Home Ready",
    ],
    images: [
      {
        src: "/images/properties/apartment-3.jpg",
        alt: "Demo penthouse living area — Crest Penthouse",
      },
      {
        src: "/images/properties/apartment-1.jpg",
        alt: "Demo penthouse building — Crest Penthouse",
      },
      {
        src: "/images/properties/villa-2.jpg",
        alt: "Demo luxury residential architecture — Crest Penthouse",
      },
    ],
    isDemo: true,
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getResidentialProperties(): Property[] {
  return properties.filter((p) => p.category === "residential");
}

export function getCommercialProperties(): Property[] {
  return properties.filter((p) => p.category === "commercial");
}

export function getUniqueLocations(): string[] {
  return Array.from(new Set(properties.map((p) => p.locationKey)));
}

export function getLocationLabel(locationKey: string): string {
  const map: Record<string, string> = {
    "demo-north": "Demo North Zone",
    "demo-south": "Demo South Zone",
    "demo-west": "Demo West Zone",
    "demo-central": "Demo Central Zone",
  };
  return map[locationKey] || locationKey;
}
