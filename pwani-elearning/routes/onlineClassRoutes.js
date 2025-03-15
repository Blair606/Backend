// routes/onlineClassRoutes.js
const express = require('express');
const onlineClassController = require('../controllers/onlineClassController');

const router = express.Router();


/**
 * @swagger
 * /api/online-classes:
 *   post:
 *     summary: Create a new online class
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
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [upcoming, live, completed]
 *               meetingLink:
 *                 type: string
 *               recording:
 *                 type: string
 *     responses:
 *       201:
 *         description: Online class created successfully
 *       500:
 *         description: Failed to create online class
 */
router.post('/', onlineClassController.createOnlineClass);

/**
 * @swagger
 * /api/online-classes:
 *   get:
 *     summary: Get all online classes
 *     responses:
 *       200:
 *         description: List of online classes
 *       500:
 *         description: Failed to fetch online classes
 */
router.get('/', onlineClassController.getAllOnlineClasses);

/**
 * @swagger
 * /api/online-classes/{id}:
 *   get:
 *     summary: Get a single online class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Online class details
 *       404:
 *         description: Online class not found
 *       500:
 *         description: Failed to fetch online class
 */
router.get('/:id', onlineClassController.getOnlineClassById);

/**
 * @swagger
 * /api/online-classes/{id}:
 *   put:
 *     summary: Update an online class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
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
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [upcoming, live, completed]
 *               meetingLink:
 *                 type: string
 *               recording:
 *                 type: string
 *     responses:
 *       200:
 *         description: Online class updated successfully
 *       404:
 *         description: Online class not found
 *       500:
 *         description: Failed to update online class
 */
router.put('/:id', onlineClassController.updateOnlineClass);

/**
 * @swagger
 * /api/online-classes/{id}:
 *   delete:
 *     summary: Delete an online class by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Online class deleted successfully
 *       404:
 *         description: Online class not found
 *       500:
 *         description: Failed to delete online class
 */
router.delete('/:id', onlineClassController.deleteOnlineClass);

module.exports = router;