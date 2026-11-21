import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-off-white px-6 pt-28">
      <div className="max-w-lg text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-grey-600">
          The page you are looking for may have been moved or does not exist.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            Back to Home
          </Link>
          <Link href="/properties" className="btn-outline">
            Browse Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
