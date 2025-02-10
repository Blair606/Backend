// models/Course.js
const CourseSchema = new mongoose.Schema({
    code: String,
    title: String,
    description: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    lecturer: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecturer' },
    creditHours: Number
  });
  
  module.exports = mongoose.model('Course', CourseSchema);