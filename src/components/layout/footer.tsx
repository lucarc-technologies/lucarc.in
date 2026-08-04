'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons';
import { useTheme } from '@/core/providers/theme-provider';
import { connectLinks, openSourceCommitment } from '@/content/company';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border bg-surface text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                <Image
                  src={theme === 'dark' ? '/logo_dark.png' : '/logo.png'}
                  alt="Lucarc Logo"
                  width={38}
                  height={38}
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-text group-hover:text-primary transition-colors">
                Lucarc
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-text-secondary">
              Building software that helps businesses work smarter and developers grow. Modern SaaS
              products, developer tools, and AI-powered applications.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={connectLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lucarc LinkedIn"
                className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-primary hover:border-primary/50 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${connectLinks.email}`}
                aria-label="Email Lucarc"
                className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={openSourceCommitment.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lucarc GitHub"
                className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-primary hover:border-primary/50 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products/cleardays"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                >
                  <span>ClearDays HRMS</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/products/prepforge"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                >
                  <span>PrepForge</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/company/mission#roadmap"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                >
                  <span>Product Roadmap</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/company/about" className="hover:text-cyan-400 transition-colors">
                  About & Principles
                </Link>
              </li>
              <li>
                <Link href="/company/mission" className="hover:text-cyan-400 transition-colors">
                  Vision & Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/company/values" className="hover:text-cyan-400 transition-colors">
                  Engineering Values
                </Link>
              </li>
              <li>
                <Link href="/company/team" className="hover:text-cyan-400 transition-colors">
                  Team & Open Source
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Partner Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Partner With Us
            </h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Looking for a technical partner who values clean architecture and product thinking?
            </p>
            <div className="pt-1">
              <Link
                href="/company/careers#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lucarc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Building today. Empowering tomorrow.</span>
            <span>Software that grows with you.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
