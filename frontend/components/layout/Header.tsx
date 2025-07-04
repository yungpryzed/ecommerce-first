'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import React from 'react';

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">RistoTools</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition ${pathname === '/' ? 'text-accent' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`text-sm font-medium transition ${pathname.startsWith('/products') ? 'text-accent' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Prodotti
            </Link>
            <Link 
              href="/categories" 
              className={`text-sm font-medium transition ${pathname.startsWith('/categories') ? 'text-accent' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Categorie
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center">
            {session ? (
              <div className="flex items-center">
                <Link href="/account" className="text-sm font-medium text-gray-600 hover:text-gray-900 mr-6">
                  Il mio Account
                </Link>
                {/*session.user.isAdmin &&*/ (
                  <Link href="/admin" className="text-sm font-medium text-gray-600 hover:text-gray-900 mr-6">
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Login / Registrati
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={toggleMobileMenu}
            aria-expanded="false"
          >
            <span className="sr-only">Apri menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-accent' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname.startsWith('/products') ? 'text-accent' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={toggleMobileMenu}
            >
              Prodotti
            </Link>
            <Link 
              href="/categories" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${pathname.startsWith('/categories') ? 'text-accent' : 'text-gray-600 hover:text-gray-900'}`}
              onClick={toggleMobileMenu}
            >
              Categorie
            </Link>

            {session ? (
              <>
                <Link 
                  href="/account" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                  onClick={toggleMobileMenu}
                >
                  Il mio Account
                </Link>
                {/*session.user.isAdmin &&*/ (
                  <Link 
                    href="/admin" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                    onClick={toggleMobileMenu}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    signOut();
                    toggleMobileMenu();
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                onClick={toggleMobileMenu}
              >
                Login / Registrati
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;