'use client';

import * as React from 'react';
import { ClearDaysHero } from './components/cleardays-hero';
import { ClearDaysFeatures } from './components/cleardays-features';
import { ClearDaysArchitecture } from './components/cleardays-architecture';
import { CTASection } from '@/components/sections/cta';

export function ClearDaysPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClearDaysHero />
      <ClearDaysFeatures />
      <ClearDaysArchitecture />
      <CTASection />
    </main>
  );
}
