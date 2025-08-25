"use client";

import React from 'react';
import { FutureverseAuthProvider, createAuthentication } from '@futureverse/auth-react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../wagmiConfig';

const queryClient = new QueryClient();
const authClient = createAuthentication({
  clientId: process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID!,
  environment: process.env.NEXT_PUBLIC_FUTUREVERSE_ENVIRONMENT! as 'staging' | 'production',
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI!,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <FutureverseAuthProvider authClient={authClient}>
          {children}
        </FutureverseAuthProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
