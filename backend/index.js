// backend/index.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const courseRoutes = require('./routes/courseRoutes');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Enable CORS for requests from your frontend
app.use(cors({
  origin: 'http://localhost:3000', // Adjust as per your frontend's URL
}));

// Middleware
app.use(express.json());

// API Routes
app.use('/api', courseRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
