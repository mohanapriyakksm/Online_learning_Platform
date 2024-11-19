const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const DBConnection = require('./config/connect');
const path = require('path');
require('dotenv').config();


// Initialize app and load environment variables
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // React frontend URL
    credentials: true, // If cookies or authentication are involved
  }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
DBConnection();

// Routes
app.use('/api/admin', require('./routers/adminRoutes'));
app.use('/api/user', require('./routers/userRoutes'));

// Start the server
const PORT = process.env.PORT; // Ensure PORT is numeric
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
