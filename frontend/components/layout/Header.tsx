'use client';

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import React from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              E-commerce
            </Link>
            <div className="ml-10 space-x-8">
              <Link href="/products" className="text-base font-medium text-white hover:text-indigo-50">
                Prodotti
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {userInfo ? (
              <div className="flex items-center">
                <span className="text-white mr-4">Ciao, {userInfo.name}</span>
                {userInfo.isAdmin && (
                  <Link href="/admin" className="text-base font-medium text-white hover:text-indigo-50 mr-4">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logoutHandler}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                  Accedi
                </Link>
                <Link href="/register" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                  Registrati
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;