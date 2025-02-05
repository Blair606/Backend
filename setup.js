const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = 'pwani-elearning';

// Directory structure
const directories = [
    // Source directory
    'src',
    'src/config',
    'src/models/user',
    'src/models/academic',
    'src/models/content',
    'src/models/assessment',
    'src/models/financial',
    'src/models/communication',
    'src/controllers',
    'src/routes',
    'src/middleware',
    'src/services',
    'src/utils',
    'src/tests/unit/models',
    'src/tests/integration/api',
    // Upload directories
    'uploads/profiles',
    'uploads/course_contents',
    'uploads/assignments',
    'uploads/submissions',
    'uploads/payment_proofs',
    // Logs directory
    'logs'
];

// Files to create with basic content
const files = {
    // Config files
    'src/config/database.js': `
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(\`MongoDB Connected: \${conn.connection.host}\`);
    } catch (error) {
        console.error(\`Error: \${error.message}\`);
        process.exit(1);
    }
};

module.exports = connectDB;
    `,
    'src/config/multer.js': `
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
    `,
    'src/config/constants.js': `
module.exports = {
    roles: {
        ADMIN: 'admin',
        STUDENT: 'student',
        LECTURER: 'lecturer',
        PARENT: 'parent'
    }
};
    `,

    // Main app file
    'src/app.js': `
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// TODO: Add routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
    `,

    // Environment and git files
    '.env': `
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pwani_elearning
JWT_SECRET=your_jwt_secret
    `,
    '.gitignore': `
node_modules
.env
logs
uploads/*
!uploads/.gitkeep
    `,

    // Package.json
    'package.json': `
{
  "name": "pwani-elearning",
  "version": "1.0.0",
  "description": "Pwani University E-Learning Platform",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "test": "jest"
  },
  "keywords": ["education", "e-learning", "pwani"],
  "author": "",
  "license": "ISC"
}
    `,

    // README
    'README.md': `
# Pwani University E-Learning Platform

A comprehensive e-learning solution for Pwani University.

## Setup Instructions

1. Clone the repository
2. Run \`npm install\`
3. Create .env file with required environment variables
4. Run \`npm run dev\` for development
    `,
};

// Create directory function
const createDirectory = (dir) => {
    const fullPath = path.join(PROJECT_ROOT, dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Created directory: ${fullPath}`);
    }
};

// Create file function
const createFile = (filename, content) => {
    const fullPath = path.join(PROJECT_ROOT, filename);
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, content.trim());
        console.log(`Created file: ${fullPath}`);
    }
};

// Main execution
console.log('Starting project setup...');

// Create project root directory
if (!fs.existsSync(PROJECT_ROOT)) {
    fs.mkdirSync(PROJECT_ROOT);
    console.log(`Created project root: ${PROJECT_ROOT}`);
}

// Create directories
directories.forEach(dir => createDirectory(dir));

// Create files
Object.entries(files).forEach(([filename, content]) => createFile(filename, content));

// Create empty .gitkeep files in upload directories
directories.forEach(dir => {
    if (dir.startsWith('uploads/')) {
        createFile(`${dir}/.gitkeep`, '');
    }
});

console.log('\nProject structure created successfully!');
console.log('\nNext steps:');
console.log('1. Run: cd pwani-elearning');
console.log('2. Run: npm install');
console.log('3. Update .env file with your configuration');
console.log('4. Run: npm run dev');