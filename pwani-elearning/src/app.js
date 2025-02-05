require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
// ... existing imports ...
const authRoutes = require('./routes/auth.routes');


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// TODO: Add routes here
// ... after middleware setup ...
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));