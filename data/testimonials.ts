import type { Testimonial } from "@/types";

/**
 * DEMO TESTIMONIALS ONLY
 * These quotes are placeholders for UI demonstration.
 * Replace with verified client reviews or remove until real feedback is available.
 */
export const testimonials: Testimonial[] = [
  {
    id: "demo-t1",
    name: "Demo Client A",
    role: "Home Buyer (Demo)",
    quote:
      "Placeholder review for design preview. Replace with a verified client testimonial before launch.",
    isDemo: true,
  },
  {
    id: "demo-t2",
    name: "Demo Client B",
    role: "Property Seller (Demo)",
    quote:
      "Placeholder review for layout and animation testing. Not a real customer statement.",
    isDemo: true,
  },
  {
    id: "demo-t3",
    name: "Demo Client C",
    role: "Commercial Enquiry (Demo)",
    quote:
      "Placeholder commercial enquiry feedback for UI only. Await real reviews from Avra Realty clients.",
    isDemo: true,
  },
];
