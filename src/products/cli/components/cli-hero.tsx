'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Package, GitBranch, Sparkles, Layers, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cliData, cliStats } from '../data';

export function CliHero() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('npx create-lucarc-app my-app');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Badge variant="emerald">Live on NPM (v0.3.0)</Badge>
            <Badge variant="purple">Open Source Developer Tool</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text font-heading leading-tight">
            Scaffold Full-Stack Apps in Seconds with{' '}
            <span className="text-primary font-bold">create-lucarc-app</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {cliData.description}
          </p>

          {/* Interactive Terminal Quickstart Box */}
          <div className="mt-8 p-4 rounded-xl bg-surface border border-border max-w-xl shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-text overflow-x-auto">
                <span className="text-primary font-bold select-none">$</span>
                <code>npx create-lucarc-app my-app</code>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 font-mono text-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-success" />
                    <span className="text-success font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://www.npmjs.com/package/create-lucarc-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span>NPM Package Registry</span>
              </Button>
            </a>
            <a
              href="https://github.com/lucarctech/create-lucarc-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                <span>GitHub Repository</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cliStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-border bg-surface shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-text">{stat.label}</p>
              <p className="text-xs text-text-secondary mt-1">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
