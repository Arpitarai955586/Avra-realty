export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-off-white pt-28">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        <p className="text-sm tracking-wide text-grey-600">Loading...</p>
      </div>
    </div>
  );
}
