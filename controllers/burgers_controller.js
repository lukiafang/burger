//inside the burgers_controller.js file, import the following:



//Express
// burger.js

// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});




module.exports = router;
