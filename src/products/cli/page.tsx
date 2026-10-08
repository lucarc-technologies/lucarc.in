'use client';

import * as React from 'react';
import { CliHero } from './components/cli-hero';
import { CliFeatures } from './components/cli-features';
import { CliInteractive } from './components/cli-interactive';
import { CTASection } from '@/components/sections/cta';

export function CliPage() {
  return (
    <main className="min-h-screen bg-background">
      <CliHero />
      <CliFeatures />
      <CliInteractive />
      <CTASection />
    </main>
  );
}
