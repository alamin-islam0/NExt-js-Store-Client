import Link from 'next/link';
import { ArrowLeft, Check, Shield, Truck } from 'lucide-react';
import { notFound } from 'next/navigation';

async function getItem(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ItemDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link href="/items" className="inline-flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collections
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square relative shadow-lg group">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            
            <div className="flex flex-col h-full">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">Premium Quality</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{item.name}</h1>
                <p className="text-3xl font-light text-gray-900 dark:text-gray-200 mb-8 font-mono">${item.price}</p>
                
                <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-10">
                    <p>{item.description}</p>
                </div>
                
                <div className="border-t border-b border-gray-100 dark:border-gray-800 py-6 mb-8 space-y-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span>In Stock and ready to ship</span>
                    </div>
                     <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Truck className="w-5 h-5 text-blue-500 mr-3" />
                        <span>Free delivery on orders over $50</span>
                    </div>
                     <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Shield className="w-5 h-5 text-purple-500 mr-3" />
                        <span>2 year extended warranty included</span>
                    </div>
                </div>

                <div className="mt-auto flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transform hover:scale-105 transition-all shadow-xl shadow-blue-200 dark:shadow-blue-900/20">
                        Add to Cart
                    </button>
                    <button className="px-6 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full hover:border-gray-900 dark:hover:border-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
