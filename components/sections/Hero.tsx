import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-linear-to-br from-indigo-600 via-blue-600 to-cyan-500 overflow-hidden dark:from-indigo-950 dark:via-gray-900 dark:to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 dark:opacity-5 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30 animate-fade-in">
            New Collection 2026
        </span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-tight drop-shadow-xl">
          ELEVATE YOUR <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-200 to-yellow-400 drop-shadow-none">LIFESTYLE</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-50 font-medium leading-relaxed drop-shadow-md">
          Discover a curated collection of premium products designed to inspire and solve your everyday needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/items" className="bg-white text-indigo-700 hover:bg-gray-100 hover:scale-105 active:scale-95 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-indigo-900/20 flex items-center group">
            Shop Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/items" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white px-10 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
            View Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
