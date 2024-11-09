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
    Homeowners: true,
    Contractors: true,
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
      content: 'This service involves replacing old or broken heating and cooling units in your home. It includes removing the outdated furnace or AC, installing a new, efficient model, and ensuring it works effectively to keep your home at a comfortable temperature.',
      image: '/Furnace.jpg',
    },
    {
      name: 'HVAC Systems Installation',
      category: 'Contractors',
      content: 'HVAC system installation is the setup of a new heating, ventilation, and air conditioning system. This service covers choosing the right equipment, installing ducts, units, and vents, and making sure everything works together to keep your home comfortable year-round.',
      image: '',
    },
    {
      name: 'Refrigeration Leak Repair',
      category: 'Homeowners',
      content: 'Refrigeration leak repair addresses leaks in refrigerators or cooling systems. A technician will find the source of the leak, fix any damaged parts, and test the system to ensure it’s sealed and keeps your food or supplies at the right temperature.',
      image: '',
    },
    {
      name: 'Refrigeration Refills',
      category: 'Contractors',
      content: 'This service involves adding refrigerant to a cooling system, like a fridge or freezer, to ensure it operates properly. Low refrigerant levels can prevent the system from cooling effectively, so a refill helps maintain the correct temperature and efficiency.',
      image: '',
    },
    {
      name: 'Minisplit and Heat Pump Installation and Repairs',
      category: 'Homeowners',
      content: 'Minisplit and heat pump installation and repair covers the setup, maintenance, or repair of these efficient heating and cooling systems. Technicians can install new units, make repairs to existing ones, and ensure they work efficiently to both heat and cool specific areas of your home.',
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
        <h2 style={{ margin: 0, fontSize: '1.8em' }}>Our Services</h2>

        <div className="filter-checkboxes">
          <label style={{ display: 'inline-flex', alignItems: 'center', marginRight: '20px', fontSize: '1.2em' }}>
            <input
              type="checkbox"
              checked={filters.Homeowners}
              onChange={() => handleCheckboxChange('Homeowners')}
              style={{ marginRight: '10px' }}
            />
            Homeowners
          </label>
          <label style={{ display: 'inline-flex', alignItems: 'center', fontSize: '1.2em' }}>
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
          filteredServices.map((service, index) => (
            <section
              key={service.name}
              ref={sections[service.name]}
              className="service-section"
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                marginBottom: '100px',
                width: '100%',
              }}
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: '50%',
                    maxHeight: '50vh',
                    objectFit: 'cover',
                    marginRight: index % 2 === 0 ? '20px' : '0',
                    marginLeft: index % 2 !== 0 ? '20px' : '0',
                  }}
                />
              )}
              <div style={{ width: '50%', fontSize: '1.2em' }}>
                <h3 style={{ fontSize: '1.5em' }}>{service.name}</h3>
                <p>{service.content}</p>
              </div>
            </section>
          ))
        ) : (
          <p style={{ fontSize: '1.2em' }}>No services match your filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Services;
