import React from 'react';

const cardImage = 'https://tokinvest.capital/_next/image?url=%2Fassets%2Fnews%2Ftokinvest-evolution-stables-partnership.png&w=640&q=75';

const TokinvestNewsCard = () => (
  <a
    href="https://tokinvest.capital/insights-and-news/tokinvest-and-evolution-stables"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      background: '#fff',
      borderRadius: '22px',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      maxWidth: 340,
      padding: '0 0 24px 0',
      textDecoration: 'none',
      color: '#1a1a1a',
      fontFamily: 'Montserrat, sans-serif',
      margin: '0 auto',
      transition: 'box-shadow 0.2s',
    }}
    className="tokinvest-news-card-clone"
  >
    <div style={{
      background: '#0a2236',
      borderRadius: '18px 18px 0 0',
      overflow: 'hidden',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 160,
    }}>
      <img
        src={cardImage}
        alt="Tokinvest Appointed by Evolution Stables"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px 18px 0 0' }}
      />
    </div>
    <div style={{ padding: '20px 22px 0 22px' }}>
      <div style={{ color: '#7a7a8c', fontSize: '1rem', marginBottom: 8 }}>
        4 April 2025 | Partnership
      </div>
      <div style={{ fontWeight: 700, fontSize: '1.15rem', lineHeight: 1.3 }}>
        Tokinvest Appointed by Evolution Stables to Launch Tokenised Racehorse Leases
      </div>
    </div>
  </a>
);

export default TokinvestNewsCard; 