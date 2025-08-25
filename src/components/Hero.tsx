import React from 'react';
const heroBg = '/Horse-Double-Black.png';
const evolutionText = '/Copy of Evolution Brand Kit (11 x 4 in).png';

/**
 * Full‑screen hero section with a darkened background image and
 * centred gold logo. There is no additional text here; the logo
 * alone anchors the page.
 */
export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      {/* Centered Evolution Stables Text Image */}
      <div className="relative z-10 flex items-center justify-center w-full">
        <img 
          src={evolutionText} 
          alt="EVOLUTION STABLES" 
          className="w-[420px] max-w-full h-auto mx-auto drop-shadow-lg"
        />
      </div>
    </section>
  );
}
