import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '../config.js';

const generateToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.json({ token: generateToken(user) });
    } catch (error) {
  console.error(error);
  res.status(400).json({ message: 'Registration failed' });
}};
  

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error();
    res.json({ token: generateToken(user) });
  } catch {
    res.status(401).json({ message: 'Login failed' });
  }
};