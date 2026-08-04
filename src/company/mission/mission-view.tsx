'use client';

import * as React from 'react';
import { Rocket, Layers, GitBranch } from 'lucide-react';
import { companyOverview } from '@/content/company';
import { Badge } from '@/components/ui/badge';
import { RoadmapSection } from '@/components/sections/roadmap';
import { CTASection } from '@/components/sections/cta';

export function MissionView() {
  return (
    <main className="min-h-screen bg-background pt-12">
      <section className="relative overflow-hidden pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-4">
              Our Long-Term Vision
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text font-heading leading-tight">
              An Interconnected Ecosystem of{' '}
              <span className="text-primary font-semibold">Products & Tools</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              {companyOverview.longTermVision}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-surface shadow-sm">
              <Layers className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold text-text mb-2">Connected Infrastructure</h3>
              <p className="text-sm text-text-secondary">
                Shared authentication, notifications, and analytics platforms powering every Lucarc
                application.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface shadow-sm">
              <Rocket className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold text-text mb-2">Long-Term Value</h3>
              <p className="text-sm text-text-secondary">
                Building products designed to endure, scale, and evolve alongside growing teams.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface shadow-sm">
              <GitBranch className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-bold text-text mb-2">Uncompromising Quality</h3>
              <p className="text-sm text-text-secondary">
                Fewer products built with exceptional precision rather than generic placeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RoadmapSection />
      <CTASection />
    </main>
  );
}
