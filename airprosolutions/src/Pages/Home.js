import React, { useEffect, useState } from 'react';
import Services from './Services'; // Import the Services component

function HomePage({ title }) {
  const [cities, setCities] = useState([
    { name: 'Brian Head', lat: 37.6925, lon: -112.8486 },
    { name: 'Cedar City', lat: 37.6775, lon: -113.0619 },
    { name: 'Duck Creek', lat: 37.5072, lon: -112.6658 },
    { name: 'Panguitch', lat: 37.8225, lon: -112.4358 },
    { name: 'Parowan', lat: 37.8427, lon: -112.8280 },
    { name: 'St. George', lat: 37.0965, lon: -113.5684 }
  ]);

  const [selectedService, setSelectedService] = useState(null); // Manage selected service

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => degrees * Math.PI / 180;
    const R = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const sortCitiesByProximity = (userLocation) => {
    const sortedCities = [...cities].sort((a, b) => {
      const distanceA = calculateDistance(userLocation.lat, userLocation.lon, a.lat, a.lon);
      const distanceB = calculateDistance(userLocation.lat, userLocation.lon, b.lat, b.lon);
      return distanceA - distanceB;
    });
    setCities(sortedCities);
  };

  const sortCitiesAlphabetically = () => {
    const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
    setCities(sortedCities);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          sortCitiesByProximity(userLocation);
        },
        () => {
          sortCitiesAlphabetically();
        }
      );
    } else {
      sortCitiesAlphabetically();
    }
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  if (selectedService) {
    return <Services selectedService={selectedService} />;
  }

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src="APS.jpg" alt="Air Professional Solutions" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <h2>Southern Utah Heating and Cooling</h2>
        <h3>Installation and Repairs</h3>
        
        <h4>Providing the following services:</h4>
        <div id="service-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Furnace & AC Replacement', 'HVAC Systems Installation', 'Refrigeration Leak Repair', 'Refrigeration Refills', 'Minisplit and Heat Pump Installation and Repairs'].map((service) => (
            <button
              key={service}
              onClick={() => handleServiceClick(service)}
              style={{
                padding: '10px 15px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {service}
            </button>
          ))}
        </div>

        <h4>In the following locations:</h4>
        <ul id="city-list">
          {cities.map((city) => (
            <li key={city.name}>{city.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
