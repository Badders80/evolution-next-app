import React from 'react';
const img = '/hero-horses.png';

/**
 * Full‑width closing image with no overlay or text. This
 * intentionally ends the page on a visual note.
 */
export default function FinalImageSection() {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    ></section>
  );
}
