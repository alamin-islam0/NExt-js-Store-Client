import Hero from '@/components/sections/Hero';
import { Features, Trending, Testimonials, About, Newsletter, FAQ } from '@/components/sections/LandingSections';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Features />
      <Trending />
      <About />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </div>
  );
}
