//Dependencies
//==============================================================
var express = require('express');
var bodyParser = require('body-parser');

// Sets up Express
//==============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");// Set Handlebars.

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}); 