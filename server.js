import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const PORT = 4000;
const JWT_SECRET = 'secret123';
mongoose.connect('mongodb://localhost:27017/simpleAuth');

const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, unique: true },
  passwordHash: String
}));

app.use(cors(), express.json());

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const hash = await bcrypt.hash(password, 10);
  try {
    await User.create({ email, passwordHash: hash });
    res.json({ message: 'Signed up!' });
  } catch {
    res.status(400).json({ error: 'Email exists' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const u = await User.findOne({ email });
  if(!u || !await bcrypt.compare(password, u.passwordHash))
    return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: u._id }, JWT_SECRET);
  res.json({ token });
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));
