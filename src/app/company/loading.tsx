export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="border-b border-border pt-16 pb-24 px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <div className="h-6 w-28 rounded-full bg-border animate-pulse" />
          <div className="h-8 w-96 max-w-full rounded-xl bg-border animate-pulse" style={{ animationDelay: '100ms' }} />
          <div className="h-4 w-80 max-w-full rounded-full bg-border/60 animate-pulse" style={{ animationDelay: '200ms' }} />
          <div className="h-4 w-64 max-w-full rounded-full bg-border/40 animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface p-6 space-y-3"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="h-10 w-10 rounded-2xl bg-border animate-pulse" />
              <div className="h-4 w-32 rounded-full bg-border animate-pulse" />
              <div className="h-3 w-full rounded-full bg-border/60 animate-pulse" />
              <div className="h-3 w-4/5 rounded-full bg-border/40 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
