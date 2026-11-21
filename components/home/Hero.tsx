"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT, SITE_TAGLINE } from "@/lib/constants";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy pb-16 pt-28 md:items-center md:pb-24 md:pt-24">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Luxury modern villa representing Avra Realty properties"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/75 to-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/30" />

      <div className="container-premium relative z-10 w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
            Avra Realty
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Discover thoughtfully presented residential and commercial
            opportunities with a team focused on clear guidance and premium
            service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/properties" className="btn-gold">
              Explore Properties
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={CONTACT.phoneHref} className="btn-outline-light">
              <Phone className="h-4 w-4" />
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
