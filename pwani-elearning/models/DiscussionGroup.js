const mongoose = require('mongoose');

const discussionGroupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  course: { type: String, required: true },
  numberOfGroups: { type: Number, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
});

const DiscussionGroup = mongoose.model('DiscussionGroup', discussionGroupSchema);

module.exports = DiscussionGroup;
