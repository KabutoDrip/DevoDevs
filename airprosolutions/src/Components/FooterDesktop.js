import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS

function DeskFooterComp({ children }) {
  const [middleWidth, setMiddleWidth] = useState('50%');
  const [showEmailForm, setShowEmailForm] = useState(false); // State to show/hide the email form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  }); // State to store form data

  const emailFormRef = useRef(null); // Ref to detect clicks outside the form

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
    setShowEmailForm(!showEmailForm); // Toggle the visibility of the email form
  };

  const handleClickOutside = (event) => {
    if (emailFormRef.current && !emailFormRef.current.contains(event.target)) {
      setShowEmailForm(false); // Close the form when clicking outside of it
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); // Update form data on input change
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs.send(
      'service_apstest', 
      'template_u70m8qs', 
      formData, // Form data to be passed in
      'sDL2y5PHDSPl09T8n' 
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Clear the form after sending the email
        setFormData({ name: '', email: '', message: '' });
        setShowEmailForm(false); // Close the form
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    if (showEmailForm) {
      document.addEventListener('mousedown', handleClickOutside); // Add listener when the form is open
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup listener
    };
  }, [showEmailForm]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Overlay for blur and darken effect */}
      {showEmailForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
            backdropFilter: 'blur(5px)', // Blur effect
            zIndex: 10, // Ensure it's behind the form
          }}
        />
      )}

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
          position: 'relative',
          zIndex: 5, // Content stays above the overlay
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
          justifyContent: 'space-between', // Space between left and right sections
          alignItems: 'center',
          height: '100px',
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          padding: '0 20px',
          zIndex: 5, // Footer stays above the overlay
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
            cursor: 'pointer', // Makes the right section clickable
          }}
          onClick={handleEmailClick} // Toggle email form on click
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
      {/* Email Form */}
      {showEmailForm && (
  <>
    {/* Dark Overlay */}
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken the background
        zIndex: 999, // Behind the form but in front of everything else
        backdropFilter: 'blur(5px)', // Blur the background
      }}
    ></div>
    {/* Email Form */}
    <div
      ref={emailFormRef}
      style={{
        position: 'fixed',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust for exact centering
        width: '90%', // Adjust width to fit content properly, make it more responsive
        maxWidth: '600px', // Ensure max width for larger screens
        backgroundColor: '#fff',
        padding: '20px',
        boxSizing: 'border-box', // Ensure padding is included in the element's total width
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        color: '#004AAD',
        borderRadius: '10px',
        zIndex: 1000, // Above the dark overlay
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Email Us</h2>

      {/* Display the email with hover effect */}
      <p style={{ textAlign: 'center', fontSize: '1em', color: '#333' }}>
        <span
          onClick={() => {
            navigator.clipboard.writeText('airprofessionalsolutions@gmail.com'); // Copy email to clipboard
          }}
          style={{
            color: '#004AAD',
            cursor: 'pointer',
            textDecoration: 'underline', // Add underline to indicate it's clickable
            marginLeft: '5px',
          }}
          onMouseEnter={(e) => {
            e.target.style.cursor = 'copy'; // Change cursor to "copy" on hover
          }}
        >
          airprofessionalsolutions@gmail.com
        </span>
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={sendEmail}>
        <label style={{ width: '100%' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name} // Bind input value to state
            onChange={handleInputChange} // Update state on input change
            placeholder="Your name"
            style={{
              width: '100%', // Ensure input takes full width of the form
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box', // Include padding inside the element
            }}
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email} // Bind input value to state
            onChange={handleInputChange} // Update state on input change
            placeholder="Your email"
            style={{
              width: '100%', // Ensure input takes full width of the form
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box', // Include padding inside the element
            }}
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          Message:
          <textarea
            name="message"
            value={formData.message} // Bind input value to state
            onChange={handleInputChange} // Update state on input change
            placeholder="Your message"
            style={{
              width: '100%', // Ensure textarea takes full width of the form
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box', // Include padding inside the element
              minHeight: '100px', // Add some height for better visibility
            }}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#004AAD',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            width: '100%', // Make button full width for consistent look
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  </>
)}
    </div>
  );
}

export default DeskFooterComp;
