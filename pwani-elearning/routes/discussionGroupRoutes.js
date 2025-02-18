const express = require('express');
const DiscussionGroup = require('../models/DiscussionGroup');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: DiscussionGroups
 *   description: Discussion Group management API
 */

/**
 * @swagger
 * /api/discussion-groups:
 *   get:
 *     summary: Get all discussion groups
 *     tags: [DiscussionGroups]
 *     responses:
 *       200:
 *         description: List of discussion groups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/DiscussionGroup'
 */
router.get('/', async (req, res) => {
  try {
    const discussionGroups = await DiscussionGroup.find();
    res.status(200).json(discussionGroups);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/discussion-groups/{id}:
 *   get:
 *     summary: Get a discussion group by ID
 *     tags: [DiscussionGroups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The discussion group ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Discussion group found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/DiscussionGroup'
 *       404:
 *         description: Discussion group not found
 */
router.get('/:id', async (req, res) => {
  try {
    const discussionGroup = await DiscussionGroup.findById(req.params.id);
    if (!discussionGroup) {
      return res.status(404).json({ error: 'Discussion group not found' });
    }
    res.status(200).json(discussionGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/discussion-groups:
 *   post:
 *     summary: Create a new discussion group
 *     tags: [DiscussionGroups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - course
 *               - numberOfGroups
 *               - description
 *               - dueDate
 *             properties:
 *               title:
 *                 type: string
 *               course:
 *                 type: string
 *               numberOfGroups:
 *                 type: integer
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Discussion group created successfully
 *       400:
 *         description: Bad Request
 */
router.post('/', async (req, res) => {
  try {
    const { title, course, numberOfGroups, description, dueDate } = req.body;
    const newDiscussionGroup = new DiscussionGroup({
      title,
      course,
      numberOfGroups,
      description,
      dueDate,
    });
    await newDiscussionGroup.save();
    res.status(201).json(newDiscussionGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/discussion-groups/{id}:
 *   put:
 *     summary: Update an existing discussion group
 *     tags: [DiscussionGroups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The discussion group ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               course:
 *                 type: string
 *               numberOfGroups:
 *                 type: integer
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Discussion group updated successfully
 *       400:
 *         description: Bad Request
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedGroup = await DiscussionGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGroup) {
      return res.status(404).json({ error: 'Discussion group not found' });
    }
    res.status(200).json(updatedGroup);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/discussion-groups/{id}:
 *   delete:
 *     summary: Delete a discussion group
 *     tags: [DiscussionGroups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The discussion group ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Discussion group deleted successfully
 *       404:
 *         description: Discussion group not found
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedGroup = await DiscussionGroup.findByIdAndDelete(req.params.id);
    if (!deletedGroup) {
      return res.status(404).json({ error: 'Discussion group not found' });
    }
    res.status(200).json({ message: 'Discussion group deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
