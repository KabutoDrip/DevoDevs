import React from 'react';
import EmailForm from '../Components/EmailForm';

function HiringPage({ title, children }) {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#fff' }}>{title}</h1>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#fff' }}>We're Preparing for Future Openings!</h2>
        <p style={{ fontSize: '1.1rem', color: '#fff', maxWidth: '600px', margin: '10px auto' }}>
          While we don’t have any open positions at the moment, we are always looking for talented, driven individuals who
          want to make a difference. Whether you have experience in the industry or bring a unique set of skills to the table, 
          we would love to hear from you.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#fff', maxWidth: '600px', margin: '10px auto' }}>
          If you're interested in being part of our team in the future, please reach out by sending an email to 
          <a href="mailto:apply@yourcompany.com" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
            apply@yourcompany.com
          </a>. Include your resume and a brief introduction about the skills and value you could bring to our team.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#fff', maxWidth: '600px', margin: '10px auto' }}>
          As positions open, we’ll review applicants who align with our needs. We look forward to hearing how you could contribute 
          to our mission and growth. Stay tuned for updates!
        </p>
        <EmailForm onClose={() => {}} isPopup={false} inquiry="hiring" /> {/* Render the EmailForm component with inquiry prop */}
      </div>
    </div>
  );
}

export default HiringPage;
