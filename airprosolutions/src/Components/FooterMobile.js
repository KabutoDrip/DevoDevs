import React, { useState, useEffect } from 'react';

function FooterComp() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [contOpen, setContOpen] = useState(false);
  const [showContent, setShowContent] = useState(false); // New state to control the appearance of content

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
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>1-800-123-4567</div>
                  </div>
                  <div
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
                    <img src="/Email.svg" alt="Email Us" style={{ width: '30%', height: '30%' }} />
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', paddingTop: '1vh' }}>
                      Email Us
                    </div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px' }}>info@example.com</div>
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
