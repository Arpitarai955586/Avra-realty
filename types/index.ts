export type PropertyCategory = "residential" | "commercial";

export type PropertyType =
  | "apartment"
  | "villa"
  | "house"
  | "penthouse"
  | "office"
  | "retail"
  | "warehouse"
  | "plot";

export type PropertyStatus = "available" | "sold" | "rented" | "upcoming";

export interface PropertyAmenity {
  id: string;
  label: string;
}

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  /** Location label for filters; keep generic until client provides service areas */
  locationKey: string;
  price: number;
  priceLabel: string;
  category: PropertyCategory;
  type: PropertyType;
  areaSqFt: number;
  bedrooms?: number;
  bathrooms?: number;
  status: PropertyStatus;
  featured: boolean;
  shortDescription: string;
  description: string;
  amenities: string[];
  images: PropertyImage[];
  /** Demo flag — replace with live inventory when available */
  isDemo: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  isDemo: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertySlug?: string;
  honeypot?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}
