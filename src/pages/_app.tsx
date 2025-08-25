'use client';

import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { FutureverseAuthProvider } from '@futureverse/auth-react';
import dynamic from 'next/dynamic';
import { DefaultTheme } from '@futureverse/auth-ui';
import type { AppProps } from 'next/app';
import Providers from '../providers';

const AuthUiProvider = dynamic(
  () => import('@futureverse/auth-ui').then(mod => mod.AuthUiProvider),
  { ssr: false }
);
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

const themeConfig = {
  ...DefaultTheme,
  defaultAuthOption: 'custodial',
  colors: DefaultTheme.colors,
  font: DefaultTheme.font,
  borderRadius: DefaultTheme.borderRadius,
};

// You may need to update these to use NEXT_PUBLIC_ env vars
const authClient = {
  clientId: process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID || 'Ug3k_XbN1wXZlPDvgK_Ge',
  environment: process.env.NEXT_PUBLIC_FUTUREVERSE_ENVIRONMENT || 'staging',
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3000/',
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
