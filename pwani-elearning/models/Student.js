// models/Student.js
const StudentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    registrationNumber: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Parent' },
    currentSemester: String
  });
  module.exports = mongoose.model('Student', StudentSchema);  