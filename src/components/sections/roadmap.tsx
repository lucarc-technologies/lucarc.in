'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { productRoadmap } from '@/content/company';
import { Badge } from '@/components/ui/badge';

export function RoadmapSection() {
  const currentItems = productRoadmap.filter((item) => item.status === 'Current');
  const futureItems = productRoadmap.filter((item) => item.status === 'Future');

  return (
    <section id="roadmap" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4">
            Product Roadmap
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            An Interconnected Platform of Products
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            We are not building isolated applications. We are building an ecosystem connected by
            great engineering, thoughtful design, and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Current Products */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-text uppercase tracking-wider">
                Current Products
              </h3>
            </div>

            <div className="space-y-4">
              {currentItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-xl border border-primary/30 bg-primary/5 shadow-sm relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-text">{item.name}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      Live / Production
                    </span>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-3">
                    {item.category}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Roadmap */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-text uppercase tracking-wider">
                Future Roadmap & Platform Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-xl border border-border bg-surface shadow-sm hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-text">{item.name}</h4>
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-primary mb-2">
                    {item.category}
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
