export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Product hero skeleton */}
      <div className="border-b border-border pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-5 max-w-xl w-full">
            <div className="h-7 w-48 rounded-full bg-border animate-pulse" />
            <div className="h-10 w-full rounded-xl bg-border animate-pulse" style={{ animationDelay: '100ms' }} />
            <div className="h-10 w-4/5 rounded-xl bg-border/70 animate-pulse" style={{ animationDelay: '150ms' }} />
            <div className="h-4 w-full rounded-full bg-border/50 animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="h-4 w-11/12 rounded-full bg-border/40 animate-pulse" style={{ animationDelay: '250ms' }} />
            <div className="flex gap-3 mt-2">
              <div className="h-11 w-40 rounded-lg bg-primary/20 animate-pulse" style={{ animationDelay: '300ms' }} />
              <div className="h-11 w-36 rounded-lg bg-border animate-pulse" style={{ animationDelay: '350ms' }} />
            </div>
          </div>

          {/* Stats box skeleton */}
          <div className="w-full lg:w-96 rounded-xl border border-border bg-surface p-6">
            <div className="h-3 w-32 rounded-full bg-border animate-pulse mb-6 pb-4 border-b border-border" />
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 rounded-xl bg-background border border-border space-y-2">
                  <div className="h-7 w-16 rounded-lg bg-border animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
                  <div className="h-2.5 w-20 rounded-full bg-border/60 animate-pulse" />
                  <div className="h-2 w-24 rounded-full bg-border/40 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface p-6 space-y-3"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-10 w-10 rounded-2xl bg-border animate-pulse" style={{ animationDelay: `${i * 60}ms` }} />
                <div className="h-5 w-20 rounded-full bg-border/60 animate-pulse" />
              </div>
              <div className="h-5 w-36 rounded-lg bg-border animate-pulse" />
              <div className="h-3 w-full rounded-full bg-border/60 animate-pulse" />
              <div className="h-3 w-4/5 rounded-full bg-border/40 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
