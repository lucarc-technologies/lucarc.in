'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Check, Copy, Layers, Database, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function CliInteractive() {
  const [activeTab, setActiveTab] = React.useState<'wizard' | 'flags' | 'stacks'>('wizard');
  const [copiedCmd, setCopiedCmd] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCmd(text);
      setTimeout(() => setCopiedCmd(null), 2000);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-4">
            Interactive Experience
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            Built for Developer Flow
          </h2>
          <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            Run interactively with beautiful prompts or automate your setup using command-line flags.
          </p>

          <div className="mt-8 inline-flex p-1 rounded-xl border border-border bg-surface">
            <button
              onClick={() => setActiveTab('wizard')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'wizard' ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-text'
              }`}
            >
              Interactive Wizard
            </button>
            <button
              onClick={() => setActiveTab('flags')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'flags' ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-text'
              }`}
            >
              CLI Flags & CI/CD
            </button>
            <button
              onClick={() => setActiveTab('stacks')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'stacks' ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-text'
              }`}
            >
              Supported Tech Matrix
            </button>
          </div>
        </div>

        {/* Tab 1: Terminal Simulation */}
        {activeTab === 'wizard' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto rounded-xl border border-border bg-[#0E0E11] text-neutral-200 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm"
          >
            <div className="px-4 py-3 bg-[#18181D] border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs text-neutral-400">bash - npx create-lucarc-app</span>
              </div>
              <button
                onClick={() => copyToClipboard('npx create-lucarc-app my-app')}
                className="text-neutral-400 hover:text-white flex items-center gap-1 text-xs"
              >
                {copiedCmd === 'npx create-lucarc-app my-app' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-6 space-y-3 leading-relaxed text-neutral-300">
              <p className="text-orange-400 font-bold">
                ⚡ create-lucarc-app v0.3.0
              </p>
              <p className="text-neutral-400">
                ? What is your project named? <span className="text-green-400 font-semibold">my-awesome-app</span>
              </p>
              <p className="text-neutral-400">
                ? Select Frontend framework: <span className="text-cyan-400">Next.js 15 (App Router + React 19)</span>
              </p>
              <p className="text-neutral-400">
                ? Select Backend stack: <span className="text-cyan-400">Node.js (Fastify + TypeScript)</span>
              </p>
              <p className="text-neutral-400">
                ? Choose Database & ORM: <span className="text-cyan-400">PostgreSQL + Drizzle ORM</span>
              </p>
              <p className="text-neutral-400">
                ? Choose UI & Styling system: <span className="text-cyan-400">Tailwind CSS v4 + shadcn/ui</span>
              </p>
              <p className="text-neutral-400">
                ? Select DevOps features: <span className="text-cyan-400">[Docker Compose, GitHub Actions]</span>
              </p>
              <div className="pt-2">
                <p className="text-green-400 font-bold">✔ my-awesome-app scaffolded successfully!</p>
                <div className="mt-3 pl-3 border-l-2 border-orange-500/60 text-neutral-400 space-y-1">
                  <p>Next steps:</p>
                  <p className="text-cyan-300">1. cd my-awesome-app</p>
                  <p className="text-cyan-300">2. npm install</p>
                  <p className="text-cyan-300">3. npm run dev</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: CLI Flags */}
        {activeTab === 'flags' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto rounded-xl border border-border bg-surface p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-text mb-4">Command-Line Flags & Non-Interactive Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-primary font-bold mb-1">-y, --yes / --default</p>
                <p className="text-text-secondary font-sans">Scaffold with default recommended stack instantly without interactive prompts.</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-primary font-bold mb-1">-f, --frontend &lt;framework&gt;</p>
                <p className="text-text-secondary font-sans">Pass frontend directly: <code>nextjs</code>, <code>react-vite</code>, <code>angular</code>.</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-primary font-bold mb-1">-b, --backend &lt;stack&gt;</p>
                <p className="text-text-secondary font-sans">Pass backend directly: <code>fastify</code>, <code>express</code>, <code>spring-boot</code>, <code>fastapi</code>.</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-primary font-bold mb-1">-d, --database &lt;db&gt;</p>
                <p className="text-text-secondary font-sans">Pass database directly: <code>postgres-drizzle</code>, <code>postgres-prisma</code>, <code>mongodb</code>.</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-primary font-bold mb-1">--docker, --github-actions</p>
                <p className="text-text-secondary font-sans">Automatically include multi-container Docker Compose and CI/CD pipelines.</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-primary font-bold mb-1">--pm &lt;packageManager&gt;</p>
                <p className="text-text-secondary font-sans">Force package manager: <code>npm</code>, <code>pnpm</code>, <code>yarn</code>, <code>bun</code>.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Tech Stacks Matrix */}
        {activeTab === 'stacks' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-xl border border-border bg-surface shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-text">Frontend Layer</h4>
              </div>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Next.js 15 App Router</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> React 19 (Vite + TS)</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Angular 19 Standalone</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Tailwind CSS v4 & shadcn</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-text">Backend Layer</h4>
              </div>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Fastify + TypeScript</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Express + TypeScript</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Java 21 Spring Boot 3.3</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Python 3.12 FastAPI</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-text">Database & DevOps</h4>
              </div>
              <ul className="space-y-2 text-xs text-text-secondary">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> PostgreSQL + Drizzle ORM</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> PostgreSQL + Prisma</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> MongoDB + Mongoose</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Docker Compose & GitHub CI</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
