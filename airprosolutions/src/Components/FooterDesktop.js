import React, { useState, useEffect } from 'react';

function FooterTemplate() {
  const [middleWidth, setMiddleWidth] = useState('50%');

  // Adjust the middle section's width based on screen size
  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setMiddleWidth('70%'); // Widescreen: 70%
    } else if (window.innerWidth <= 768) {
      setMiddleWidth('90%'); // Smaller screens: 90%
    } else {
      setMiddleWidth('50%'); // Normal desktop: 50%
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Scrollable Middle Section (blue background) */}
      <div
        style={{
          width: middleWidth,
          backgroundColor: 'blue',
          margin: '0 auto',
          padding: '20px',
          minHeight: '100vh',
          boxSizing: 'border-box',
          color: 'white',
          overflowY: 'scroll',
        }}
      >
        <h1>Main Scrollable Content</h1>
        <p>This is the scrollable content area with a blue background. You can add long content here that scrolls vertically.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum.</p>
        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
        <p>More content to show the scrolling feature. This area will scroll as it gets longer.</p>
      </div>

      {/* Fixed Footer Section */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          height: '100px',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Section (Footer Info) */}
        <div
          style={{
            backgroundColor: 'transparent',
            padding: '20px',
            color: 'blue',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <p>Left Footer Info</p>
        </div>

        {/* Right Section (Footer Info) */}
        <div
          style={{
            backgroundColor: 'transparent',
            padding: '20px',
            color: 'blue',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <p>Right Footer Info</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterTemplate;
