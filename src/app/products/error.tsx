'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Lucarc/Products] Route error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-xl font-black text-primary">L</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">Product Page Error</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-text font-heading">
            Failed to Load Product
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            This product page couldn&apos;t be loaded right now. Try refreshing or go back.
            {error.digest && (
              <span className="block mt-1 font-mono text-xs text-text-secondary/60">
                Error ID: {error.digest}
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:brightness-110 transition-all cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-border bg-surface text-text text-sm font-medium hover:bg-background transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
