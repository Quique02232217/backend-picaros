const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

/**
 * @swagger
 * tags:
 *   - name: Customers
 *     description: customer management
 *
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         id_customers:
 *           type: integer
 *           example: 1
 *         name_customers:
 *           type: string
 *           example: "ruben"
 *         phone_customers:
 *           type: string
 *           example: "3005870290"
 *         address:
 *           type: string
 *           example: "Calle cubero de los niños"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2025-07-22T20:08:58.000Z"
 */

/**
 * @swagger
 * /customers/getAll:
 *   get:
 *     summary: Get all the customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: List of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
router.get("/getAll", customerController.getAllCustomers);

/**
 * @swagger
 * /customers/{id}/get:
 *   get:
 *     summary: Get one customer for ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Not found
 */
router.get("/:id/get", customerController.getCustomerById);

/**
 * @swagger
 * /customers/create:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: Customer created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 */
router.post("/create", customerController.createCustomer);

/**
 * @swagger
 * /customers/{id}/update:
 *   put:
 *     summary: Update customer
 *     tags: [Customer]
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
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: Updated Customers by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Not found
 */
router.put("/:id/update", customerController.updateCustomer);

module.exports = router;
