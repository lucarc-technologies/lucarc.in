'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, CheckCircle2, ShieldCheck, Layers, Bot, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function EarlyAccessSection() {
  const [email, setEmail] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState<'personal-os' | 'interview' | 'all'>('personal-os');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      try {
        const stored = JSON.parse(localStorage.getItem('lucarc_early_access') || '[]');
        stored.push({ email, product: selectedProduct, timestamp: new Date().toISOString() });
        localStorage.setItem('lucarc_early_access', JSON.stringify(stored));
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  return (
    <section id="early-access" className="py-20 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-surface p-8 sm:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-3xl pointer-events-none -z-10" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <Badge variant="purple" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1 inline" />
              Private Beta Testing
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text font-heading">
              Get Early Access to the Next Lucarc Releases
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
              We are currently onboarding early developers, founders, and engineering teams to test upcoming features in <strong>PersonalOS</strong> and <strong>Lucarc Interview</strong>.
            </p>
          </div>

          {/* Product Interest Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setSelectedProduct('personal-os')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                selectedProduct === 'personal-os'
                  ? 'bg-primary/10 border-primary text-primary shadow-sm'
                  : 'bg-background border-border text-text-secondary hover:text-text'
              }`}
            >
              <Bot className="h-3.5 w-3.5" />
              <span>PersonalOS (Agentic OS)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedProduct('interview')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                selectedProduct === 'interview'
                  ? 'bg-primary/10 border-primary text-primary shadow-sm'
                  : 'bg-background border-border text-text-secondary hover:text-text'
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              <span>Lucarc Interview (Sandbox)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedProduct('all')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                selectedProduct === 'all'
                  ? 'bg-primary/10 border-primary text-primary shadow-sm'
                  : 'bg-background border-border text-text-secondary hover:text-text'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>All Ecosystem Tools</span>
            </button>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center max-w-lg mx-auto"
            >
              <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-base font-bold text-text">You&apos;re on the early access priority list!</h3>
              <p className="text-xs text-text-secondary mt-1">
                We reserved your spot for <strong>{selectedProduct === 'personal-os' ? 'PersonalOS' : selectedProduct === 'interview' ? 'Lucarc Interview' : 'All Ecosystem Tools'}</strong>. We will send an invite as rollout begins.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email (e.g. dev@company.com)"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-text text-sm placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 py-3 px-6"
                >
                  {status === 'loading' ? (
                    <span>Joining...</span>
                  ) : (
                    <>
                      <span>Request Invite</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-text-secondary">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-success" />
                  No spam. Unsubscribe anytime.
                </span>
                <span>•</span>
                <span>Direct dev communication</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
