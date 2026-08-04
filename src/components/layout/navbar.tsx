'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Layers,
  Code2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/core/providers/theme-provider';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDropdowns = () => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
  };

  const companyLinks = [
    { name: 'About', href: '/company/about' },
    { name: 'Mission', href: '/company/mission' },
    { name: 'Values', href: '/company/values' },
    { name: 'Team', href: '/company/team' },
    { name: 'Careers', href: '/company/careers' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-surface/90 border-b border-border backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - Clean fit without square outer boundary */}
          <Link
            href="/"
            onClick={closeDropdowns}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={theme === 'dark' ? '/logo_dark.png' : '/logo.png'}
                alt="Lucarc Logo"
                width={38}
                height={38}
                className="object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-text group-hover:text-primary transition-colors">
                Lucarc
              </span>
              <span className="text-[10px] text-text-secondary tracking-wider uppercase font-mono">
                Software Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3">
            <Link
              href="/"
              onClick={closeDropdowns}
              className={cn(
                'px-3 py-2 rounded-lg text-sm transition-colors',
                pathname === '/'
                  ? 'text-primary font-semibold'
                  : 'text-text-secondary hover:text-text'
              )}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer',
                  pathname?.startsWith('/products')
                    ? 'text-primary font-semibold'
                    : 'text-text-secondary hover:text-text'
                )}
              >
                Products
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    productsOpen && 'rotate-180 text-primary'
                  )}
                />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-1 w-72 rounded-2xl border border-border bg-surface p-3 shadow-md"
                  >
                    <div className="flex flex-col gap-1">
                      <Link
                        href="/products/cleardays"
                        onClick={closeDropdowns}
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-background transition-colors group"
                      >
                        <div className="mt-0.5 rounded-lg bg-primary/10 p-2 border border-primary/20 group-hover:border-primary/40 transition-colors">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                            ClearDays
                          </p>
                          <p className="text-xs text-text-secondary">
                            Modern Multi-Tenant HRMS for Startups
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/products/prepforge"
                        onClick={closeDropdowns}
                        className="flex items-start gap-3 rounded-xl p-3 hover:bg-background transition-colors group"
                      >
                        <div className="mt-0.5 rounded-lg bg-primary/10 p-2 border border-primary/20 group-hover:border-primary/40 transition-colors">
                          <Code2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                            PrepForge
                          </p>
                          <p className="text-xs text-text-secondary">
                            Interview Prep Platform for Engineers
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Straight Company Links */}
            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDropdowns}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm transition-colors',
                  pathname === item.href
                    ? 'text-primary font-semibold'
                    : 'text-text-secondary hover:text-text'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-text hover:border-border transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-blue-400" />
              )}
            </button>

            <Link href="/company/careers#contact">
              <Button variant="default" size="sm" className="font-semibold shadow-sm">
                Work With Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-text"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-blue-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-border bg-surface text-text-secondary hover:text-text"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-surface px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeDropdowns}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-text hover:bg-background"
              >
                Home
              </Link>

              <div className="px-4 py-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Products
              </div>
              <Link
                href="/products/cleardays"
                onClick={closeDropdowns}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-text hover:bg-background"
              >
                <Layers className="h-4 w-4 text-primary" />
                ClearDays
              </Link>
              <Link
                href="/products/prepforge"
                onClick={closeDropdowns}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-text hover:bg-background"
              >
                <Code2 className="h-4 w-4 text-primary" />
                PrepForge
              </Link>

              <div className="px-4 py-1 text-xs font-semibold text-text-secondary uppercase tracking-wider mt-2">
                Company
              </div>
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeDropdowns}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-text hover:bg-background"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-border mt-2">
                <Link href="/company/careers#contact" onClick={closeDropdowns}>
                  <Button className="w-full justify-center">Work With Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
