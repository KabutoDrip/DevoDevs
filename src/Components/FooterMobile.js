import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm';

function FooterComp() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [contOpen, setContOpen] = useState(false);
  const [showContent, setShowContent] = useState(false); // New state to control the appearance of content
  const [showEmailForm, setShowEmailForm] = useState(false);  // Add this line

  // Function to handle screen resize and set the state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleCont = () => {
    setContOpen(!contOpen);

    if (!contOpen) {
      // Delay showing content until after the transition
      setTimeout(() => setShowContent(true), 100); // Matches the transition duration
    } else {
      setShowContent(false); // Hide content when closing
    }
  };

  useEffect(() => {
    handleResize(); // Check initial screen size on component mount
    window.addEventListener('resize', handleResize); // Listen for screen size changes

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      {/* Large padding before the footer */}
      <div style={{ height: '300px' }}></div>

      {showEmailForm && (
        <div style={{
          position: 'fixed',
          top: '60px', // Leave space for hamburger nav
          left: 0,
          right: 0,
          bottom: contOpen ? '25vh' : '10vh',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          zIndex: 9,
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <EmailForm
            isPopup={true}
            inquiry="footer"
            onClose={() => setShowEmailForm(false)}
          />
        </div>
      )}

      {/* Footer section */}
      <footer
        onClick={toggleCont}
        style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          height: contOpen ? '25vh' : '10vh', // Change height based on contOpen state
          backgroundColor: '#FA6424',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center', // Vertically center the content
          justifyContent: 'center', // Horizontally center the content
          zIndex: 10, // Keep it on top of other content
          transition: 'height 0.3s ease', // Smooth height transition
        }}
      >
        {/* Mobile Footer */}
        {isMobile ? (
          <>
            <div style={{ cursor: 'pointer' }}>
              {!contOpen && (
                <h1 style={{ margin: 0 }}>Contact Us</h1>
              )}

              {contOpen && showContent && ( // Only show content when showContent is true
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5vw', paddingTop: '1vh' }}>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = 'tel:1-435-600-1152';
                      setContOpen(false);
                      setShowContent(false);
                    }}
                    style={{
                      width: '40vw',
                      height: '40vw',
                      backgroundColor: 'lightblue',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '20px', // Rounded corners
                      color: '#004AAD',
                    }}
                  >
                    <img src="/Call.svg" alt="Call Us" style={{ width: '30%', height: '30%' }} />
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', paddingTop: '1vh' }}>
                      Call Us
                    </div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>1-435-600-1152</div>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowEmailForm(true);
                    }}
                    style={{
                      width: '40vw',
                      height: '40vw',
                      backgroundColor: 'lightblue',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '20px',
                      color: '#004AAD',
                      padding: '2vw',
                      boxSizing: 'border-box'
                    }}
                  >
                    <img src="/Email.svg" alt="Email Us" style={{ width: '30%', height: '30%' }} />
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', paddingTop: '1vh' }}>
                      Email Us
                    </div>
                    <div style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '10px',
                      wordBreak: 'break-word',
                      textAlign: 'center',
                      width: '100%',
                      lineHeight: '1.2'
                    }}>
                      airprofessionalsolutions<br />@gmail.com
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div>
            {/* Desktop Footer */}
            <h1>Desktop Footer</h1>
            <p>This is the desktop version of the footer.</p>
          </div>
        )}
      </footer>
    </>
  );
}

export default FooterComp;
