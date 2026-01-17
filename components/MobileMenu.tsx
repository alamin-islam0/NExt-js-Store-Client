'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Plus, LogIn, Package } from 'lucide-react';
import { LogoutButton } from './LogoutButton';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isLoggedIn: boolean;
}

export function MobileMenu({ isLoggedIn }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu explicitly
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4 shadow-xl animate-in slide-in-from-top-2 duration-200 z-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/items" 
              onClick={closeMenu}
              className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-base font-medium transition-colors flex items-center text-gray-900 dark:text-gray-100"
            >
              <Package className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
              Items List
            </Link>
            
            {isLoggedIn && (
              <Link 
                href="/add-item" 
                onClick={closeMenu}
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-base font-medium transition-colors flex items-center text-gray-900 dark:text-gray-100"
              >
                <Plus className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                Add Item
              </Link>
            )}

            <div className="pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
              {isLoggedIn ? (
                 <div className="px-4 py-2" onClick={closeMenu}>
                    <LogoutButton />
                 </div>
              ) : (
                <Link 
                  href="/login" 
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
