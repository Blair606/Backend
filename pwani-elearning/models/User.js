const mongoose = require('mongoose');

const guardianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  relationship: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], default: 'student' },
  enableMFA: { type: Boolean, default: false },
  studentId: { type: String }, // For students
  studyLevel: { type: String, enum: ['degree', 'diploma', 'certificate'] }, // For students
  school: { type: String, enum: ['SASA', 'SBE', 'SED', 'SEES', 'SHHS', 'HSSS', 'SPAS'] }, // For students
  program: { type: String }, // For students
  specialization: { type: String }, // For students
  yearOfStudy: { type: Number }, // For students
  semester: { type: Number }, // For students
  dateOfBirth: { type: Date }, // For students
  nationalId: { type: String }, // For students
  phone: { type: String }, // For students
  address: { type: String }, // For students
  guardians: [guardianSchema], // For students
  emergencyContact: { type: String }, // For students
  staffId: { type: String }, // For teachers
  department: { type: String }, // For teachers
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;