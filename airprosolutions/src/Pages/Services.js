import React, { useEffect, useRef } from 'react';

function Services({ selectedService }) {
  const sections = {
    'Furnace & AC Replacement': useRef(null),
    'HVAC Systems Installation': useRef(null),
    'Refrigeration Leak Repair': useRef(null),
    'Refrigeration Refills': useRef(null),
    'Minisplit and Heat Pump Installation and Repairs': useRef(null),
  };

  // Scroll to the selected service section when the component loads
  useEffect(() => {
    if (selectedService && sections[selectedService]) {
      sections[selectedService].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedService]);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <h2>Services</h2>
      <section ref={sections['Furnace & AC Replacement']}>
        <h3>Furnace & AC Replacement</h3>
        <p>Details about Furnace & AC Replacement...</p>
      </section>

      <section ref={sections['HVAC Systems Installation']}>
        <h3>HVAC Systems Installation</h3>
        <p>Details about HVAC Systems Installation...</p>
      </section>

      <section ref={sections['Refrigeration Leak Repair']}>
        <h3>Refrigeration Leak Repair</h3>
        <p>Details about Refrigeration Leak Repair...</p>
      </section>

      <section ref={sections['Refrigeration Refills']}>
        <h3>Refrigeration Refills</h3>
        <p>Details about Refrigeration Refills...</p>
      </section>

      <section ref={sections['Minisplit and Heat Pump Installation and Repairs']}>
        <h3>Minisplit and Heat Pump Installation and Repairs</h3>
        <p>Details about Minisplit and Heat Pump Installation and Repairs...</p>
      </section>
    </div>
  );
}

export default Services;
