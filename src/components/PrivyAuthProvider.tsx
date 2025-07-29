import React from 'react';
import { PrivyProvider, usePrivy } from '@privy-io/react-auth';

export interface PrivyAuthProviderProps {
  appId?: string;
  loginMethods?: string[];
  children: React.ReactNode;
}

export function PrivyAuthProvider({ appId, loginMethods, children }: PrivyAuthProviderProps) {
  const resolvedAppId = appId ?? (import.meta as any).env?.VITE_PRIVY_APP_ID;
  if (!resolvedAppId) {
    throw new Error(
      'PrivyAuthProvider requires an App ID. Either supply the appId prop or define VITE_PRIVY_APP_ID in your environment.'
    );
  }
  const resolvedLoginMethods = loginMethods ?? ['google', 'twitter', 'email'];
  return (
    <PrivyProvider
      appId={resolvedAppId}
      config={{ loginMethods: resolvedLoginMethods as any }}
    >
      {children}
    </PrivyProvider>
  );
}

export interface LoginButtonProps {
  onLogin?: () => void;
  onLogout?: () => void;
  children?: React.ReactNode;
}

import privyLogo from '../assets/Privy Logo.png';

export function LoginButton({ onLogin, onLogout, children }: LoginButtonProps) {
  const { ready, authenticated, login, logout } = usePrivy();
  React.useEffect(() => {
    if (authenticated) {
      const redirect = sessionStorage.getItem('privy:redirect');
      if (redirect) {
        sessionStorage.removeItem('privy:redirect');
        if (typeof onLogin === 'function') {
          onLogin();
        }
        if (window.location.pathname + window.location.search + window.location.hash !== redirect) {
          window.location.replace(redirect);
        }
      } else if (typeof onLogin === 'function') {
        onLogin();
      }
    }
  }, [authenticated, onLogin]);

  // If a prop 'redirectTo' is passed, use it. Otherwise, do not set a redirect (navbar case)
  const handleLogin = React.useCallback(() => {
    // Only set redirect if children has a prop or text indicating MyStable or Get Started (for Navbar SIGN IN, don't set)
    let shouldRedirect = false;
    const check = (val: string) => val.toLowerCase().includes('mystable') || val.toLowerCase().includes('get started');
    if (typeof children === 'string' && check(children)) {
      shouldRedirect = true;
    } else if (React.isValidElement(children) &&
      typeof children.props?.children === 'string' &&
      check(children.props.children)) {
      shouldRedirect = true;
    }
    if (shouldRedirect) {
      sessionStorage.setItem('privy:redirect', '/mystable');
    } else {
      sessionStorage.removeItem('privy:redirect');
    }
    login();
  }, [login, children]);

  const handleLogout = React.useCallback(() => {
    logout().then(() => {
      if (typeof onLogout === 'function') {
        onLogout();
      } else {
        window.location.href = '/';
      }
    });
  }, [logout, onLogout]);

  if (!ready) return null;
  if (authenticated) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src={privyLogo} alt="Privy Logo" style={{ height: 24, width: 'auto' }} />
        <span>Signed in with Privy</span>
        <button type="button" onClick={handleLogout} style={{ marginLeft: '0.5rem' }}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <button type="button" onClick={handleLogin}>
      {children ?? 'Sign in'}
    </button>
  );
}
