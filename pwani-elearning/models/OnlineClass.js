// models/OnlineClass.js
const mongoose = require('mongoose');

const onlineClassSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['upcoming', 'live', 'completed'],
    default: 'upcoming',
    required: true,
  },
  meetingLink: {
    type: String,
    default: '',
  },
  recording: {
    type: String,
    default: '',
  },
});

const OnlineClass = mongoose.model('OnlineClass', onlineClassSchema);

module.exports = OnlineClass;