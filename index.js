const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./utils/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/configSwagger");

const app = express();

app.use(cors());
app.use(express.json());

// Load routes (we’ll create them next)
app.use("/products", productRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conectado a MySQL");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(3000, () =>
      console.log("🚀 Servidor corriendo en http://localhost:3000")
    );
  })
  .catch((err) => console.error("❌ Error al conectar BD:", err));
