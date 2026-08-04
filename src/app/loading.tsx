export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated brand mark */}
        <div className="relative flex items-center justify-center">
          <span
            className="absolute inline-flex h-12 w-12 rounded-full bg-primary/20 animate-ping"
            style={{ animationDuration: '1.4s' }}
          />
          <div className="relative h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-sm font-black text-primary tracking-tight">L</span>
          </div>
        </div>

        {/* Skeleton content blocks */}
        <div className="flex flex-col items-center gap-3 w-64">
          <div className="h-3 w-40 rounded-full bg-border animate-pulse" />
          <div className="h-2.5 w-56 rounded-full bg-border/70 animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="h-2.5 w-48 rounded-full bg-border/50 animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
