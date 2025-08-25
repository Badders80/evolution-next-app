import React from 'react';
const img = '/hooves-transition.jpg';

/**
 * Simple full‑width image block used to separate sections. A dark
 * overlay provides visual continuity without introducing new text.
 */
export default function MidImageSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
}
