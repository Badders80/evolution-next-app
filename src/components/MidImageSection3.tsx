import React from 'react';
const img = '/mare-foal.jpg';

/**
 * Third full‑width image with overlay used to separate content blocks.
 */
export default function MidImageSection3() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
}
