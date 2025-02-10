// models/Lecturer.js
const LecturerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    staffId: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    specialization: String
  });
  module.exports = mongoose.model('Lecturer', LecturerSchema);