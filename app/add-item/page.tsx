'use client';

import { useActionState } from 'react';
import { addItemAction } from './actions';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Plus, Image as ImageIcon, DollarSign, FileText, Type } from 'lucide-react';
import { useRouter } from 'next/navigation';

const initialState = {
  success: false,
  message: '',
};

export default function AddItemPage() {
  const [state, formAction, isPending] = useActionState(addItemAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      state.message = ''; // prevent infinite toast on re-renders if logic flawed (though strict mode might trigger twice)
      // Optional: redirect
       setTimeout(() => router.push('/items'), 1500);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 px-4 flex items-center justify-center transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-3xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center space-x-4 mb-10">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                <Plus className="w-8 h-8" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Item</h1>
                <p className="text-gray-500 dark:text-gray-400">Create a new product listing in your catalog</p>
            </div>
        </div>

        <form action={formAction} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Product Name</label>
                        <div className="relative">
                            <Type className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input type="text" name="name" required placeholder="e.g. Ergonomic Chair" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Price ($)</label>
                         <div className="relative">
                            <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input type="number" step="0.01" name="price" required placeholder="0.00" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Image URL</label>
                         <div className="relative">
                            <ImageIcon className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input type="url" name="image" required placeholder="https://..." defaultValue="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                        </div>
                        <p className="text-xs text-gray-400 mt-2 ml-1">Use a valid image URL for preview.</p>
                    </div>
                </div>

                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Description</label>
                     <div className="relative h-full">
                        <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea name="description" required placeholder="Describe the product..." className="w-full h-full min-h-[200px] pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/50 outline-none transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"></textarea>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button type="submit" disabled={isPending} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all transform active:scale-95 disabled:opacity-70 shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center">
                    {isPending ? (
                        <>Processing...</>
                    ) : (
                        <>Create Product <Plus className="ml-2 w-5 h-5" /></>
                    )}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
