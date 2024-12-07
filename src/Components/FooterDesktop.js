import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import EmailForm from './EmailForm'; // Import the new EmailForm component

function DeskFooterComp({ children }) {
  const [middleWidth, setMiddleWidth] = useState('100%'); // Set to full width
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setMiddleWidth('70%');
    } else if (window.innerWidth <= 768) {
      setMiddleWidth('90%');
    } else {
      setMiddleWidth('50%');
    }
  };

  const handleEmailClick = () => {
    setShowEmailForm(!showEmailForm);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {showEmailForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: 10,
          }}
        />
      )}

      <div
        style={{
          width: middleWidth,
          backgroundColor: '#004AAD',
          margin: '0 auto',
          paddingLeft: '20px',
          paddingRight: '20px',
          minHeight: '100vh',
          boxSizing: 'border-box',
          color: 'white',
          overflowY: 'scroll',
          paddingBottom: '120px',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {<Outlet />}
        {children}
      </div>
      {/* Remove the footer */}
      {showEmailForm && <EmailForm onClose={() => setShowEmailForm(false)} isPopup={true} inquiry="footer" />} {/* Render the EmailForm component with inquiry prop */}
    </div>
  );
}

export default DeskFooterComp;
