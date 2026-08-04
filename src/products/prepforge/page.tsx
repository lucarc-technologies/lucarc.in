'use client';

import * as React from 'react';
import { PrepForgeHero } from './components/prepforge-hero';
import { PrepForgeFeatures } from './components/prepforge-features';
import { PrepForgeInteractive } from './components/prepforge-interactive';
import { CTASection } from '@/components/sections/cta';

export function PrepForgePage() {
  return (
    <main className="min-h-screen bg-background">
      <PrepForgeHero />
      <PrepForgeFeatures />
      <PrepForgeInteractive />
      <CTASection />
    </main>
  );
}
