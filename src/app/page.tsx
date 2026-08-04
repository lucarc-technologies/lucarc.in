import {
  HeroSection,
  ProductsShowcase,
  PrinciplesSection,
  RoadmapSection,
  CTASection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProductsShowcase />
      <PrinciplesSection />
      <RoadmapSection />
      <CTASection />
    </main>
  );
}
