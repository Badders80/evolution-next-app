'use client';
import Home from './Home';
import MyStable from './MyStable';
import { FutureverseAuthWrapper } from '../components/FutureverseAuthProvider';

// Next.js handles routing, so we use the default export for the landing page
export default function IndexPage() {
  // If you want to use browser APIs (e.g., window.ethereum), you can use useEffect
  // For demo, just render Home. If you want to route to MyStable, use Next.js dynamic routing.
  return (
    <FutureverseAuthWrapper>
      <Home />
    </FutureverseAuthWrapper>
  );
}
