const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoutes = require("./search");

//Use the Book route
router.use("/books", bookRoutes);
//Use the Search route
router.use("/search", searchRoutes);

//Otherwise render html
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;