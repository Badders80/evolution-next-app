import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/FutureverseAuthProvider';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';

// Simple but impressive MyStable focused on data display
function MyStableDemo() {
  const { userSession } = useAuth();
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  
  // Mock data for demo (replace with Tokinvest API calls)
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

  // Live market data (mock - replace with real API)
  const [marketData, setMarketData] = useState({
    availableShares: [
      { horse: 'Thunder Strike', price: '$580', available: '2.5%', trend: 'up' },
      { horse: 'Golden Flash', price: '$920', available: '1.8%', trend: 'stable' },
      { horse: 'Speed Demon', price: '$1,150', available: '4.2%', trend: 'down' }
    ]
  });

  // Simulate live updates (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      // Update mock data to show "live" changes
      setPortfolioData(prev => ({
        ...prev,
        holdings: prev.holdings.map(horse => ({
          ...horse,
          change: (Math.random() > 0.5 ? '+' : '-') + (Math.random() * 10).toFixed(1) + '%'
        }))
      }));
    }, 30000); // Update every 30 seconds for demo

    return () => clearInterval(interval);
  }, []);

  if (!userSession) {
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="pt-32 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect to view your stable</h2>
          <p className="text-gray-400 mb-6">See your horse ownership, live performance, and market opportunities</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      
      <div className="pt-24 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Header with wallet info */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Stable</h1>
            <p className="text-gray-400">Welcome back, {userSession.user?.profile?.email}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Wallet</p>
            <p className="font-mono">{address ? `${address.slice(0, 8)}...${address.slice(-6)}` : 'Not connected'}</p>
            <p className="text-sm">{balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ETH` : '--'}</p>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Portfolio Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-400 mb-1">Total Value</p>
              <p className="text-3xl font-bold text-gold">{portfolioData.totalValue}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-1">Total Return</p>
              <p className={`text-2xl font-bold ${portfolioData.totalReturn.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {portfolioData.totalReturn}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-1">Total Ownership</p>
              <p className="text-2xl font-bold">{portfolioData.totalShares}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-1">Horses Owned</p>
              <p className="text-2xl font-bold">{portfolioData.holdings.length}</p>
            </div>
          </div>
        </div>

        {/* Your Horses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Horses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.holdings.map((horse, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{horse.horse}</h3>
                    <p className="text-gray-400">Trainer: {horse.trainer}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    horse.status === 'winning' ? 'bg-green-400' : 
                    horse.status === 'rising' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ownership</span>
                    <span className="font-bold">{horse.owned}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Value</span>
                    <span className="font-bold">{horse.value}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">24h Change</span>
                    <span className={`font-bold ${horse.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {horse.change}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Race</span>
                    <span>{horse.nextRace}</span>
                  </div>
                </div>

                {/* Tokinvest Integration Placeholder */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400 mb-2">Manage via Tokinvest</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1 px-3 bg-gold text-black text-sm rounded hover:bg-yellow-500 transition">
                      View Details
                    </button>
                    <button className="flex-1 py-1 px-3 border border-gray-600 text-sm rounded hover:bg-gray-700 transition">
                      Trade
                    </button>
                  </div>
                </div>
              </div>
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
                  <p className="text-lg font-bold text-gold">{opportunity.price}</p>
                  <button className="w-full mt-3 py-2 bg-gray-700 text-sm rounded hover:bg-gray-600 transition">
                    View on Tokinvest
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
              {/* Mock live activities */}
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
      </div>
    </div>
  );
}

export default MyStableDemo;
