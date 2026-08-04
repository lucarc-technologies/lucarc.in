'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { PrinciplesSection } from '@/components/sections/principles';
import { CTASection } from '@/components/sections/cta';
import { expertiseList } from '@/content/company';
import { CheckCircle2 } from 'lucide-react';

export function ValuesView() {
  return (
    <main className="min-h-screen bg-background pt-12">
      <section className="relative overflow-hidden pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="purple" className="mb-4">
              Our Engineering Standards
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text font-heading leading-tight">
              Quality Over Quantity in Every Release
            </h1>
            <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              We focus on building fewer products exceptionally well. Every architectural choice is
              evaluated for long-term maintainability, performance, and security.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-6">
              Core Technical Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {expertiseList.map((skill) => (
                <div
                  key={skill}
                  className="p-4 rounded-xl border border-border bg-surface flex items-center gap-3 text-sm text-text shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PrinciplesSection />
      <CTASection />
    </main>
  );
}
