"use client";

import { useState } from "react";
import Image from "next/image";
import type { PropertyImage } from "@/types";
import { cn } from "@/lib/utils";

export function PropertyGallery({ images }: { images: PropertyImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] || images[0];

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden bg-grey-100">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "relative aspect-[4/3] overflow-hidden border-2 transition",
                active === index ? "border-gold" : "border-transparent opacity-80 hover:opacity-100"
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="160px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
