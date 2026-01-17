'use client';

import { useActionState, useEffect } from 'react';
import { loginAction } from './actions';
import { LogIn } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const initialState = {
  message: '',
  success: false
};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success('Login successful!');
      router.refresh();
      router.push('/items');
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Sign in to access your account</p>
        </div>

        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              defaultValue="admin@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              defaultValue="123456"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/50 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Mock Credentials:</p>
            <p className="font-mono bg-gray-100 dark:bg-gray-900 dark:text-gray-300 inline-block px-2 py-1 rounded mt-1 border border-gray-200 dark:border-gray-700">admin@example.com / 123456</p>
        </div>
      </div>
    </div>
  );
}
