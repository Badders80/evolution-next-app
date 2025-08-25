"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FutureverseAuthProvider, FutureverseWagmiProvider } from '@futureverse/auth-react';
import { config as wagmiConfig } from './wagmiConfig';

const queryClient = new QueryClient();

// Use the same authClient config as in _app.tsx, but ideally import from a config file
const authClient = {
  clientId: process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID || 'Ug3k_XbN1wXZlPDvgK_Ge',
  environment: process.env.NEXT_PUBLIC_FUTUREVERSE_ENVIRONMENT || 'staging',
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3000/',
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FutureverseWagmiProvider wagmiConfig={wagmiConfig}>
        <FutureverseAuthProvider authClient={authClient}>
          {children}
        </FutureverseAuthProvider>
      </FutureverseWagmiProvider>
    </QueryClientProvider>
  );
}
