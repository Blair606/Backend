const express = require('express');
const { body, validationResult } = require('express-validator');
const Assignment = require('../models/Assignment');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Assignment:
 *       type: object
 *       required:
 *         - title
 *         - courseId
 *         - courseName
 *         - type
 *         - dueDate
 *         - description
 *         - totalPoints
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the assignment
 *         courseId:
 *           type: integer
 *           description: The ID of the course
 *         courseName:
 *           type: string
 *           description: The name of the course
 *         type:
 *           type: string
 *           enum: [Assignment, Quiz, Project, Lab Report]
 *           description: The type of the assignment
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: The due date of the assignment
 *         description:
 *           type: string
 *           description: A description of the assignment
 *         totalPoints:
 *           type: integer
 *           description: The total points the assignment is worth
 */

/**
 * @swagger
 * /api/assignments:
 *   get:
 *     summary: Get all assignments
 *     description: Fetch all assignments in the system.
 *     responses:
 *       200:
 *         description: List of assignments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Assignment'
 *       500:
 *         description: Server error
 */
router.get('/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    return res.status(200).json(assignments);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @swagger
 * /api/assignments/{id}:
 *   get:
 *     summary: Get assignment by ID
 *     description: Fetch a single assignment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The assignment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Assignment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assignment'
 *       404:
 *         description: Assignment not found
 *       500:
 *         description: Server error
 */
router.get('/assignments/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    return res.status(200).json(assignment);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @swagger
 * /api/assignments:
 *   post:
 *     summary: Create a new assignment
 *     description: Create a new assignment for a course.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Assignment'
 *     responses:
 *       201:
 *         description: Successfully created assignment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assignment'
 *       400:
 *         description: Bad request, validation failed
 *       500:
 *         description: Server error
 */
router.post(
  '/assignments',
  [
    body('title').isString().withMessage('Title is required'),
    body('courseId').isInt().withMessage('Course ID is required'),
    body('courseName').isString().withMessage('Course name is required'),
    body('type')
      .isIn(['Assignment', 'Quiz', 'Project', 'Lab Report'])
      .withMessage('Invalid type'),
    body('dueDate').isISO8601().withMessage('Invalid due date'),
    body('description').isString().withMessage('Description is required'),
    body('totalPoints').isInt({ min: 0 }).withMessage('Total points must be a positive integer'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newAssignment = new Assignment(req.body);
      await newAssignment.save();
      return res.status(201).json(newAssignment);
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

/**
 * @swagger
 * /api/assignments/{id}:
 *   put:
 *     summary: Update an existing assignment
 *     description: Update an assignment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The assignment ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Assignment'
 *     responses:
 *       200:
 *         description: Successfully updated assignment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assignment'
 *       400:
 *         description: Bad request, validation failed
 *       404:
 *         description: Assignment not found
 *       500:
 *         description: Server error
 */
router.put(
  '/assignments/:id',
  [
    body('title').isString().withMessage('Title is required'),
    body('courseId').isInt().withMessage('Course ID is required'),
    body('courseName').isString().withMessage('Course name is required'),
    body('type')
      .isIn(['Assignment', 'Quiz', 'Project', 'Lab Report'])
      .withMessage('Invalid type'),
    body('dueDate').isISO8601().withMessage('Invalid due date'),
    body('description').isString().withMessage('Description is required'),
    body('totalPoints').isInt({ min: 0 }).withMessage('Total points must be a positive integer'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const updatedAssignment = await Assignment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedAssignment) {
        return res.status(404).json({ message: 'Assignment not found' });
      }
      return res.status(200).json(updatedAssignment);
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

/**
 * @swagger
 * /api/assignments/{id}:
 *   delete:
 *     summary: Delete an assignment
 *     description: Delete an assignment by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The assignment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted assignment
 *       404:
 *         description: Assignment not found
 *       500:
 *         description: Server error
 */
router.delete('/assignments/:id', async (req, res) => {
  try {
    const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!deletedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    return res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
