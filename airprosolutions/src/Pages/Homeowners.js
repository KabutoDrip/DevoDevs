import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeownerPage({ title, children }) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToServicesPage = () => {
    // Pass the selected category and filter data as part of the state
    navigate(`/services/Homeowners`, {
      state: {
        selectedCategory: 'Homeowners',
        filters: {
          Homeowners: true,
          Contractors: false,
        },
      },
    });
  };


  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#333' }}>{title}</h1>
      <div style={{ marginTop: '20px' }}>
      <h1>Homeowners</h1>

      <div style={{ marginTop: '40px' }}>
        <button 
          onClick={navigateToServicesPage}
          style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
        >
          View Services for Homeowners
        </button>
      </div>


      </div>
    </div>
  );
}

export default HomeownerPage;
