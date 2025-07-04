'use client';

import { Provider } from 'react-redux';
import { store } from './store.tsx'
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}