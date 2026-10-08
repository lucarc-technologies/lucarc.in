'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Layers,
  GitBranch,
  BarChart3,
  Sparkles,
  Shield,
  LucideIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cliData } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Terminal,
  Layers,
  GitBranch,
  BarChart3,
  Sparkles,
  Shield,
};

export function CliFeatures() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4">
            Powerful Scaffolding
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            Zero-Config, Production-Ready Architecture
          </h2>
          <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            Every project generated with create-lucarc-app comes pre-configured with strict TypeScript, modern linters, and clean folder structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cliData.features.map((feature, idx) => {
            const Icon = iconMap[feature.iconName || 'Terminal'] || Terminal;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between shadow-sm hover:border-primary/40 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    {feature.category && (
                      <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/5">
                        {feature.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
