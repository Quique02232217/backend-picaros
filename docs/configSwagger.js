const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PICAROS",
      version: "1.0.0",
      description: "API documentation of picaros",
    },
  },
  apis: [
    "./docs/*.swagger.js", // ⬅️ All module swagger files
    "./routes/*.js", // optional, if you put docs in routes
  ],
};

module.exports = swaggerJsdoc(options);
