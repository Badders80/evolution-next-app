import React from 'react';
import Navbar from '../components/Navbar';
import HorseCard from '../components/HorseCard';
import TabbedSection from '../components/TabbedSection';
import PromoBlock from '../components/PromoBlock';
import { LoginButton, useAuth } from '../components/FutureverseAuthProvider';

/**
 * Dashboard page for owners. Displays an overview of the user's horses,
 * market information via tabs, and promotional content from Evolution
 * Studios. The navbar is shared with the rest of the site. No extra
 * copy beyond what is specified should appear here.
 */
function MyStableContent() {
  const horses = [
    {
      name: 'Zeddiani',
      trainer: 'S. Gray',
      owned: '3% owned',
      performance: '+6.4%',
      nextRace: 'Aug 5',
    },
    {
      name: 'Midnight Syndicate',
      trainer: 'A. Pike',
      owned: '1.5% owned',
      performance: '-2.1%',
      nextRace: 'Aug 9',
    },
    {
      name: 'Quantum Blur',
      trainer: 'J. Richards',
      owned: '5% owned',
      performance: '+12.3%',
      nextRace: 'Aug 11',
    },
  ];

  // Tab content definitions
  const tabs = [
    {
      label: 'News',
      items: [
        'Evolution Stables launches digital syndication for Zeddiani.',
        'Record prizemoney paid to leaseholders this season.',
      ],
    },
    {
      label: 'Recently Listed',
      items: ['Zeddiani — 2% available', 'Quantum Blur — 1% available'],
    },
    {
      label: "What's Hot",
      items: ['Quantum Blur +12.3% this week', 'Midnight Syndicate new to market'],
    },
    {
      label: 'Upcoming Races',
      items: ['Zeddiani — Aug 5, Ellerslie', 'Midnight Syndicate — Aug 9, Matamata'],
    },
  ];

  const { userSession } = useAuth();
  if (!userSession) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="mt-32 text-center">
          <h2 className="text-2xl font-bold mb-4">Sign in to access MyStable</h2>
          <LoginButton label="Login to MyStable" />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Hero banner */}
      <header className="pt-24 pb-12 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MyStable Central</h1>
        <p className="text-graytext text-lg">
          Track your ownership. Stay informed. Explore the market.
        </p>
      </header>

      {/* Horse cards */}
      <section className="px-6 md:px-20 mb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {horses.map((horse) => (
            <HorseCard key={horse.name} {...horse} />
          ))}
        </div>
      </section>

      {/* Tabs for news and market info */}
      <section className="px-6 md:px-20 mb-16 max-w-5xl mx-auto">
        <TabbedSection tabs={tabs} />
      </section>

      {/* Evolution Studios promo */}
      <section className="px-6 md:px-20 mb-24 max-w-6xl mx-auto">
          <PromoBlock />
      </section>
    </div>
  );
}

export default function MyStable() {
  return <MyStableContent />;
}
