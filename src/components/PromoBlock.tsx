import React from 'react';
const hostsWave = '/hosts-wave.jpg';
const hostsSunset = '/hosts-sunset.jpg';

/**
 * Promotional block highlighting Evolution Studios. It showcases two
 * provided images and includes a heading, descriptive text and a
 * listen call‑to‑action. The images stack on mobile and sit side
 * by side on larger screens.
 */
export default function PromoBlock() {
  return (
    <div className="bg-gray-900 border border-gray-800 p-8 rounded-md">
      <h3 className="text-2xl font-bold mb-4">🎙 Stay up to date with the team at Evolution Studios</h3>
      <p className="text-graytext mb-6">
        From insights to race‑day commentary, Liam, James, and the crew keep you informed.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <img src={hostsWave} alt="Liam and James" className="w-full md:w-1/2 rounded-md" />
        <img src={hostsSunset} alt="Evolution Studios hosts" className="w-full md:w-1/2 rounded-md" />
      </div>
      <a
        href="#listen"
        className="inline-block border border-gold text-gold px-6 py-2 text-sm tracking-wide hover:bg-gold hover:text-black transition"
      >
        ▶️ Listen Now
      </a>
    </div>
  );
}
