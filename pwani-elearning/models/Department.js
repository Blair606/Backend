const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  school: {
    type: String,
    enum: ['SASA', 'SBE', 'SED', 'SEES', 'SHHS', 'HSSS', 'SPAS'],
    required: true
  },
  head: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true
  }
}, { timestamps: true });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
