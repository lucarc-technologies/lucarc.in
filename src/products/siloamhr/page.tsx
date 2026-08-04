'use client';

import * as React from 'react';
import { SiloamHRHero } from './components/siloamhr-hero';
import { SiloamHRFeatures } from './components/siloamhr-features';
import { SiloamHRArchitecture } from './components/siloamhr-architecture';
import { CTASection } from '@/components/sections/cta';

export function SiloamHRPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiloamHRHero />
      <SiloamHRFeatures />
      <SiloamHRArchitecture />
      <CTASection />
    </main>
  );
}
