import React, { useEffect, useState } from 'react';

function HomePage({ title }) {
  const [cities, setCities] = useState([
    { name: 'Brian Head', lat: 37.6925, lon: -112.8486 },
    { name: 'Cedar City', lat: 37.6775, lon: -113.0619 },
    { name: 'Duck Creek', lat: 37.5072, lon: -112.6658 },
    { name: 'Panguitch', lat: 37.8225, lon: -112.4358 },
    { name: 'Parowan', lat: 37.8427, lon: -112.8280 },
    { name: 'St. George', lat: 37.0965, lon: -113.5684 }
  ]);

  // Function to calculate distance between two geographic points using the Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => degrees * Math.PI / 180;
    const R = 6371; // Radius of Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  // Sort cities by proximity to user's location
  const sortCitiesByProximity = (userLocation) => {
    const sortedCities = [...cities].sort((a, b) => {
      const distanceA = calculateDistance(userLocation.lat, userLocation.lon, a.lat, a.lon);
      const distanceB = calculateDistance(userLocation.lat, userLocation.lon, b.lat, b.lon);
      return distanceA - distanceB;
    });
    setCities(sortedCities);
  };

  // Sort cities alphabetically (fallback)
  const sortCitiesAlphabetically = () => {
    const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
    setCities(sortedCities);
  };

  // UseEffect to get user's location and sort cities
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
          // Fallback to alphabetical sorting if location access is denied
          sortCitiesAlphabetically();
        }
      );
    } else {
      // If geolocation is not supported, fallback to alphabetical sorting
      sortCitiesAlphabetically();
    }
  }, []);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#333' }}>{title}</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Southern Utah Heating and Cooling</h2>
        <h3>Installation and Repairs</h3>
        
        <h4>Servicing the following areas:</h4>
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
