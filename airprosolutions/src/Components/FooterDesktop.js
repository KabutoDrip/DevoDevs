import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

function DeskFooterComp({ children }) {
  const [middleWidth, setMiddleWidth] = useState('50%');

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setMiddleWidth('70%');
    } else if (window.innerWidth <= 768) {
      setMiddleWidth('90%');
    } else {
      setMiddleWidth('50%');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div
        style={{
          width: middleWidth,
          backgroundColor: '#004AAD',
          margin: '0 auto',
          padding: '20px',
          minHeight: '100vh',
          boxSizing: 'border-box',
          color: 'white',
          overflowY: 'scroll',
          paddingBottom: '120px',
        }}
      >
        {children}
      </div>
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between', // space between left and right sections
          alignItems: 'center',
          height: '100px',
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          padding: '0 20px',
        }}
      >
        {/* Left section */}
        <div
          style={{
            width: `calc((100% - ${middleWidth}) / 2)`, // Ensures the left section fills available white space
            display: 'flex',
            justifyContent: 'center', // Centers the content in the available space
            alignItems: 'center',
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
            <p style={{ margin: 0 }}>+1 (123) 456-7890</p>
          </div>
        </div>

        {/* Right section */}
        <div
          style={{
            width: `calc((100% - ${middleWidth}) / 2)`, // Ensures the right section fills available white space
            display: 'flex',
            justifyContent: 'center', // Centers the content in the available space
            alignItems: 'center',
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
              <Mail size={20} style={{ marginRight: '5px' }} />
              <span style={{ fontWeight: 'bold' }}>Email Us</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.8em', textAlign: 'center', lineHeight: '1.2' }}>
              airprofessionalsolutions<br />@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DeskFooterComp;
