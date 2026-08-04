'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Database, Lock, ShieldCheck, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ClearDaysArchitecture() {
  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="emerald">Multi-Tenant Engineering</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
              Strict Data Isolation at Enterprise Scale
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              In SaaS HRMS systems, security is paramount. ClearDays is engineered with true
              multi-tenant isolation, ensuring that one customer&apos;s data schema can never be
              accessed or breached by another tenant.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary mt-0.5">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text">Isolated Tenant Schemas</h4>
                  <p className="text-sm text-text-secondary">
                    PostgreSQL schemas partitioned per organization with automated migrations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary mt-0.5">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text">Configurable RBAC & Audit Trails</h4>
                  <p className="text-sm text-text-secondary">
                    Granular permissions for HR admins, department managers, and employees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary mt-0.5">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text">Cloud-Native Reliability</h4>
                  <p className="text-sm text-text-secondary">
                    Zero-downtime deployment pipelines with real-time webhook integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-border bg-background shadow-sm space-y-6 font-mono text-sm"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border text-xs text-text-secondary">
                <span>TENANT_ROUTING_SCHEMATIC</span>
                <span className="text-primary">ENCRYPTED // TLS 1.3</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between">
                  <span className="text-text">Request: https://cleardays.app/api/...</span>
                  <span className="text-primary text-xs">JWT Tenant ID</span>
                </div>

                <div className="text-center text-text-secondary">↓ [Tenant Isolation Router] ↓</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface border border-border text-center">
                    <p className="text-xs text-primary font-bold">Tenant A Schema</p>
                    <p className="text-[11px] text-text-secondary mt-1">Postgres // org_acme</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface border border-border text-center">
                    <p className="text-xs text-primary font-bold">Tenant B Schema</p>
                    <p className="text-[11px] text-text-secondary mt-1">Postgres // org_startup</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border text-xs text-text-secondary flex items-center justify-between">
                <span>Security Audit</span>
                <span className="text-success flex items-center gap-1 font-bold">
                  <ShieldCheck className="h-4 w-4" />
                  PASSED
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
