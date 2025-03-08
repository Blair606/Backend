const express = require("express");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/eduPortal', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Failed to connect to MongoDB", err));

// Middleware to parse incoming requests
app.use(express.json());

// Swagger setup
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Edu Portal API",
            version: "1.0.0",
            description: "API documentation for the Edu Portal application",
        },
        servers: [
            {
                url: "http://localhost:5000/api",
            },
        ],
    },
    apis: ["./routes/userRoutes.js"], // Path to the route files to be documented
};

const swaggerSpec = swaggerJsdoc(options);

// Serve Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routes
app.use('/api', userRoutes);

// Base route
app.get("/", (req, res) => {
    res.send("Welcome to Edu Portal");
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 3000");
});
