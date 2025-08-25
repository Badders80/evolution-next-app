import React from 'react';
import tokinvestLogo from './Logo-tokinvest-full.png';

const PoweredByTokinvest = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'Montserrat, sans-serif' }}>
    <span style={{ fontStyle: 'italic', color: '#888', fontSize: '1.5rem', fontWeight: 400 }}>Powered<br />By</span>
    <img src={tokinvestLogo} alt="Tokinvest Logo" style={{ height: '48px', width: 'auto', display: 'inline-block' }} />
    <span style={{ color: '#231942', fontSize: '2.1rem', fontWeight: 500, marginLeft: '6px', letterSpacing: '-1px' }}>tokinvest</span>
  </div>
);

export default PoweredByTokinvest; 