"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-premium flex h-[4.5rem] items-center justify-between py-3 md:h-20">
        <Logo variant={solid ? "default" : "light"} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  solid
                    ? active
                      ? "text-gold"
                      : "text-charcoal hover:text-gold"
                    : active
                      ? "text-gold-light"
                      : "text-white/90 hover:text-gold-light"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium transition-colors",
              solid ? "text-navy hover:text-gold" : "text-white hover:text-gold-light"
            )}
          >
            <Phone className="h-4 w-4 text-gold" />
            {CONTACT.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-gold !py-2.5 !px-4 text-xs">
            Enquire
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center lg:hidden",
            solid ? "text-navy" : "text-white"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-grey-200 bg-white lg:hidden">
          <nav className="container-premium flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-1 py-3 text-base font-medium text-navy transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="mt-2 inline-flex items-center gap-2 px-1 py-3 text-navy"
            >
              <Phone className="h-4 w-4 text-gold" />
              {CONTACT.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-gold mt-2 w-full">
              Enquire Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
