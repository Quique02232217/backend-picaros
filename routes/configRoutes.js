const express = require("express");
const router = express.Router();
const configController = require("../controllers/configController");

/**
 * @swagger
 * tags:
 *   - name: Config
 *     description: config management
 *
 * components:
 *   schemas:
 *     Config:
 *       type: object
 *       properties:
 *         entidad:
 *           type: string
 *           example: "ADMINISTRADOR"
 *         codigo:
 *           type: string
 *           example: "ADMIN"
 *         detalle:
 *           type: string
 *           example: "Rol de administrador"
 *
 */

/**
 * @swagger
 * /config/getAll:
 *   get:
 *     summary: Get all the variable config
 *     tags: [Config]
 *     responses:
 *       200:
 *         description: List of config
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Config'
 */
router.get("/getAll", configController.getAllVariablesOfConfiguration);

/**
 * @swagger
 * /config/create:
 *   post:
 *     summary: Create a new variable of config
 *     tags: [Config]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Config'
 *     responses:
 *       201:
 *         description: Config created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Config'
 */
router.post("/create", configController.createVariablesOfConfiguration);

module.exports = router;
