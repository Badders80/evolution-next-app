import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { LoginButton, useAuth } from '../components/FutureverseAuthProvider';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { Card, Button, Typography, Avatar } from '@futureverse/auth-ui';

/**
 * Enhanced MyStable Dashboard - Shows portfolio data with Tokinvest integration
 * All trading functionality redirects to Tokinvest platform
 */
function MyStableContent() {
  const { userSession } = useAuth();
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  
  // Get Futureverse wallet info from userSession
  const futureverseAddress = userSession?.eoa; // Externally Owned Account
  const futureverseConnected = !!userSession?.eoa;
  
  // Use Futureverse wallet if available, fallback to external wallet
  const displayAddress = futureverseAddress || address;
  const displayConnected = futureverseConnected || isConnected;
  
  // Portfolio data for demo (replace with Tokinvest API calls)
  const [portfolioData, setPortfolioData] = useState({
    totalValue: '$2,847',
    totalReturn: '+12.4%',
    totalShares: '8.2%',
    holdings: [
      {
        horse: 'Zeddiani',
        trainer: 'S. Gray',
        owned: '3%',
        value: '$1,247',
        change: '+6.4%',
        nextRace: 'Aug 5',
        status: 'winning'
      },
      {
        horse: 'Midnight Syndicate', 
        trainer: 'A. Pike',
        owned: '1.5%',
        value: '$890',
        change: '-2.1%',
        nextRace: 'Aug 9',
        status: 'stable'
      },
      {
        horse: 'Quantum Blur',
        trainer: 'J. Richards', 
        owned: '3.7%',
        value: '$710',
        change: '+15.2%',
        nextRace: 'Aug 11',
        status: 'rising'
      }
    ]
  });

  // Market opportunities data
  const [marketData, setMarketData] = useState({
    availableShares: [
      { horse: 'Thunder Strike', price: '$580', available: '2.5%', trend: 'up' },
      { horse: 'Golden Flash', price: '$920', available: '1.8%', trend: 'stable' },
      { horse: 'Speed Demon', price: '$1,150', available: '4.2%', trend: 'down' }
    ]
  });

  // Simulate live updates for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioData(prev => ({
        ...prev,
        holdings: prev.holdings.map(horse => ({
          ...horse,
          change: (Math.random() > 0.5 ? '+' : '-') + (Math.random() * 10).toFixed(1) + '%'
        }))
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Tokinvest integration
  const openTokinvest = () => {
    window.open('https://tokinvest.capital/investors', '_blank');
  };

  if (!userSession) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="mt-32 text-center">
          <h2 className="text-2xl font-bold mb-4">Sign in to access MyStable</h2>
          <p className="text-gray-400 mb-6">Connect your wallet to view your horse portfolio</p>
          <LoginButton label="Enter MyStable" />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Header with user and wallet info */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Stable</h1>
            <p className="text-gray-400">
              Welcome back, {(() => {
                const profile = userSession.user?.profile as any;
                
                // Try different name fields in order of preference
                if (profile?.name && typeof profile.name === 'string') {
                  return profile.name;
                } else if (profile?.displayName && typeof profile.displayName === 'string') {
                  return profile.displayName;
                } else if (profile?.given_name && typeof profile.given_name === 'string') {
                  return profile.given_name;
                } else if (profile?.firstName && typeof profile.firstName === 'string') {
                  return profile.firstName;
                } else if (profile?.given_name && profile?.family_name && 
                          typeof profile.given_name === 'string' && typeof profile.family_name === 'string') {
                  return `${profile.given_name} ${profile.family_name}`.trim();
                } else if (profile?.firstName && profile?.lastName && 
                          typeof profile.firstName === 'string' && typeof profile.lastName === 'string') {
                  return `${profile.firstName} ${profile.lastName}`.trim();
                } else if (profile?.email && typeof profile.email === 'string') {
                  // Extract a friendly name from email
                  const emailPart = profile.email.split('@')[0];
                  if (emailPart.includes('.')) {
                    return emailPart.split('.').map((part: string) => 
                      part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
                    ).join(' ');
                  } else {
                    return emailPart.charAt(0).toUpperCase() + emailPart.slice(1).toLowerCase();
                  }
                }
                return 'User';
              })()}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <p className="text-sm text-gray-400">
              {displayConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
            </p>
            <p className="font-mono text-sm">
              {displayAddress ? `${displayAddress.slice(0, 8)}...${displayAddress.slice(-6)}` : 'Not connected'}
            </p>
            <p className="text-sm">
              {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ETH` : 
               displayConnected ? 'Futureverse Wallet' : '--'}
            </p>
          </div>
        </div>

        {/* Portfolio Overview */}
        <Card style={{ backgroundColor: '#1f2937', border: '1px solid #374151', marginBottom: '2rem' }}>
          <div style={{ padding: '1.5rem' }}>
            <Typography style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Portfolio Overview
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Typography style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Total Value</Typography>
                <Typography style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#d4a964' }}>
                  {portfolioData.totalValue}
                </Typography>
              </div>
              <div className="text-center">
                <Typography style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Total Return</Typography>
                <Typography style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: portfolioData.totalReturn.startsWith('+') ? '#10b981' : '#ef4444' 
                }}>
                  {portfolioData.totalReturn}
                </Typography>
              </div>
              <div className="text-center">
                <Typography style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Total Ownership</Typography>
                <Typography style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                  {portfolioData.totalShares}
                </Typography>
              </div>
              <div className="text-center">
                <Typography style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Horses Owned</Typography>
                <Typography style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                  {portfolioData.holdings.length}
                </Typography>
              </div>
            </div>
          </div>
        </Card>

        {/* Your Horses */}
        <div className="mb-8">
          <Typography style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
            Your Horses
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.holdings.map((horse, index) => (
              <Card key={index} style={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151',
                transition: 'background-color 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ padding: '1.5rem' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Typography style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
                        {horse.horse}
                      </Typography>
                      <Typography style={{ color: '#9ca3af' }}>
                        Trainer: {horse.trainer}
                      </Typography>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      horse.status === 'winning' ? 'bg-green-400' : 
                      horse.status === 'rising' ? 'bg-yellow-400' : 'bg-blue-400'
                    }`}></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Typography style={{ color: '#9ca3af' }}>Ownership</Typography>
                      <Typography style={{ fontWeight: 'bold', color: 'white' }}>{horse.owned}</Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography style={{ color: '#9ca3af' }}>Value</Typography>
                      <Typography style={{ fontWeight: 'bold', color: 'white' }}>{horse.value}</Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography style={{ color: '#9ca3af' }}>24h Change</Typography>
                      <Typography style={{ 
                        fontWeight: 'bold', 
                        color: horse.change.startsWith('+') ? '#10b981' : '#ef4444' 
                      }}>
                        {horse.change}
                      </Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography style={{ color: '#9ca3af' }}>Next Race</Typography>
                      <Typography style={{ color: 'white' }}>{horse.nextRace}</Typography>
                    </div>
                  </div>

                  {/* Tokinvest Integration */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <Typography style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
                      Manage via Tokinvest
                    </Typography>
                    <div className="flex gap-2">
                      <Button 
                        variant="primary"
                        onClick={openTokinvest}
                        style={{ 
                          flex: 1, 
                          backgroundColor: '#d4a964', 
                          color: 'black',
                          fontSize: '0.875rem'
                        }}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="secondary"
                        onClick={openTokinvest}
                        style={{ 
                          flex: 1,
                          fontSize: '0.875rem'
                        }}
                      >
                        Trade
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Opportunities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Market Opportunities</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {marketData.availableShares.map((opportunity, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded border-l-4 border-gold">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{opportunity.horse}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      opportunity.trend === 'up' ? 'bg-green-900 text-green-400' :
                      opportunity.trend === 'down' ? 'bg-red-900 text-red-400' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {opportunity.trend}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{opportunity.available} available</p>
                  <p className="text-lg font-bold text-gold mb-3">{opportunity.price}</p>
                  <button 
                    onClick={openTokinvest}
                    className="w-full py-2 bg-gray-700 text-sm rounded hover:bg-gray-600 transition"
                  >
                    Buy on Tokinvest
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Live Activity</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className="font-medium">Zeddiani finished 2nd at Ellerslie</p>
                  <p className="text-sm text-gray-400">Your 3% share earned $47 • 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">New shares available: Thunder Strike</p>
                  <p className="text-sm text-gray-400">2.5% available at $580 • 12 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Quantum Blur market price updated</p>
                  <p className="text-sm text-gray-400">+15.2% today • 18 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tokinvest CTA */}
        <Card style={{ 
          background: 'linear-gradient(to right, rgba(212, 169, 100, 0.2), rgba(234, 179, 8, 0.2))',
          border: '1px solid rgba(212, 169, 100, 0.3)',
          marginBottom: '2rem'
        }}>
          <div style={{ padding: '1.5rem', textAlign: 'center' }}>
            <Typography style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
              Ready to Trade?
            </Typography>
            <Typography style={{ color: '#d1d5db', marginBottom: '1rem' }}>
              Buy and sell horse shares with our tokenization partner Tokinvest
            </Typography>
            <Button 
              variant="primary"
              onClick={openTokinvest}
              style={{ 
                backgroundColor: '#d4a964', 
                color: 'black',
                padding: '0.75rem 1.5rem',
                fontWeight: 'bold'
              }}
            >
              Open Tokinvest Platform
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function MyStable() {
  return <MyStableContent />;
}
