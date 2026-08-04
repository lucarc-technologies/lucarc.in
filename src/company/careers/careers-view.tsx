'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Globe, GitPullRequest, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { careerCulture, openPositions, partnershipCallout } from '@/content/careers';
import { connectLinks } from '@/content/company';

const perkIcons: Record<string, React.ReactNode> = {
  Award: <Award className="h-6 w-6 text-primary" />,
  Terminal: <Terminal className="h-6 w-6 text-primary" />,
  Globe: <Globe className="h-6 w-6 text-primary" />,
  GitPullRequest: <GitPullRequest className="h-6 w-6 text-primary" />,
};

export function CareersView() {
  return (
    <main className="min-h-screen bg-background pt-12">
      {/* Careers Banner */}
      <section className="relative overflow-hidden pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-4">
              Careers & Culture
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text font-heading leading-tight">
              {careerCulture.headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
              {careerCulture.description}
            </p>
          </div>

          {/* Perks Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerCulture.perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="p-3 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      {perkIcons[perk.iconName]}
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">{perk.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{perk.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="purple" className="mb-4">
              Open Positions
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
              Join the Engineering Team
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              We are selective about hiring and prioritize clean architecture, automated testing,
              and product intuition.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((pos) => (
              <div
                key={pos.id}
                className="p-8 rounded-xl border border-border bg-surface hover:border-primary/40 transition-colors relative overflow-hidden shadow-sm"
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-primary tracking-wider">
                      {pos.department} {'//'} {pos.location}
                    </span>
                    <h3 className="text-2xl font-bold text-text mt-1">{pos.title}</h3>
                  </div>
                  <Badge variant="default">{pos.type}</Badge>
                </div>

                <p className="text-text-secondary text-base leading-relaxed mb-6">{pos.description}</p>

                <div className="space-y-2 mb-8">
                  <p className="text-xs font-semibold uppercase text-text-secondary">Key Requirements</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pos.requirements.map((req) => (
                      <div key={req} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs text-text-secondary font-mono">
                    Apply with resume & GitHub profile
                  </span>
                  <a
                    href={`mailto:${connectLinks.email}?subject=Application:%20${encodeURIComponent(pos.title)}`}
                  >
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Apply Now</span>
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us Partnership Block */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-surface p-8 sm:p-14 text-center relative overflow-hidden shadow-sm">
            <Badge variant="default" className="mb-6">
              Collaborate With Us
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading mb-6">
              {partnershipCallout.title}
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {partnershipCallout.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`mailto:${partnershipCallout.email}?subject=Partnership%20Inquiry%20with%20Lucarc`}>
                <Button size="lg" className="w-full sm:w-auto font-bold">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>{partnershipCallout.ctaText}</span>
                </Button>
              </a>
              <a href={connectLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border text-xs font-mono text-text-secondary">
              {'//'} Email directly at <span className="text-primary">{partnershipCallout.email}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
