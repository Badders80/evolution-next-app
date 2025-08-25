import React from 'react';
// Removed: import './DynamicTokinvestLogo.css';

const DynamicTokinvestLogo = ({ size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="dynamic-tokinvest-logo"
  >
    {/* Diagonal top-left to bottom-right */}
    <line 
      x1="10" 
      y1="10" 
      x2="70" 
      y2="70" 
      stroke="#00C08B" 
      strokeWidth="7" 
      strokeLinecap="round" 
      className="animate-drawTokinvestLine" 
    />
    {/* Diagonal bottom-left to top-right */}
    <line 
      x1="10" 
      y1="70" 
      x2="70" 
      y2="10" 
      stroke="#00C08B" 
      strokeWidth="7" 
      strokeLinecap="round" 
      className="animate-drawTokinvestLine animation-delay-300" 
    />
    {/* Left chevron */}
    <polyline 
      points="10,40 40,10" 
      stroke="#00C08B" 
      strokeWidth="7" 
      fill="none" 
      strokeLinecap="round" 
      className="animate-drawTokinvestLine animation-delay-600" 
    />
    {/* Right chevron */}
    <polyline 
      points="40,70 70,40" 
      stroke="#00C08B" 
      strokeWidth="7" 
      fill="none" 
      strokeLinecap="round" 
      className="animate-drawTokinvestLine animation-delay-900" 
    />
  </svg>
);

export default DynamicTokinvestLogo; 