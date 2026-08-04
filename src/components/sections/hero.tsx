'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Shield, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-32 md:pb-40">
      {/* Subtle Gradient Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface/40 text-xs sm:text-sm text-text-secondary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Building today. Empowering tomorrow.
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text font-heading max-w-4xl mx-auto leading-tight"
        >
          Building software that helps{' '}
          <span className="text-primary font-semibold">businesses work smarter</span> and{' '}
          <span className="text-primary font-semibold">developers grow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Lucarc is a software product company focused on building reliable, scalable, and
          user-centric SaaS platforms and engineering tools designed to solve real-world problems.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link href="#products" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto font-semibold group">
              <span>Explore Our Products</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/company/careers#contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium">
              Partner With Us
            </Button>
          </Link>
        </motion.div>

        {/* Minimal Features Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-border max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-left"
        >
          <div className="flex items-start gap-3">
            <Layers className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-text">Multi-Tenant SaaS</p>
              <p className="text-xs text-text-secondary mt-1">Enterprise HRMS & Operational tools</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Terminal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-text">Developer Tools</p>
              <p className="text-xs text-text-secondary mt-1">Interview prep & engineering platforms</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-text">Production Quality</p>
              <p className="text-xs text-text-secondary mt-1">Strict isolation, RBAC & compliance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
