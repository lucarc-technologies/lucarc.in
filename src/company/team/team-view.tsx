'use client';

import * as React from 'react';
import { Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { openSourceCommitment, connectLinks } from '@/content/company';
import { CTASection } from '@/components/sections/cta';

export function TeamView() {
  return (
    <main className="min-h-screen bg-background pt-12">
      <section className="relative overflow-hidden pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="emerald" className="mb-4">
              Team & Open Source
            </Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text font-heading leading-snug">
              Giving Back to the <span className="text-primary font-bold">Developer Community</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
              We operate as a high-ownership engineering collective. Whenever possible, we
              open-source reusable libraries, utilities, templates, and tools that help other
              developers build better software.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-border bg-surface relative overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-text">Open Source First</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {openSourceCommitment.description}
                </p>
              </div>
              <div>
                <a href={openSourceCommitment.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    <span>Visit Lucarc on GitHub</span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-xl border border-border bg-surface relative overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-text">Engineering Leadership</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Connect with our team to discuss multi-tenant architecture, developer tools, or
                  collaboration opportunities.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a href={connectLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button size="sm">
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                  </Button>
                </a>
                <a href={`mailto:${connectLinks.email}`}>
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact Team</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
