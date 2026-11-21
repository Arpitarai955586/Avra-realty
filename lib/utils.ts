export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number): string {
  if (price >= 10000000) {
    const cr = price / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (price >= 100000) {
    const lakh = price / 100000;
    return `₹${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(2)} Lakh`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

export function buildWhatsAppUrl(message: string): string {
  const phone = "917276622755";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
