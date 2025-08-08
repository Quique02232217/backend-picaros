const ApiError = require("./ApiError");

const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error capturado:", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  res.status(500).json({
    status: "error",
    message: "Error interno del servidor",
  });
};

module.exports = errorHandler;
