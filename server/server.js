//Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

// Init Express
const app = express();

//Define PORT
const PORT = process.env.PORT || 3001;

//MIDDLEWARE------------------
// Morgan for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}

// Add routes
app.use(routes);

//Catch-all for Heroku build
app.get("*", function (req, res){
    res.sendFile("../client/build/index.html");
})

// Connect to Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true });
const db = mongoose.connection;

//CHECKING FOR MONGOOSE CONNECT OR ERROR====------------|||||||~
// In case of mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
// Otherwise log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
//CHECKING FOR MONGOOSE CONNECT OR ERROR====------------|||||||~

// ================~~~SERVER~~~~==================--------------------|  |===|===||
// Start the server                                                 //|  |  _√_  ||
app.listen(PORT, () => {                                            //|  |<(¨v¨)>||
    console.log("⚛️ REACT ⚛️ App running on PORT " + PORT + "/");     //|  |  |U|  ||
});                                                                 //|  |_______||
// ================~~~SERVER~~~~==================--------------------|  ~~GOBLIN~~ 