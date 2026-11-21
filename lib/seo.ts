import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, CONTACT } from "@/lib/constants";
import type { Property } from "@/types";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/images/hero/hero-main.jpg",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function createPropertyMetadata(property: Property): Metadata {
  const title = `${property.name} — ${property.priceLabel}`;
  const description = `${property.shortDescription} Located at ${property.location}. Enquire with Avra Realty.`;
  return createPageMetadata({
    title,
    description,
    path: `/properties/${property.slug}`,
    image: property.images[0]?.src,
  });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT.email,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    image: absoluteUrl("/icons/logo.svg"),
    description:
      "Avra Realty is a real estate company helping clients explore residential and commercial property opportunities.",
    sameAs: [],
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/properties?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
