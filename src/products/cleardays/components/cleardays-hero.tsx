'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cleardaysData, cleardaysMetrics } from '../data';

export function ClearDaysHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <Badge variant="emerald" className="px-4 py-1.5 text-xs sm:text-sm">
                <Layers className="h-3.5 w-3.5 mr-1.5 inline" />
                Enterprise HRMS SaaS
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text font-heading leading-snug"
            >
              Modern Multi-Tenant{' '}
              <span className="text-primary font-bold">
                HRMS Platform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-sm sm:text-base text-text-secondary leading-relaxed font-normal"
            >
              {cleardaysData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {cleardaysData.highlights?.map((hl) => (
                <div
                  key={hl}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-success bg-success/10 border border-success/20 px-3.5 py-1.5 rounded-full"
                >
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="mailto:rupesh.dev2002@gmail.com?subject=ClearDays%20Demo%20Request">
                <Button size="lg" className="w-full sm:w-auto font-bold">
                  <span>Schedule a Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" size="lg">
                  Explore Architecture & Modules
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Interactive Metric Preview Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-96 rounded-xl border border-border bg-surface p-6 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <span className="text-xs font-mono uppercase text-text-secondary">System Telemetry</span>
              <span className="flex items-center gap-1.5 text-xs text-success">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Multi-Tenant Ready
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cleardaysMetrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-xl bg-background border border-border">
                  <p className="text-2xl font-bold text-text">{metric.value}</p>
                  <p className="text-xs font-semibold text-text-secondary mt-1">{metric.label}</p>
                  <p className="text-[10px] text-text-secondary/70 mt-0.5">{metric.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border text-xs text-text-secondary flex items-center justify-between">
              <span>Security Tier</span>
              <span className="text-text font-mono">RBAC + Schema Isolation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
