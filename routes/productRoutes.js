const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: product management
 *
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id_product:
 *           type: integer
 *           example: 1
 *         name_product:
 *           type: string
 *           example: "product-1"
 *         price_product:
 *           type: number
 *           format: float
 *           example: 15000.00
 *         stock:
 *           type: integer
 *           example: 20
 *         details:
 *           type: string
 *           example: "Product of high quality"
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2025-07-22T20:08:58.000Z"
 */

/**
 * @swagger
 * /products/getAll:
 *   get:
 *     summary: Get all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/getAll", productController.getAllProducts);

/**
 * @swagger
 * /products/{id}/get:
 *   get:
 *     summary: Get one product for ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found
 */
router.get("/:id/get", productController.getProductById);

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.post("/create", productController.createProduct);

/**
 * @swagger
 * /products/{id}/update:
 *   put:
 *     summary: Update product
 *     tags: [Products]
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
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Updated Product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found
 */
router.put("/:id/update", productController.updateProduct);

module.exports = router;
