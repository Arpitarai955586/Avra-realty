import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "buying",
    slug: "property-buying",
    title: "Property Buying Assistance",
    shortDescription:
      "Guided support to evaluate and shortlist properties that match your goals.",
    description:
      "Avra Realty helps buyers navigate property options with clear communication and practical guidance. Share your requirements and we will help you explore suitable opportunities. Specific service areas and process details will be confirmed with the client before publication of operational claims.",
    icon: "Home",
    image: "/images/services/buying.jpg",
  },
  {
    id: "selling",
    slug: "property-selling",
    title: "Property Selling Support",
    shortDescription:
      "Professional presentation and enquiry handling for property sellers.",
    description:
      "Sellers can work with Avra Realty to present their property professionally and connect with serious enquiries. Marketing approach, timelines, and coverage will be defined based on verified client processes.",
    icon: "BadgeIndianRupee",
    image: "/images/services/selling.jpg",
  },
  {
    id: "renting",
    slug: "renting-leasing",
    title: "Renting & Leasing",
    shortDescription:
      "Support for residential and commercial rental or lease requirements.",
    description:
      "Whether you are looking to rent or lease a property, Avra Realty can assist with enquiries and introductions. Replace this copy with the exact rental services offered once confirmed by the business.",
    icon: "KeyRound",
    image: "/images/services/renting.jpg",
  },
  {
    id: "consultation",
    slug: "real-estate-consultation",
    title: "Real Estate Consultation",
    shortDescription:
      "One-on-one conversations to clarify requirements and next steps.",
    description:
      "Speak with Avra Realty for guidance on buying, selling, or renting. Consultation scope and availability should be updated with verified business information prior to launch messaging.",
    icon: "MessagesSquare",
    image: "/images/services/consultation.jpg",
  },
];
