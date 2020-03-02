const router = require("express").Router();
const searchController = require("../../controllers/searchController");

//Search with google API
router.route("/").get(searchController.findAll);

module.exports = router;