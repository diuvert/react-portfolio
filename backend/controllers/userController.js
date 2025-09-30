import User from '../models/user.js';
import bcrypt from 'bcryptjs';

// helper to generate a unique 5-digit customId
async function generateUniqueCustomId(model) {
  for (let i = 0; i < 10; i++) {
    const id = Math.floor(10000 + Math.random() * 90000);
    const exists = await model.findOne({ customId: id });
    if (!exists) return id;
  }
  throw new Error('Failed to generate unique customId');
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ created: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ customId: Number(req.params.id) }).select('-password');
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already in use' });
    const hashed = await bcrypt.hash(password, 10);
    const customId = await generateUniqueCustomId(User);
    const user = new User({ customId, name, email, password: hashed });
    await user.save();
    res.status(201).json({ customId: user.customId, name: user.name, email: user.email, created: user.created });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const update = { name, email };
    if (password) update.password = await bcrypt.hash(password, 10);
    update.updated = Date.now();
    const user = await User.findOneAndUpdate({ customId: Number(req.params.id) }, update, { new: true }).select('-password');
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update user' });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ customId: Number(req.params.id) });
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete users' });
  }
};
