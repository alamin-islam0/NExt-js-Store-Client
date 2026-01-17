'use client';

import { LogOut } from 'lucide-react';
import { logoutAction } from '@/app/actions/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await logoutAction();
      toast.success('Logged out successfully');
      router.refresh(); // Refresh server components (Navbar)
      router.push('/login'); // Optional: redirect to login or home
    } catch (error) {
      toast.error('Failed to logout');
    }
  }

  return (
    <button 
      onClick={handleLogout} 
      className="text-sm font-medium text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors flex items-center"
    >
        <LogOut className="w-4 h-4 mr-1" />
        Logout
    </button>
  );
}
