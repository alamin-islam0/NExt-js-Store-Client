import Link from 'next/link';
import { cookies } from 'next/headers';
import { ShoppingBag, LogIn, Plus, List } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LogoutButton } from './LogoutButton';
import { MobileMenu } from './MobileMenu';

export default async function Navbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has('auth_token');

  return (
    <nav className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-blue-600 dark:text-blue-400">
          <ShoppingBag className="w-6 h-6" />
          <span>ShopElite</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/items" className="text-sm font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Items List
          </Link>
          
          {isLoggedIn && (
            <Link href="/add-item" className="text-sm font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-1" />
              Add Item
            </Link>
          )}

          <ThemeToggle />

          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <Link href="/login" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors dark:bg-blue-600 dark:hover:bg-blue-500">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button + Theme Toggle for Mobile */}
        <div className="md:hidden flex items-center gap-2">
             <ThemeToggle />
             <MobileMenu isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </nav>
  );
}
