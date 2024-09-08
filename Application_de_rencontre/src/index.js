const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/application_de_rencontre', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});