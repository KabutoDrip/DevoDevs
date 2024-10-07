// components/PageTemplate.js
import React from 'react';

function HomeownerPage({ title, children }) {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#333' }}>{title}</h1>
      <div style={{ marginTop: '20px' }}>
      <h1>Homeowners</h1>
      </div>
    </div>
  );
}

export default HomeownerPage;
