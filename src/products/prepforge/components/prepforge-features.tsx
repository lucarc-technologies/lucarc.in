'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  MessageSquare,
  Star,
  CheckSquare,
  TrendingUp,
  Sparkles,
  Layers,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { prepforgeData } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-6 w-6 text-primary" />,
  Cpu: <Cpu className="h-6 w-6 text-primary" />,
  MessageSquare: <MessageSquare className="h-6 w-6 text-primary" />,
  Star: <Star className="h-6 w-6 text-primary" />,
  CheckSquare: <CheckSquare className="h-6 w-6 text-primary" />,
  TrendingUp: <TrendingUp className="h-6 w-6 text-primary" />,
  Sparkles: <Sparkles className="h-6 w-6 text-primary" />,
};

export function PrepForgeFeatures() {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">
            Engineer Toolkit
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text font-heading">
            Everything Needed to Clear Big Tech Interviews
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            PrepForge bridges the gap between raw coding practice and real-world system architecture
            interviews with interactive storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepforgeData.features.map((feature, idx) => (
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
                      {feature.iconName ? iconMap[feature.iconName] : <Layers className="h-6 w-6 text-primary" />}
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
