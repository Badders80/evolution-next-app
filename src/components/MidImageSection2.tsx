import React from 'react';
const img = '/racelegs.png';

/**
 * Image section that is visually cropped at the top. Using
 * `object-top` together with `overflow-hidden` in the parent allows
 * us to simulate cropping without editing the image file itself.
 */
export default function MidImageSection2() {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center object-top"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
}
