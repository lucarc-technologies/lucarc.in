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
    console.error('[Lucarc] Route error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Brand mark */}
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-xl font-black text-primary">L</span>
          </div>
        </div>

        {/* Error code + message */}
        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            Something went wrong
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-text font-heading">
            Unexpected Error
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            An unexpected error occurred while loading this page.
            {error.digest && (
              <span className="block mt-1 font-mono text-xs text-text-secondary/60">
                Error ID: {error.digest}
              </span>
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:brightness-110 transition-all active:scale-[0.98] cursor-pointer"
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
