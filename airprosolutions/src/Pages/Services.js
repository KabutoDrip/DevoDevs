import React, { useEffect, useRef, useState } from 'react';

function Services({ selectedService }) {
  const sections = {
    'Furnace & AC Replacement': useRef(null),
    'HVAC Systems Installation': useRef(null),
    'Refrigeration Leak Repair': useRef(null),
    'Refrigeration Refills': useRef(null),
    'Minisplit and Heat Pump Installation and Repairs': useRef(null),
  };

  const [filters, setFilters] = useState({
    Homeowners: true,  // Default: checked
    Contractors: true, // Default: checked
  });

  useEffect(() => {
    if (selectedService && sections[selectedService]) {
      sections[selectedService].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedService]);

  const services = [
    {
      name: 'Furnace & AC Replacement',
      category: 'Homeowners',
      content: 'Details about Furnace & AC Replacement...',
      image: 'Furnace.jpg',
    },
    {
      name: 'HVAC Systems Installation',
      category: 'Contractors',
      content: 'Details about HVAC Systems Installation...',
      image: '',
    },
    {
      name: 'Refrigeration Leak Repair',
      category: 'Homeowners',
      content: 'Details about Refrigeration Leak Repair...',
      image: '',
    },
    {
      name: 'Refrigeration Refills',
      category: 'Contractors',
      content: 'Details about Refrigeration Refills...',
      image: '',
    },
    {
      name: 'Minisplit and Heat Pump Installation and Repairs',
      category: 'Homeowners',
      content: 'Details about Minisplit and Heat Pump Installation and Repairs...',
      image: '',
    },
  ];

  const filteredServices = services.filter((service) => {
    return filters[service.category];
  });

  const handleCheckboxChange = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  return (
    <div className="services-container" style={{ fontFamily: 'Poppins, sans-serif', width: '100%', boxSizing: 'border-box' }}>
      {/* Added margin-left: -20px and margin-right: -20px to extend past padding */}
      <div className="services-header" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        backgroundColor: 'orange',
        marginLeft: '-20px',
        marginRight: '-20px',
        padding: '20px'
      }}>
        <h2 style={{ margin: 0 }}>Our Services</h2>

        <div className="filter-checkboxes">
          <label style={{ display: 'inline-flex', alignItems: 'center', marginRight: '20px' }}>
            <input
              type="checkbox"
              checked={filters.Homeowners}
              onChange={() => handleCheckboxChange('Homeowners')}
              style={{ marginRight: '10px' }}
            />
            Homeowners
          </label>
          <label style={{ display: 'inline-flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={filters.Contractors}
              onChange={() => handleCheckboxChange('Contractors')}
              style={{ marginRight: '10px' }}
            />
            Contractors
          </label>
        </div>
      </div>

      <div className="filtered-services" style={{ width: '100%' }}>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <section key={service.name} ref={sections[service.name]} className="service-section" style={{ margin: '0 0 20px', width: '100%' }}>
              <h3>{service.name}</h3>
              {service.image && (
                <img 
                  src={service.image} 
                  alt={service.name} 
                  style={{ 
                    width: '100%', 
                    objectFit: 'contain',
                    marginBottom: '10px' 
                  }} 
                />
              )}
              <p>{service.content}</p>
            </section>
          ))
        ) : (
          <p>No services match your filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Services;