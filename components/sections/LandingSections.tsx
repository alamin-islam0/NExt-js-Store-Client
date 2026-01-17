import { ShieldCheck, Truck, Clock, Star, Zap, Lock } from 'lucide-react';
import Image from 'next/image';

export function Features() {
  const features = [
    { icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />, title: "Secure Payments", desc: "Your security is our priority. 256-bit encryption." },
    { icon: <Truck className="w-10 h-10 text-blue-500" />, title: "Free Shipping", desc: "On all orders over $50. Global delivery available." },
    { icon: <Clock className="w-10 h-10 text-purple-500" />, title: "24/7 Support", desc: "Our team is here to help you anytime, day or night." },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-center border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trending() {
  return (
    <section className="py-20 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center text-gray-900 dark:text-white">
          <Zap className="w-8 h-8 text-amber-500 mr-2" /> Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100 dark:bg-gray-800">
                    <img 
                        src={`https://images.unsplash.com/photo-${item === 1 ? '1505740420928-5e560c06d30e' : item === 2 ? '1523275335684-37898b6baf30' : item === 3 ? '1526170375885-4d25d9e3129c' : '1485955900006-10f4d324d411'}?w=500&q=80`} 
                        alt="Product" 
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">Top Seller</p>
                      <button className="text-sm text-amber-300 mt-1">View Details</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-indigo-900 dark:bg-indigo-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alex R.", text: "The quality implies a much higher price point. I'm thoroughly impressed." },
            { name: "Sarah M.", text: "Shipping was incredibly fast and the packaging was eco-friendly." },
            { name: "James T.", text: "Customer service resolved my issue in minutes. Highly recommended!" }
          ].map((t, i) => (
            <div key={i} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="italic mb-6 text-indigo-100">"{t.text}"</p>
              <p className="font-bold text-white">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center gap-12 container mx-auto px-4 dark:bg-gray-950 transition-colors duration-300">
        <div className="w-full md:w-1/2 relative h-96 rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Team" className="object-cover w-full h-full" />
        </div>
        <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Crafting Excellence Since 2020</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                We started with a simple mission: to bring high-quality, aesthetically pleasing products to people who appreciate design. 
                Our team of passionate designers and engineers work tirelessly to curate items that stand the test of time.
            </p>
            <div className="flex gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Happy Customers</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Products</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export function Newsletter() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Stay Updated</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">Join Our Exclusive Community</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Get access to secret sales, new product drops, and design tips straight to your inbox.</p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input type="email" placeholder="Enter your email" className="px-6 py-4 w-full sm:w-96 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                    <button type="submit" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export function FAQ() {
    return (
        <section className="py-20 dark:bg-gray-950 transition-colors duration-300">
             <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        { q: "What is your return policy?", a: "We offer a 30-day no-questions-asked return policy for all unused items." },
                        { q: "Do you ship internationally?", a: "Yes, we ship to over 100 countries worldwide." },
                        { q: "Is my payment information secure?", a: "Absolutely. We use Stripe for payment processing which is industry standard." }
                    ].map((item, i) => (
                        <details key={i} className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden open:shadow-lg dark:open:shadow-gray-900/50 transition-all">
                            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 dark:text-gray-100">
                                {item.q}
                                <span className="transition group-open:-rotate-180 text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
