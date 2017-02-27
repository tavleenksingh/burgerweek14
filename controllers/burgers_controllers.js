var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerData = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burgerData.selectAll(function(data) {
    var bObject = {
      burgers: data
    };
    console.log(bObject);
    res.render("index", bObject);
  });
});

router.post("burgers/create", function(req, res) {
  burgerData.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("burgers/update", function(req, res) {
    burgerData.updateOne([
        "id"
    ], [
      req.body.id,
    ], function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

