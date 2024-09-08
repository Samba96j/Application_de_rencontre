const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');
    
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');
    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;