'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Clock,
  Calendar,
  CreditCard,
  Shield,
  Layers,
  Building,
  BarChart3,
  GitBranch,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cleardaysData } from '../data';

const featureIcons: Record<string, React.ReactNode> = {
  Users: <Users className="h-6 w-6 text-primary" />,
  Clock: <Clock className="h-6 w-6 text-primary" />,
  Calendar: <Calendar className="h-6 w-6 text-primary" />,
  CreditCard: <CreditCard className="h-6 w-6 text-primary" />,
  Shield: <Shield className="h-6 w-6 text-primary" />,
  Layers: <Layers className="h-6 w-6 text-primary" />,
  Building: <Building className="h-6 w-6 text-primary" />,
  BarChart3: <BarChart3 className="h-6 w-6 text-primary" />,
  GitBranch: <GitBranch className="h-6 w-6 text-primary" />,
};

export function ClearDaysFeatures() {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-4">
            Core HRMS Capabilities
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            Comprehensive Multi-Tenant Suite
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Every feature in ClearDays is engineered to simplify organizational complexity without
            sacrificing security or customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cleardaysData.features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                      {feature.iconName ? featureIcons[feature.iconName] : <Layers className="h-6 w-6 text-primary" />}
                    </div>
                    {feature.category && (
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                        {feature.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
