import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import EmailForm from './EmailForm'; // Import the new EmailForm component

function DeskFooterComp({ children }) {
  const [middleWidth, setMiddleWidth] = useState('50%');
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
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100px',
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          padding: '0 20px',
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: `calc((100% - ${middleWidth}) / 2)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
          }}
        >
          <div
            style={{
              color: '#004AAD',
              fontFamily: 'Poppins, sans-serif',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <Phone size={20} style={{ marginRight: '5px' }} />
              <span style={{ fontWeight: 'bold' }}>Call Us</span>
            </div>
            <a href="tel:+11234567890" style={{ color: 'inherit', textDecoration: 'none' }}>
              <p style={{ margin: 0 }}>+1 (123) 456-7890</p>
            </a>
          </div>
        </div>
        <div
          style={{
            width: `calc((100% - ${middleWidth}) / 2)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            position: 'absolute',
            right: 0,
          }}
          onClick={handleEmailClick}
        >
          <div
            style={{
              color: '#004AAD',
              fontFamily: 'Poppins, sans-serif',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <Mail size={20} style={{ marginRight: '5px' }} />
              <span style={{ fontWeight: 'bold' }}>Email Us</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.8em', textAlign: 'center', lineHeight: '1.2' }}>
              airprofessionalsolutions<br />@gmail.com
            </p>
          </div>
        </div>
      </footer>
      {showEmailForm && <EmailForm onClose={() => setShowEmailForm(false)} isPopup={true} inquiry="footer" />} {/* Render the EmailForm component with inquiry prop */}
    </div>
  );
}

export default DeskFooterComp;
