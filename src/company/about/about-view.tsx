'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { companyOverview, whatWeBuild } from '@/content/company';
import { Badge } from '@/components/ui/badge';
import { PrinciplesSection } from '@/components/sections/principles';
import { CTASection } from '@/components/sections/cta';

export function AboutView() {
  return (
    <main className="min-h-screen bg-background pt-12">
      <section className="relative overflow-hidden pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-4">
              About Lucarc
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text font-heading leading-tight">
              Software That Helps Businesses Work Smarter and{' '}
              <span className="text-primary font-semibold">Developers Grow</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              {companyOverview.philosophy}
            </p>
          </div>

          <div className="mt-16 p-8 sm:p-12 rounded-xl border border-border bg-surface relative overflow-hidden shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-primary">
              Our Vision Quote
            </span>
            <blockquote className="mt-4 text-xl sm:text-3xl font-semibold text-text font-heading leading-snug">
              &ldquo;{companyOverview.visionQuote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-4">
              Focus Areas
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
              What We Build
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              We focus on building products in areas where technology creates measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeBuild.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">{area.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PrinciplesSection />
      <CTASection />
    </main>
  );
}
