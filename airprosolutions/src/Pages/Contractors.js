// components/PageTemplate.js
import React from 'react';

function ContractorPage({ title, children }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <h2>HVAC Installation Services</h2>
      
      <p>
        We offer comprehensive HVAC installation services in Southern Utah. Our team specializes in installing high-efficiency heating and cooling systems tailored to your specific needs, whether for new construction or system replacements.
      </p>

      <h3>Installation Offerings</h3>
      <ul>
        <li>Furnace & AC Installation</li>
        <li>Minisplit & Heat Pump Installation</li>
        <li>Central Air Systems</li>
        <li>Thermostat & Smart Home Integrations</li>
        <li>Ductwork Installation & Optimization</li>
      </ul>

      <button 
        onClick={() => scrollToSection('quote-section')}
        style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
      >
        Get a Quote
      </button>

      <h3 id="quote-section" style={{ marginTop: '40px' }}>Get a Quote</h3>
      <p>
        Ready for a new HVAC system? Contact us today for a free, no-obligation quote! Simply click the button above or fill out our contact form to get started.
      </p>

      <h3 id="warranty-section">Installation Warranty</h3>
      <p>
        All installations are covered under a 1-year installation warranty, ensuring your new system operates perfectly. If you are working on a new construction project, our installations are also fully covered under your builder's warranty.
      </p>

      <h3 id="vendors-section">Vendors and Suppliers</h3>
      <p>
        We work with trusted vendors and suppliers to ensure you're getting high-quality HVAC systems and components. Some of our key partners include:
      </p>
      <ul>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
  <li>
    <a href="https://bryant.com" style={{ color: 'inherit', textDecoration: 'none' }}>Bryant</a>
  </li>
  <li>
    <a href="https://carrier.com" style={{ color: 'inherit', textDecoration: 'none' }}>Carrier</a>
  </li>
  <li>
    <a href="https://reznorhvac.com" style={{ color: 'inherit', textDecoration: 'none' }}>Reznor</a>
  </li>
  <li>
    <a href="https://ecobee.com" style={{ color: 'inherit', textDecoration: 'none' }}>Ecobee</a>
  </li>
  <li>
    <a href="https://nest.com" style={{ color: 'inherit', textDecoration: 'none' }}>Nest</a>
  </li>
  <li>
    <a href="https://honeywell.com" style={{ color: 'inherit', textDecoration: 'none' }}>Honeywell</a>
  </li>
  <li>
    <a href="https://mountainlandsupply.com" style={{ color: 'inherit', textDecoration: 'none' }}>Mountainland Supply</a>
  </li>
</ul>



      </ul>

      <h3 id="regulations-section">Compliance with Utah Regulations</h3>
      <p>
        Our team is fully licensed and ensures that all installations comply with Utah's HVAC regulations, including building codes, safety standards, and energy efficiency requirements. We stay updated with changes to local codes to ensure our installations meet the highest standards.
      </p>
      
      <h4>Why Choose Us?</h4>
      <ul>
        <li>Licensed & Insured in Utah</li>
        <li>Energy-efficient installations</li>
        <li>Experienced technicians</li>
        <li>Comprehensive warranties</li>
      </ul>

      <h3>Contact Us</h3>
      <p>
        For more information or to get started on your HVAC project, reach out via phone or use our online form.
      </p>
    </div>
  );
}

export default ContractorPage;