// models/Parent.js
const ParentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nationalId: String,
    relationshipType: String
  });
  
  module.exports = mongoose.model('Parent', ParentSchema);