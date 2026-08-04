'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Minimize2, Target, ShieldCheck, BookOpen } from 'lucide-react';
import { engineeringPrinciples } from '@/content/company';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-6 w-6 text-primary" />,
  Minimize2: <Minimize2 className="h-6 w-6 text-primary" />,
  Target: <Target className="h-6 w-6 text-primary" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-primary" />,
  BookOpen: <BookOpen className="h-6 w-6 text-primary" />,
};

export function PrinciplesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4">
            Engineering Principles
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            Great Software is Built on Strong Fundamentals
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            At Lucarc, our architectural standards are never compromised. We build systems that perform
            seamlessly today and scale effortlessly tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                      {iconMap[principle.iconName]}
                    </div>
                    <span className="text-xs font-mono text-text-secondary uppercase">
                      Principle 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text mb-2">{principle.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {principle.tagline && (
                  <div className="mt-6 pt-4 border-t border-border text-xs font-mono text-primary">
                    {'//'} {principle.tagline}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
