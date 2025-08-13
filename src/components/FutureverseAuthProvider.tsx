import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FutureverseAuthProvider } from '@futureverse/auth-react';
import { FutureverseAuthClient } from '@futureverse/auth-react/auth';
import { 
  AuthUiProvider, 
  DefaultTheme, 
  CustodialAuthButton,
  Avatar,
  Button,
  Card,
  Typography
} from '@futureverse/auth-ui';
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
    // If user is already signed in and this is "Enter MyStable", navigate to MyStable
    if (userSession && label === 'Enter MyStable') {
      window.location.href = '/mystable';
      return;
    }
    
    console.log('Custom auth triggered!');
    try {
      await authClient.signInPass({});
      console.log('Auth initiated successfully');
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  if (userSession) {
    // Debug log to see what user data is available
    console.log('UserSession object:', userSession);
    console.log('User profile:', userSession.user?.profile);
    
    // Extract user name information with type assertion
    const profile = userSession.user?.profile as any;
    let displayName = 'User';
    
    // Try different name fields in order of preference
    if (profile?.name && typeof profile.name === 'string') {
      displayName = profile.name;
    } else if (profile?.displayName && typeof profile.displayName === 'string') {
      displayName = profile.displayName;
    } else if (profile?.given_name && typeof profile.given_name === 'string') {
      // Google OAuth standard field
      displayName = profile.given_name;
    } else if (profile?.firstName && typeof profile.firstName === 'string') {
      displayName = profile.firstName;
    } else if (profile?.given_name && profile?.family_name && 
               typeof profile.given_name === 'string' && typeof profile.family_name === 'string') {
      // Google OAuth standard fields
      displayName = `${profile.given_name} ${profile.family_name}`.trim();
    } else if (profile?.firstName && profile?.lastName && 
               typeof profile.firstName === 'string' && typeof profile.lastName === 'string') {
      displayName = `${profile.firstName} ${profile.lastName}`.trim();
    } else if (profile?.email && typeof profile.email === 'string') {
      // Extract a friendly name from email
      const emailPart = profile.email.split('@')[0];
      // Try to make it more readable (e.g., "john.doe" becomes "John Doe")
      if (emailPart.includes('.')) {
        displayName = emailPart.split('.').map((part: string) => 
          part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        ).join(' ');
      } else {
        displayName = emailPart.charAt(0).toUpperCase() + emailPart.slice(1).toLowerCase();
      }
    }
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white' }}>
        <Avatar 
          size="sm"
          name={displayName}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography style={{ color: 'white', margin: 0, fontSize: '14px', fontWeight: 500 }}>
            {displayName}
          </Typography>
          <Typography style={{ color: '#9ca3af', margin: 0, fontSize: '12px' }}>
            {userSession.eoa ? `${userSession.eoa.slice(0, 6)}...${userSession.eoa.slice(-4)}` : 'Connected'}
          </Typography>
        </div>
        <Button 
          variant="secondary"
          onClick={handleLogout}
          style={{ 
            marginLeft: '0.5rem',
            borderColor: '#d4a964',
            color: '#d4a964',
            backgroundColor: 'transparent'
          }}
        >
          Sign out
        </Button>
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
    <Button
      variant="secondary"
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
    </Button>
  );
}

// Export useAuth hook for convenience
export { useAuth } from '@futureverse/auth-react';

// Export Futureverse UI components for use throughout the app
export { 
  Avatar,
  Button,
  Card,
  Typography
} from '@futureverse/auth-ui';
