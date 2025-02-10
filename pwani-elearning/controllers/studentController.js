// controllers/studentController.js
const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({ message: 'Student added successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};