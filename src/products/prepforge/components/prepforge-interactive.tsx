'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs } from '@/components/ui/tabs';

const starSteps = [
  {
    id: 'situation',
    label: '1. Situation',
    title: 'Set the Context',
    description: 'Describe a challenging real-world engineering problem or organizational bottleneck.',
    example: 'During Black Friday, our payment processing microservice experienced a 300% spike in database deadlocks, causing checkout failures.',
  },
  {
    id: 'task',
    label: '2. Task',
    title: 'Define Ownership',
    description: 'Explain your explicit responsibility and the target metric to resolve.',
    example: 'As lead backend engineer, I was responsible for reducing database lock contention and restoring 99.99% checkout availability within 2 hours.',
  },
  {
    id: 'action',
    label: '3. Action',
    title: 'Architectural Solution',
    description: 'Detail the technical decisions, trade-offs, and algorithms you implemented.',
    example: 'I partitioned the transaction ledger table, introduced Redis distributed locks for idempotency, and decoupled non-critical analytics to asynchronous queues.',
  },
  {
    id: 'result',
    label: '4. Result',
    title: 'Measurable Impact',
    description: 'Quantify the outcome with latency improvements, cost savings, or uptime metrics.',
    example: 'Deadlock errors dropped to 0%, checkout p99 latency improved from 1800ms to 240ms, and the architecture handled 10x traffic without degradation.',
  },
];

export function PrepForgeInteractive() {
  const [activeStep, setActiveStep] = React.useState('situation');
  const stepData = starSteps.find((s) => s.id === activeStep) || starSteps[0];

  return (
    <section id="interactive-star" className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">
            STAR Story Builder
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            Craft Impactful Behavioral Stories
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            High-level engineering interviews require crisp communication. Try our interactive STAR
            template designed to structure your career milestones.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <Tabs
            tabs={starSteps.map((s) => ({ id: s.id, label: s.label }))}
            activeTab={activeStep}
            onChange={setActiveStep}
          />
        </div>

        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto rounded-xl border border-border bg-background p-8 sm:p-10 shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text">{stepData.title}</h3>
                <p className="text-xs text-text-secondary">{stepData.description}</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-primary">
              STEP_{stepData.id.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 p-6 rounded-[16px] border border-border bg-surface font-mono text-sm leading-relaxed text-text">
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4 text-xs text-text-secondary">
              <span className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                STAR_TEMPLATE_PREVIEW.md
              </span>
              <span className="text-success font-bold">{'//'} ENGINEER_STORY_01</span>
            </div>
            <p className="text-text-secondary">{stepData.example}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI Evaluator checks clarity, metrics, and leadership signals</span>
            </div>
            <span className="text-primary font-semibold">Included in PrepForge</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
