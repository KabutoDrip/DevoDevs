import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function Services() {
  const location = useLocation();

  // Initialize filters based on location state (if available)
  const [filters, setFilters] = useState({
    Homeowners: true, // Default is to show Homeowners
    Contractors: true, // Default is to show Contractors (when coming from the home page)
  });

  // Set filters based on navigation state
  useEffect(() => {
    if (location.state?.selectedCategory === 'Contractors') {
      // If we came from the Contractors page, only select Contractors
      setFilters({
        Homeowners: false,
        Contractors: true,
      });
    }
    if (location.state?.selectedCategory === 'Homeowners') {
      // If we came from the Contractors page, only select Contractors
      setFilters({
        Homeowners: true,
        Contractors: false,
      });
    } else {
      // Default to both selected when no state or from the Home page
      setFilters({
        Homeowners: true,
        Contractors: true,
      });
    }
  }, [location.state]);

  // Initialize refs for sections
  const sections = {
    'HVAC Refrigerant Charging': useRef(null),
    'Refrigerant Leak Detection and Repair': useRef(null),
    'Smart Thermostat Installation': useRef(null),
    'Emergency Repairs': useRef(null),
    'Heat load calculations': useRef(null),
  };

  const services = [
    {
      name: 'HVAC Refrigerant Charging',
      category: 'Homeowners',
      content: 'Refrigerant charging ensures your HVAC system has the right type, amount, and quality of refrigerant to work efficiently. Our technicians use high-quality refrigerants and adjust the levels precisely, so your system runs smoothly, saves energy, and keeps you comfortable.',
      image: '/',
    },
    {
      name: 'Refrigerant Leak Detection and Repair',
      category: 'Homeowners',
      content: 'Refrigerant leak detection and repair ensure your HVAC system stays efficient and safe. Our technicians use advanced tools to find leaks, then seal or repair them to prevent further loss. Fixing leaks helps your system cool or heat properly, reduces energy waste, and extends its lifespan.',
      image: '',
    },
    {
      name: 'Smart Thermostat Installation',
      category: 'Homeowners',
      content: "Upgrading to a smart thermostat can make your home more comfortable and energy-efficient. These devices let you control your HVAC system remotely from your phone or set schedules that match your routine. They can even learn your preferences and adjust automatically to save energy. Our technicians will install and configure your smart thermostat, ensuring it's connected to your system and your Wi-Fi for seamless operation. We'll also show you how to use it, so you can enjoy lower energy bills and personalized comfort right away.",
      image: '',
    },
    {
      name: 'Emergency Repairs',
      category: 'Homeowners',
      content: 'Emergency HVAC repairs are here to restore your comfort fast when your system unexpectedly breaks down. Whether it’s a freezing night or a scorching day, our technicians can be there within an hour to diagnose and fix the issue. There is a $200 service fee for this expedited service, ensuring you get quick, reliable repairs when you need them most.',
      image: '',
    },
    
    //Contractors
    {
      name: 'Heat load calculations',
      category: 'Contractors',
      content: "Heat load calculations ensure your HVAC installations are accurate, efficient, and compliant. Our service provides detailed assessments of a building's heating and cooling needs, considering factors like size, insulation, and occupancy.",
      image: '',
    },
    {
      name: 'Unit Sizing and Selection',
      category: 'Contractors',
      content: 'Unit sizing and selection ensures that the HVAC system you install is perfectly matched to your client’s needs. We evaluate the space, energy requirements, and other factors to recommend the ideal unit size for optimal performance and efficiency. With accurate sizing, contractors can avoid over or undersized units, ensuring comfort, reducing energy costs, and extending the system’s lifespan.',
      image: '/In-Attick-Rough-NC.jpg',
    },
    {
      name: 'New Home Installations',
      category: 'Contractors',
      content: "New home HVAC installations involve designing and installing a system that perfectly suits the home's layout, size, and energy needs. We work with contractors to ensure the right system is chosen for optimal comfort, efficiency, and long-term reliability. Our team handles everything from system selection and sizing to full installation, ensuring compliance with building codes and providing a seamless, high-quality solution that meets the needs of homeowners.",
      image: '/NCHVAC.jpg',
    },
    {
      name: 'Custom Installations',
      category: 'Contractors',
      content: "Whether its a solar bank cooling system like the image below or cooling anything out of the ordinary, we can work with you to design a heating and cooling system to feet your hyper-specfic needs.", 
      image: '/Solar_Bank_cooling_support_minisplit.jpg',
    },

  ];

  // Filter services based on the selected categories
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
        padding: '20px',
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
              ref={sections[service.name]} // Apply the ref for each service
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
