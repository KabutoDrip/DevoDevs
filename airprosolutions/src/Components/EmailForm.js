import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function EmailForm({ isPopup = false, onClose }) {
  const emailFormRef = useRef(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send('service_apstest', 'template_u70m8qs', formData, 'sDL2y5PHDSPl09T8n')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({ name: '', email: '', message: '' });
        onClose && onClose();
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  return (
    <>
      {isPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            backdropFilter: 'blur(5px)',
          }}
        ></div>
      )}
      <div
        ref={emailFormRef}
        style={{
          position: isPopup ? 'fixed' : 'static',
          top: isPopup ? '50%' : 'auto',
          left: isPopup ? '50%' : 'auto',
          transform: isPopup ? 'translate(-50%, -50%)' : 'none',
          width: '90%',
          maxWidth: '600px',
          backgroundColor: '#fff',
          padding: '20px',
          boxSizing: 'border-box',
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
          color: '#004AAD',
          borderRadius: '10px',
          fontFamily: 'Poppins, sans-serif',
          zIndex: isPopup ? 1000 : 'auto',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Email Us</h2>
        <p style={{ textAlign: 'center', fontSize: '1em', color: '#333' }}>
          <span
            onClick={() => navigator.clipboard.writeText('airprofessionalsolutions@gmail.com')}
            style={{
              color: '#004AAD',
              cursor: 'pointer',
              textDecoration: 'underline',
              marginLeft: '5px',
            }}
            onMouseEnter={(e) => (e.target.style.cursor = 'copy')}
          >
            airprofessionalsolutions@gmail.com
          </span>
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onSubmit={sendEmail}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontFamily: 'Poppins, sans-serif',
              }}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontFamily: 'Poppins, sans-serif',
              }}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                minHeight: '100px',
                fontFamily: 'Poppins, sans-serif',
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
              width: '100%',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default EmailForm;
