import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/components/ui/Breadcrumbs";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  description,
  breadcrumbs,
  imageSrc = "/images/hero/hero-main.jpg",
  imageAlt = "Avra Realty",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-20">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/75 to-navy" />
      <div className="container-premium relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/65">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                  {index > 0 ? (
                    <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden />
                  ) : null}
                  {item.href && !isLast ? (
                    <Link href={item.href} className="transition-colors hover:text-gold-light">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "font-medium text-white" : undefined} aria-current={isLast ? "page" : undefined}>
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="font-display text-4xl text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="gold-rule mt-6" />
      </div>
    </section>
  );
}
