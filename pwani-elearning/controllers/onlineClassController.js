// controllers/onlineClassController.js
const OnlineClass = require('../models/OnlineClass');

// Create a new online class
exports.createOnlineClass = async (req, res) => {
  try {
    const { title, course, date, time, status, meetingLink, recording } = req.body;
    const newOnlineClass = new OnlineClass({
      title,
      course,
      date,
      time,
      status,
      meetingLink,
      recording,
    });
    await newOnlineClass.save();
    res.status(201).json(newOnlineClass);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create online class', error: error.message });
  }
};

// Get all online classes
exports.getAllOnlineClasses = async (req, res) => {
  try {
    const onlineClasses = await OnlineClass.find();
    res.status(200).json(onlineClasses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch online classes', error: error.message });
  }
};

// Get a single online class by ID
exports.getOnlineClassById = async (req, res) => {
  try {
    const onlineClass = await OnlineClass.findById(req.params.id);
    if (!onlineClass) {
      return res.status(404).json({ message: 'Online class not found' });
    }
    res.status(200).json(onlineClass);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch online class', error: error.message });
  }
};

// Update an online class by ID
exports.updateOnlineClass = async (req, res) => {
  try {
    const { title, course, date, time, status, meetingLink, recording } = req.body;
    const updatedOnlineClass = await OnlineClass.findByIdAndUpdate(
      req.params.id,
      { title, course, date, time, status, meetingLink, recording },
      { new: true }
    );
    if (!updatedOnlineClass) {
      return res.status(404).json({ message: 'Online class not found' });
    }
    res.status(200).json(updatedOnlineClass);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update online class', error: error.message });
  }
};

// Delete an online class by ID
exports.deleteOnlineClass = async (req, res) => {
  try {
    const deletedOnlineClass = await OnlineClass.findByIdAndDelete(req.params.id);
    if (!deletedOnlineClass) {
      return res.status(404).json({ message: 'Online class not found' });
    }
    res.status(200).json({ message: 'Online class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete online class', error: error.message });
  }
};