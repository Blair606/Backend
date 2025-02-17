const express = require('express');
const { signUp } = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *               - confirmPassword
 *               - role
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The full name of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for the user account
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 description: Confirm the password
 *               role:
 *                 type: string
 *                 enum: [student, lecturer, parent, admin]
 *                 description: The role of the user
 *               studentId:
 *                 type: string
 *                 description: The student ID (required if role is student)
 *               lecturerId:
 *                 type: string
 *                 description: The lecturer ID (required if role is lecturer)
 *               parentId:
 *                 type: string
 *                 description: The parent ID (required if role is parent)
 *               adminCode:
 *                 type: string
 *                 description: The admin code (required if role is admin)
 *               enableMFA:
 *                 type: boolean
 *                 description: Enable multi-factor authentication for the user
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated access
 *       400:
 *         description: Bad request (e.g., passwords do not match, user already exists)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Passwords do not match
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server error
 */
router.post('/signup', signUp);

module.exports = router;