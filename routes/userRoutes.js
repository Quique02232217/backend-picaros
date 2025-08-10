const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: user management
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id_user:
 *           type: integer
 *           example: 1
 *         user_name:
 *           type: string
 *           example: "ruben"
 *         password:
 *           type: string
 *           example: "3005870290"
 *         create_at:
 *           type: string
 *           format: date-time
 *           example: "2025-07-22T20:08:58.000Z"
 *         ref_rol:
 *           type: string
 *           example: "ADMIN"
 */

/**
 * @swagger
 * /users/getAll:
 *   get:
 *     summary: Get all the users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/getAll", userController.getAllUser);

/**
 * @swagger
 * /users/{id}/get:
 *   get:
 *     summary: Get one user for ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 */
router.get("/:id/get", userController.getUserById);

/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post("/create", userController.createUser);

/**
 * @swagger
 * /users/{id}/update:
 *   put:
 *     summary: User customer
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Updated Users by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 */
router.put("/:id/update", userController.updateUser);

module.exports = router;
