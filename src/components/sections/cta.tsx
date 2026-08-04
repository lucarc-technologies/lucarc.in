'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Heart, Building2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/brand-icons';
import { Button } from '@/components/ui/button';
import { openSourceCommitment, connectLinks } from '@/content/company';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work With Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-xl border border-border bg-surface p-8 sm:p-12 relative overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-variant/30 text-text-secondary text-xs font-medium mb-6">
                <Building2 className="h-3.5 w-3.5" />
                <span>Partnership & Collaboration</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-text font-heading mb-3">
                Work With Us
              </h2>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Alongside building our own products, we selectively collaborate with startups and
                businesses to develop scalable software solutions. If you&apos;re looking for a
                technical partner who values clean architecture, maintainability, and product
                thinking—we&apos;d love to connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href={`mailto:${connectLinks.email}`}>
                <Button size="lg" className="w-full sm:w-auto font-medium">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Start a Conversation</span>
                </Button>
              </a>
              <Link href="/company/careers">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium">
                  <span>View Career Openings</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Open Source Commitment Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-xl border border-border bg-surface p-8 sm:p-10 flex flex-col justify-between relative shadow-sm"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-variant/30 text-text-secondary text-xs font-medium mb-6">
                <Heart className="h-3.5 w-3.5" />
                <span>Community First</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-text font-heading mb-4">
                {openSourceCommitment.title}
              </h3>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                {openSourceCommitment.description}
              </p>

              <div className="p-4 rounded-xl border border-border bg-background font-mono text-xs text-text-secondary space-y-1 mb-8">
                <p className="text-text-secondary/70">{'// We open-source tools & libraries'}</p>
                <p className="text-primary">$ npx @lucarc/cli --version</p>
              </div>
            </div>

            <div>
              <a
                href={openSourceCommitment.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-primary transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Visit Lucarc on GitHub</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
