const express = require("express");
const router = express.Router();
const saleController = require("../controllers/saleController");

/**
 * @swagger
 * tags:
 *   - name: Sale
 *     description: Sales management
 *
 * components:
 *   schemas:
 *     UserRef:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "rafael"
 *
 *     CustomerRef:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "rafael"
 *
 *     Sale:
 *       type: object
 *       properties:
 *         id_sales:
 *           type: integer
 *           example: 1
 *         id_user:
 *           $ref: '#/components/schemas/UserRef'
 *         id_customer:
 *           $ref: '#/components/schemas/CustomerRef'
 *         total:
 *           type: string
 *           example: "150.00"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2025-08-09T20:15:00.000Z"
 *
 * /sales/getAll:
 *   get:
 *     summary: Get all sales
 *     tags: [Sale]
 *     responses:
 *       200:
 *         description: List of sales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sale'
 */

router.get("/getAll", saleController.getAllSale);

module.exports = router;
