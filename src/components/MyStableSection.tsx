import React from 'react';
import { LoginButton } from './PrivyAuthProvider';

/**
 * Closing call‑to‑action inviting users to access the MyStable
 * dashboard. Only the specified copy is used and the "stable"
 * word is highlighted in gold.
 */
export default function MyStableSection() {
  return (
    <section id="mystable" className="bg-black px-6 md:px-20 py-24">
      <div className="max-w-4xl">
        <p className="uppercase text-sm tracking-widest text-graytext mb-4">MyStable</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Everything you need, in one{' '}
          <span className="text-gold">stable</span> place.
        </h2>
        <p className="text-graytext text-lg mb-10">
          Manage your ownership, monitor your assets, and stay connected — simply, securely, and all in one spot.
        </p>
        <LoginButton
          onLogin={() => {
            // If already authenticated, go to /mystable
            if (window.location.pathname !== '/mystable') {
              window.location.href = '/mystable';
            }
          }}
        >
          <span className="inline-flex items-center border border-gold text-gold px-6 py-2 text-sm tracking-wide hover:bg-gold hover:text-black transition">
            Enter MyStable
            <span className="ml-3 text-xl">›</span>
          </span>
        </LoginButton>
      </div>
    </section>
  );
}
