import {
  HeroSection,
  ProductsShowcase,
  PrinciplesSection,
  RoadmapSection,
  EarlyAccessSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProductsShowcase />
      <PrinciplesSection />
      <RoadmapSection />
      <EarlyAccessSection />
      <CTASection />
    </main>
  );
}
