import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import Image from 'next/image';

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col h-full border border-gray-100 dark:border-gray-700">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 backdrop-blur-[2px]">
             <Link href={`/items/${item.id}`} className="p-3 bg-white text-gray-900 rounded-full hover:bg-indigo-50 transition-colors transform hover:-translate-y-1">
                <Eye className="w-5 h-5" />
             </Link>
             <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors transform hover:-translate-y-1 shadow-lg shadow-indigo-600/30">
                <ShoppingCart className="w-5 h-5" />
             </button>
        </div>
        <div className="absolute top-4 right-4">
             <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                In Stock
             </span>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Link href={`/items/${item.id}`}>{item.name}</Link>
            </h3>
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 font-mono">${item.price}</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2 grow font-light leading-relaxed">{item.description}</p>
        <Link href={`/items/${item.id}`} className="w-full py-3.5 rounded-2xl bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-indigo-600 transition-all text-center group-hover:shadow-md">
            View Details
        </Link>
      </div>
    </div>
  );
}
