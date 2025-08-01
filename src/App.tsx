import React from 'react';
import Home from './pages/Home';
import MyStable from './pages/MyStable';
import { FutureverseAuthWrapper } from './components/FutureverseAuthProvider';

/**
 * Simple router based on pathname. When visiting `/mystable` the
 * MyStable dashboard is rendered, otherwise the landing page.
 * Now wrapped with Futureverse auth providers.
 */
export default function App() {
  const path = window.location.pathname.toLowerCase();
  
  return (
    <FutureverseAuthWrapper>
      {path.includes('mystable') ? <MyStable /> : <Home />}
    </FutureverseAuthWrapper>
  );
}
