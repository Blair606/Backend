// models/Department.js
const DepartmentSchema = new mongoose.Schema({
    name: String,
    code: String,
    description: String
  });
  module.exports = mongoose.model('Department', DepartmentSchema);