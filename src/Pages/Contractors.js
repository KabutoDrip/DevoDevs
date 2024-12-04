import React from "react";
import { useNavigate } from "react-router-dom";
import EmailForm from "../Components/EmailForm"; // Import the EmailForm component

function ContractorPage({ title, children }) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToServicesPage = () => {
    // Pass the selected category and filter data as part of the state
    navigate(`/services/Contractors`, {
      state: {
        selectedCategory: "Contractors",
        filters: {
          Blogs: false,
          Contractors: true,
        },
      },
    });
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "20px" }}>
      <h1>Contractors</h1>
      <h3 id="quote-section" style={{ marginTop: "40px" }}>
        Get a Quote
      </h3>
      <p>
        Ready for a new HVAC system? Contact us today for a free, no-obligation
        quote! Simply click the button above or fill out our contact form to get
        started.
      </p>
      <button
        onClick={() => scrollToSection("quote-section")}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get a Quote
      </button>
      <h3 id="warranty-section">Installation Warranty</h3>
      <p>
        All installations are covered under a 1-year installation warranty,
        ensuring your new system operates perfectly. If you are working on a new
        construction project, our installations are also fully covered under
        your builder's warranty.
      </p>
      <h3 id="vendors-section">Vendors and Suppliers</h3>
      <p>
        We work with trusted vendors and suppliers to ensure you're getting
        high-quality HVAC systems and components. Some of our key partners
        include:
      </p>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        <li>Bryant</li>
        <li>Carrier</li>
        <li>Reznor</li>
        <li>Ecobee</li>
        <li>Nest</li>
        <li>Honeywell</li>
        <li>Mountainland Supply</li>
      </ul>
      <h3 id="regulations-section">Compliance with Utah Regulations</h3>
      <p>
        Our team is fully licensed and ensures that all installations comply
        with Utah's HVAC regulations, including building codes, safety
        standards, and energy efficiency requirements. We stay updated with
        changes to local codes to ensure our installations meet the highest
        standards.
      </p>
      <h4>Why Choose Us?</h4>
      <ul>
        <li>Licensed & Insured in Utah</li>
        <li>Energy-efficient installations</li>
        <li>Experienced technicians</li>
        <li>Comprehensive warranties</li>
      </ul>
      <div style={{ marginTop: "60px" }}>
        <h3>Services Offered for Contractors</h3>
        <ul>
          <li>Furnace & AC Installation</li>
          <li>Minisplit & Heat Pump Installation</li>
          <li>Central Air Systems</li>
          <li>Thermostat & Smart Home Integrations</li>
          <li>Ductwork Installation & Optimization</li>
        </ul>
      </div>
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={navigateToServicesPage}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          View Services for Contractors
        </button>
      </div>
      <h3>Contact Us</h3>
      <p>
        For more information or to get started on your HVAC project, reach out
        via phone or use our online form.
      </p>
      <EmailForm onClose={() => {}} isPopup={false} inquiry="contractors" />{" "}
      {/* Render the EmailForm component with inquiry prop */}
    </div>
  );
}

export default ContractorPage;
