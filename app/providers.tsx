'use client';

import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import { FutureverseAuthProvider, createAuthentication } from '@futureverse/auth-react';
import React from 'react';

const authClient = createAuthentication({
  clientId: process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID!,
  environment: process.env.NEXT_PUBLIC_FUTUREVERSE_ENVIRONMENT! as 'staging' | 'production',
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI!,
});

console.log("Client ID:", process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <FutureverseAuthProvider authClient={authClient}>
        {children}
      </FutureverseAuthProvider>
    </ReactQueryProvider>
  );
}
