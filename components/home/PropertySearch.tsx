"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function PropertySearch() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [q, setQ] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (type) params.set("type", type);
    if (q.trim()) params.set("q", q.trim());
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <section className="relative z-20 -mt-10 md:-mt-14">
      <div className="container-premium">
        <AnimatedSection>
          <form
            onSubmit={onSubmit}
            className="grid gap-3 bg-white p-4 shadow-[0_16px_50px_rgba(11,29,54,0.12)] md:grid-cols-4 md:p-5"
          >
            <div>
              <label htmlFor="home-q" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-grey-400">
                Search
              </label>
              <input
                id="home-q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="input-field"
                placeholder="Keyword"
              />
            </div>
            <div>
              <label htmlFor="home-category" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-grey-400">
                Category
              </label>
              <select
                id="home-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input-field"
              >
                <option value="">All</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div>
              <label htmlFor="home-type" className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-grey-400">
                Type
              </label>
              <select
                id="home-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="input-field"
              >
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
                <option value="penthouse">Penthouse</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="btn-primary w-full">
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
