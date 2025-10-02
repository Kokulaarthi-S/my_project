import React, { useState } from 'react';

const formStyles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    //backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  fileInput: {
    margin: '12px 0',
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

function SongUploadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    songName: '',
    audio: null,
  });

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.songName || !formData.audio) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const uploadData = new FormData();
    uploadData.append('name', formData.name);
    uploadData.append('email', formData.email);
    uploadData.append('password', formData.password);
    uploadData.append('songName', formData.songName);
    uploadData.append('songFile', formData.audio);

    try {
      const res = await fetch('http://localhost:5000/api/songs/register-song', {
        method: 'POST',
        body: uploadData,
      });

      const data = await res.json();

      if (res.ok) {
        alert('🎉 Song uploaded successfully!');
        setFormData({ name: '', email: '', password: '', songName: '', audio: null });
      } else {
        alert(data.message || 'Upload failed');
      }
    } catch (err) {
      alert('Error uploading song:', err);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/img2.jpg)',  
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      color: 'black',
      padding: '2rem',
      textAlign: 'center',}}>
    <form onSubmit={handleSubmit} style={formStyles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '16px',color:'white' }}>🎵 Upload Your Song</h2>

      <input
        type="text"
        placeholder="Name *"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={formStyles.input}
      />

      <input
        type="email"
        placeholder="Email *"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        style={formStyles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        style={formStyles.input}
      />

      <input
        type="text"
        placeholder="Song Name *"
        value={formData.songName}
        onChange={(e) => setFormData({ ...formData, songName: e.target.value })}
        style={formStyles.input}
      />

      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFormData({ ...formData, audio: e.target.files[0] })}
        style={formStyles.fileInput}
      />

      <button type="submit" style={formStyles.button}>Upload Song</button>
    </form>
    </div>
  );
}

export default SongUploadForm;
