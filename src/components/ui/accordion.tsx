'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        'border border-border rounded-xl bg-surface transition-colors overflow-hidden shadow-sm',
        isOpen ? 'border-primary/50' : 'hover:border-primary/30',
        className
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-text transition-colors cursor-pointer select-none"
      >
        <span className="text-base pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-primary"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 pt-1 text-text-secondary text-sm leading-relaxed border-t border-border">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
