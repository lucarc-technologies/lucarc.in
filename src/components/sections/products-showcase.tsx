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
            Our Products
          </Badge>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-text font-heading">
            Tools that make real work easier
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-secondary">
            We build software that removes friction—so your teams can focus on what matters, not on
            juggling tools or chasing spreadsheets.
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
                        HR, Attendance & Payroll
                      </p>
                    </div>
                  </div>
                  <Badge variant="emerald">Enterprise SaaS</Badge>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  Replace your messy HR spreadsheets with a clear, organized platform. From
                  onboarding new hires to running payroll—ClearDays handles the routine so your
                  managers can focus on their people.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Employee directory & digital document vault',
                    'One-click attendance tracking',
                    'Automated leave balances & approvals',
                    'Salary slips generated in seconds',
                    'Custom roles for HR, managers & staff',
                    'Manage multiple offices from one place',
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
                  <span>Enterprise-grade security & compliance</span>
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
                  Why teams love ClearDays
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">No more chasing approvals</p>
                    <p className="text-xs text-text-secondary">
                      Leave requests and attendance corrections are approved in one tap—no email threads needed.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Payroll without panic</p>
                    <p className="text-xs text-text-secondary">
                      Salary slips, deduction calculations, and compliance exports—done automatically every month.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">One dashboard for your whole team</p>
                    <p className="text-xs text-text-secondary">
                      Manage multiple offices, remote staff, and departments from a single, clean workspace.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>Status: In Production</span>
                <span className="text-primary font-semibold">Best for Startups & SMEs</span>
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
                  Why engineers choose PrepForge
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Stop memorizing. Start understanding.</p>
                    <p className="text-xs text-text-secondary">
                      Learn the 22 patterns that repeat across 90% of interview problems at top tech companies.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Walk into behaviorals with confidence</p>
                    <p className="text-xs text-text-secondary">
                      Structure your real career experiences into crisp, memorable STAR stories that stand out.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <p className="text-sm font-bold text-text mb-1">Design systems, not just code</p>
                    <p className="text-xs text-text-secondary">
                      Clear, visual roadmaps for designing scalable architectures from first principles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                <span>For software engineers</span>
                <span className="text-primary font-semibold">AI Coach Coming Soon</span>
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
                        Tech Interview Preparation
                      </p>
                    </div>
                  </div>
                  <Badge variant="purple">Developer Tool</Badge>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  Stop grinding random LeetCode questions. PrepForge gives you a structured,
                  pattern-based roadmap to crack algorithms, system design, and behavioral rounds
                  at FAANG and top-tier companies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    '22 high-yield DSA patterns',
                    'Visual system design roadmaps',
                    'Behavioral interview playbook',
                    'STAR story builder & templates',
                    '4, 8 & 12-week prep timelines',
                    'Interview readiness score',
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
                  <span>AI Mock Coach — Coming Soon</span>
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
