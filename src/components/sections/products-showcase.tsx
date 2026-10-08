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
  ExternalLink,
  Terminal,
  Cpu,
  Copy,
  Check,
  Package,
  LucideIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { productsData } from '@/content/products';

const productIcons: Record<string, LucideIcon> = {
  siloamhr: Layers,
  prepforge: Code2,
  cli: Terminal,
  interview: Cpu,
  'personal-os': Sparkles,
};

const productCategoryBadges: Record<string, { label: string; variant: 'emerald' | 'purple' | 'secondary' | 'default' }> = {
  siloamhr: { label: 'Enterprise SaaS', variant: 'emerald' },
  prepforge: { label: 'Developer Tool', variant: 'purple' },
  cli: { label: 'Live on NPM (v0.3.0)', variant: 'emerald' },
  interview: { label: 'B2B Platform', variant: 'purple' },
  'personal-os': { label: 'AI Operating System', variant: 'purple' },
};

export function ProductsShowcase() {
  const [copiedSlug, setCopiedSlug] = React.useState<string | null>(null);

  const handleCopyCommand = (command: string, slug: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(command);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2500);
    }
  };

  const currentProducts = productsData.filter((p) => p.status === 'current');
  const futureProducts = productsData.filter((p) => p.status === 'future');

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
            We build software that removes friction—from enterprise workforce automation to open-source developer tooling.
          </p>
        </div>

        {/* Current Flagship Products */}
        <div className="space-y-12 mb-20">
          {currentProducts.map((product, index) => {
            const Icon = productIcons[product.slug] || Layers;
            const badge = productCategoryBadges[product.slug] || { label: 'Product', variant: 'default' };
            const isReversed = index % 2 === 1;

            return (
              <div
                key={product.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Main Product Card */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`lg:col-span-7 flex ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="w-full rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-text">{product.name}</h3>
                            <p className="text-xs font-mono uppercase tracking-wider text-primary">
                              {product.tagline.split('—')[0]}
                            </p>
                          </div>
                        </div>
                        <Badge variant={badge.variant}>{badge.label}</Badge>
                      </div>

                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Interactive Command Box for CLI tool */}
                      {product.command && (
                        <div className="mb-6 p-3.5 rounded-xl bg-background border border-border flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-text overflow-x-auto">
                            <span className="text-primary font-bold select-none">$</span>
                            <code>{product.command} my-project</code>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyCommand(`${product.command} my-project`, product.slug)}
                            className="p-1.5 rounded-lg border border-border bg-surface hover:bg-primary/10 text-text-secondary hover:text-primary transition-colors flex items-center gap-1 text-xs shrink-0"
                            title="Copy command"
                          >
                            {copiedSlug === product.slug ? (
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
                          </button>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {product.features.slice(0, 6).map((feat) => (
                          <div key={feat.title} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feat.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-xs text-text-secondary">
                        <Shield className="h-4 w-4 text-primary" />
                        <span>Production-ready engineering</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {product.npmUrl && (
                          <a
                            href={product.npmUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="glow" size="sm">
                              <Package className="mr-1.5 h-3.5 w-3.5" />
                              <span>View on NPM</span>
                            </Button>
                          </a>
                        )}
                        {product.demoUrl && !product.npmUrl && (
                          <a
                            href={product.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="glow" size="sm">
                              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                              <span>Try Live</span>
                            </Button>
                          </a>
                        )}
                        <Link href={`/products/${product.slug}`}>
                          <Button variant="default">
                            <span>Explore {product.name}</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Highlights / Why Choose Card */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`lg:col-span-5 flex ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="w-full rounded-xl border border-border bg-surface p-8 flex flex-col justify-between shadow-sm">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
                        Why teams choose {product.name}
                      </h4>
                      <div className="space-y-4">
                        {product.highlights?.map((highlight, hIdx) => (
                          <div key={hIdx} className="p-4 rounded-xl border border-border bg-background">
                            <p className="text-sm font-bold text-text mb-1">Key Advantage #{hIdx + 1}</p>
                            <p className="text-xs text-text-secondary leading-relaxed">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-success" />
                        Live in Production
                      </span>
                      <span className="text-primary font-semibold font-mono">Active Ecosystem</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Ecosystem Additions (PersonalOS & Lucarc Interview) */}
        {futureProducts.length > 0 && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Badge variant="purple" className="mb-3">
                In Active Development
              </Badge>
              <h3 className="text-lg sm:text-xl font-semibold text-text font-heading">
                Expanding the Lucarc Ecosystem
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-secondary">
                Next-generation developer platforms and autonomous agentic operating systems built for modern workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {futureProducts.map((product, idx) => {
                const Icon = productIcons[product.slug] || Terminal;
                const badge = productCategoryBadges[product.slug] || { label: 'Upcoming', variant: 'default' };

                return (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="rounded-xl border border-border bg-surface p-8 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-text">{product.name}</h4>
                            <p className="text-xs font-mono uppercase tracking-wider text-primary">
                              {product.tagline.split('—')[0].slice(0, 45)}...
                            </p>
                          </div>
                        </div>
                        <Badge variant={badge.variant}>{badge.label}</Badge>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-2.5 mb-6">
                        {product.features.slice(0, 3).map((feat) => (
                          <div key={feat.title} className="flex items-start gap-2 text-xs text-text-secondary">
                            <Sparkles className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-text font-medium">{feat.title}</strong>: {feat.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-border flex items-center justify-between text-xs text-text-secondary">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        In Development
                      </span>
                      <span className="font-mono text-primary font-medium">Coming Soon</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
