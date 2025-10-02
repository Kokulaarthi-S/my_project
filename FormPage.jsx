import React, { useState, useContext } from 'react';
import { Auth } from '../Auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useContext(Auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');

  const handle = async e => {
    e.preventDefault();
    if (!email || !pass) return setErr('All fields required');
    try {
      await login(email, pass);
      navigate('/', { replace: true });
    } catch {
      setErr('Invalid credentials');
    }
  };

  return (
    < div style={{ backgroundImage: 'url(/images9.avif)',  
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      color: 'black',
      padding: '2rem',
      textAlign: 'center',}}>
    <form onSubmit={handle} style={styles.form}>
      <h2 style={styles.title}>Login</h2>
      <input style={styles.input} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} />
      {!!err && <div style={styles.error}>{err}</div>}
      <button style={styles.btn} type="submit">Login</button>
    </form>
    </div>
  );
}

const styles = {
  form: { display:'flex',flexDirection:'column',width:'300px',margin:'40px auto',padding:'30px',border:'4px solid #ccc',borderRadius:'8px' },
  title: { textAlign:'center' },
  input: { padding:'8px', margin:'8px 0' },
  btn: { padding:'10px', background:'#007bff', color:'#fff', border:'none', cursor:'pointer' },
  error: { color:'red', marginBottom:'8px' }
};
