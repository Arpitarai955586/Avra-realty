export const SITE_NAME = "Avra Realty";
export const SITE_TAGLINE = "Find Your Dream Property with Avra Realty";

export const CONTACT = {
  phone: "7276622755",
  phoneDisplay: "+91 72766 22755",
  phoneHref: "tel:+917276622755",
  email: "avrarealty755@gmail.com",
  emailHref: "mailto:avrarealty755@gmail.com",
  whatsapp: "917276622755",
  whatsappHref: "https://wa.me/917276622755",
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
export const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  apartment: "Apartment",
  villa: "Villa",
  house: "House",
  penthouse: "Penthouse",
  office: "Office",
  retail: "Retail Space",
  warehouse: "Warehouse",
  plot: "Plot",
};

export const CATEGORY_LABELS: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
};
