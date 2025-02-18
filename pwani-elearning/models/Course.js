const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    credits: { type: Number, required: true, min: 1, max: 6 },
    school: { type: String, required: true, enum: ['SASA', 'SBE', 'SED', 'SEES', 'SHHS', 'HSSS', 'SPAS'] },
    department: { type: String, required: true },
    instructor: { type: String, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'] },
    enrollmentCapacity: { type: Number, required: true, min: 1 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    schedule: [
      {
        day: { type: String, required: true },
        time: { type: String, required: true },
        duration: { type: Number, required: true },
      },
    ],
    prerequisites: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', CourseSchema);
