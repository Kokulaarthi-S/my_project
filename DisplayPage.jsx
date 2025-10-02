// src/ContactUs.jsx

import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <header>
        <h1 style={{ fontSize: '2rem', color: '#3b3b3b' }}>Contact Us</h1>
      </header>
      
      <section style={{ marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        <div
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
          <div style={{ marginTop: '20px' }}>
            <p><strong>Email:</strong> contact@musicworld.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 Music St, Harmony City</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '40px', fontSize: '0.9rem', color: '#777' }}>
        <p>&copy; 2025 Music World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
