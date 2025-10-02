import React, { useState, useContext } from 'react';
import { Auth } from '../Auth';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { signup } = useContext(Auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [err, setErr] = useState('');

  const validEmail = e => /\S+@\S+\.\S+/.test(e);

  const handle = async e => {
    e.preventDefault();
    if (!validEmail(email)) return setErr('Invalid email.');
    if (pass.length < 6) return setErr('Password ≥6 chars.');
    if (pass !== confirm) return setErr('Passwords do not match.');
    try {
      await signup(email, pass);
      navigate('/login', { replace: true });
    } catch (e) {
      setErr(e.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/images4.jpg)',  
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      color: 'black',
      padding: '2rem',
      textAlign: 'center',}}>
    <form onSubmit={handle} style={styles.form}>
      <h2 style={styles.title}>Sign Up</h2>
      <input style={styles.input} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Confirm Password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
      {!!err && <div style={styles.error}>{err}</div>}
      <button style={styles.btn} type="submit">Sign Up</button>
    </form>
    </div>
  );
}

const styles = {
  form: { display:'flex',flexDirection:'column',width:'300px',margin:'40px auto',padding:'20px',border:'1px solid #ccc',borderRadius:'8px' },
  title: { textAlign:'center' },
  input: { padding:'8px', margin:'8px 0' },
  btn: { padding:'10px', background:'#28a745', color:'#fff', border:'none', cursor:'pointer' },
  error: { color:'red', marginBottom:'8px' }
};
