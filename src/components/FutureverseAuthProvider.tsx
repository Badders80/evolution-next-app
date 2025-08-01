import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FutureverseAuthProvider } from '@futureverse/auth-react';
import { FutureverseAuthClient } from '@futureverse/auth-react/auth';
import { AuthUiProvider, DefaultTheme, CustodialAuthButton } from '@futureverse/auth-ui';
import { useAuth } from '@futureverse/auth-react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Create Wagmi config
const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

// Create auth client
const authClient = new FutureverseAuthClient({
  clientId: import.meta.env.VITE_FUTUREVERSE_CLIENT_ID || 'Ug3k_XbN1wXZlPDvgK_Ge',
  environment: import.meta.env.VITE_FUTUREVERSE_ENVIRONMENT || 'staging',
  redirectUri: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:5173/',
  postLogoutRedirectUri: import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI || 'http://localhost:5173/',
});

// Create query client
const queryClient = new QueryClient();

// Theme configuration that defaults to Web2 authentication
const themeConfig = {
  ...DefaultTheme,
  defaultAuthOption: 'custodial' as const, // Default to Web2 (Email, Google, etc.)
  colors: DefaultTheme.colors,
  font: DefaultTheme.font,
  borderRadius: DefaultTheme.borderRadius
};

export interface FutureverseAuthWrapperProps {
  children: React.ReactNode;
}

export function FutureverseAuthWrapper({ children }: FutureverseAuthWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <FutureverseAuthProvider authClient={authClient}>
          <AuthUiProvider authClient={authClient} themeConfig={themeConfig}>
            {children}
          </AuthUiProvider>
        </FutureverseAuthProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

export interface LoginButtonProps {
  onLogin?: () => void;
  onLogout?: () => void;
  children?: React.ReactNode;
  label?: string;
}

export function LoginButton({ onLogin, onLogout, children, label }: LoginButtonProps) {
  const { userSession, authClient } = useAuth();

  React.useEffect(() => {
    if (userSession && onLogin) {
      onLogin();
    }
  }, [userSession, onLogin]);

  const handleLogout = React.useCallback(async () => {
    try {
      await authClient.signOutPass({ flow: 'redirect' });
      if (onLogout) {
        onLogout();
      }
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }, [authClient, onLogout]);

  // Custom auth trigger that works
  const handleAuth = async () => {
    console.log('Custom auth triggered!');
    try {
      await authClient.signInPass({});
      console.log('Auth initiated successfully');
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  if (userSession) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
        <span>Signed in as {userSession.user?.profile?.email || 'User'}</span>
        <button 
          type="button" 
          onClick={handleLogout} 
          style={{ 
            marginLeft: '0.5rem',
            padding: '0.25rem 0.5rem',
            border: '1px solid #d4a964',
            backgroundColor: 'transparent',
            color: '#d4a964',
            borderRadius: '0.125rem',
            cursor: 'pointer'
          }}
        >
          Sign out
        </button>
      </div>
    );
  }

  // Create custom styled button based on label
  const getButtonStyles = () => {
    if (label === 'GET STARTED') {
      return {
        border: '1px solid #d4a964',
        color: '#d4a964',
        backgroundColor: 'transparent',
        padding: '0.25rem 1rem',
        borderRadius: '0.125rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      };
    }
    if (label === 'Enter MyStable') {
      return {
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid #d4a964',
        color: '#d4a964',
        backgroundColor: 'transparent',
        padding: '0.5rem 1.5rem',
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      };
    }
    return {
      color: 'white',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
    };
  };

  const getHoverStyles = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (label === 'GET STARTED' || label === 'Enter MyStable') {
      e.currentTarget.style.backgroundColor = '#d4a964';
      e.currentTarget.style.color = 'black';
    } else {
      e.currentTarget.style.color = '#d4a964';
    }
  };

  const getLeaveStyles = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (label === 'GET STARTED' || label === 'Enter MyStable') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = '#d4a964';
    } else {
      e.currentTarget.style.color = 'white';
    }
  };

  return (
    <button
      onClick={handleAuth}
      style={getButtonStyles()}
      onMouseEnter={getHoverStyles}
      onMouseLeave={getLeaveStyles}
    >
      {label === 'Enter MyStable' ? (
        <>
          Enter MyStable
          <span style={{ marginLeft: '0.75rem', fontSize: '1.25rem' }}>›</span>
        </>
      ) : (
        label || children || 'Sign in'
      )}
    </button>
  );
}

// Export useAuth hook for convenience
export { useAuth } from '@futureverse/auth-react';
