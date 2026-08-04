'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Code2,
  Shield,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ProductsShowcase() {
  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4">
            Our Ecosystem
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-text font-heading">
            Built for Businesses & Developers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-secondary">
            We focus on building products in areas where technology creates measurable impact—with
            exceptional engineering quality and intuitive UX.
          </p>
        </div>

        {/* ClearDays Featured Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                      <Layers className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-text">ClearDays</h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-primary">
                        Multi-Tenant HRMS
                      </p>
                    </div>
                  </div>
                  <Badge variant="emerald">Enterprise SaaS</Badge>
                </div>

                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                  A modern multi-tenant Human Resource Management System (HRMS) built for startups,
                  SMEs, and growing organizations. Designed for high-performance workforce
                  tracking without legacy clutter.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Employee Directory & Vault',
                    'Attendance Management',
                    'Leave & Accrual Engine',
                    'Payroll Automation',
                    'Role-Based Access Control (RBAC)',
                    'Multi-Tenant Architecture',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Strict tenant schema isolation</span>
                </div>
                <Link href="/products/cleardays">
                  <Button variant="default">
                    <span>Explore ClearDays</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ClearDays Visual Architecture Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-xl border border-border bg-surface p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                  Why ClearDays Stands Out
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Strict Tenant Isolation</p>
                    <p className="text-xs text-text-secondary">
                      Each organization data schema is isolated by tenant routing, eliminating
                      cross-tenant leaks.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Configurable RBAC</p>
                    <p className="text-xs text-text-secondary">
                      Custom HR, Manager, and Employee tiers with audit logging on every
                      transaction.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Frictionless Workflow</p>
                    <p className="text-xs text-text-secondary">
                      One-click leave approvals and automated payroll slip generation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>Status: Production</span>
                <span className="text-primary font-semibold">Ready for Startups & SMEs</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PrepForge Featured Product Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* PrepForge Visual / Features Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex order-2 lg:order-1"
          >
            <div className="w-full rounded-xl border border-border bg-surface p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                  PrepForge Toolkit
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">150+ DSA Pattern Tracker</p>
                    <p className="text-xs text-text-secondary">
                      Categorized algorithm challenges with time & space complexity analysis.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">STAR Story Builder</p>
                    <p className="text-xs text-text-secondary">
                      Structured template to draft and practice behavioral interview responses.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">System Design Blueprints</p>
                    <p className="text-xs text-text-secondary">
                      High-throughput architectural schematics for real-world scaling interviews.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>Target: Software Engineers</span>
                <span className="text-primary font-semibold">AI Assistant Coming Soon</span>
              </div>
            </div>
          </motion.div>

          {/* PrepForge Main Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex order-1 lg:order-2"
          >
            <div className="w-full rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                      <Code2 className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-text">PrepForge</h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-primary">
                        Interview Prep Platform
                      </p>
                    </div>
                  </div>
                  <Badge variant="purple">Developer Tool</Badge>
                </div>

                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                  A comprehensive interview preparation platform designed for software engineers.
                  Master algorithms, distributed system design, and behavioral interviews with
                  structured tracking and AI-guided storytelling.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'DSA Tracker',
                    'System Design Learning',
                    'Behavioral Interview Preparation',
                    'STAR Story Builder',
                    'Interview Checklists',
                    'Progress Tracking & Analytics',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>AI-powered Learning (Coming Soon)</span>
                </div>
                <Link href="/products/prepforge">
                  <Button variant="default">
                    <span>Explore PrepForge</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
