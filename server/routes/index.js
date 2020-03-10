const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Sending API Routes
router.use("/api", apiRoutes);

// Otherwise, send html
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../../client/build/index.html"))
);

module.exports = router;