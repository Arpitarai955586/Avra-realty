import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Avra Realty home"
    >
      <Image
        src="/icons/logo-mark.svg"
        alt="Avra Realty logo"
        width={44}
        height={44}
        className="h-10 w-10 md:h-11 md:w-11"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-2xl tracking-[0.08em]",
            variant === "light" ? "text-white" : "text-navy"
          )}
        >
          AVRA
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
          Realty
        </span>
      </span>
    </Link>
  );
}
