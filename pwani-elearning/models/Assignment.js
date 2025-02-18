// models/Assignment.js
const mongoose = require('mongoose');

// Define the Assignment schema
const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseId: {
      type: Number,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Assignment', 'Quiz', 'Project', 'Lab Report'],
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    totalPoints: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Draft', 'Published'],
      default: 'Draft',
    },
    submissions: {
      type: Number,
      default: 0,
    },
    totalStudents: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the model
module.exports = mongoose.model('Assignment', assignmentSchema);
