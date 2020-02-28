//Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Define PORT
var PORT = process.env.PORT || 3000;

// Init Express
var app = express();

//MIDDLEWARE------------------
// Morgan for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
    //DO WE NEED BOTH OF THESE??? ↑↑↑↑&&↓↓↓↓
// Connect to Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoBooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
var db = mongoose.connection;

// In case of mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
// Otherwise log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Define API routes here  --  BEFORE React routes defined  ||
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Send every other request to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ================~~~SERVER~~~~==================------------|  |===|===||
// Start the server                                         //|  |  _√_  ||
app.listen(PORT, () => {                                    //|  |<(¨v¨)>||
    console.log("App running at localhost:" + PORT + "/");  //|  |  |U|  ||
});                                                         //|  |_______||
// ================~~~SERVER~~~~==================------------|  ~~GOBLIN~~ 