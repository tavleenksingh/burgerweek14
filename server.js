var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
// Here, we are going to incorporate our bodyparser NPM package using express. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json" }));

// Here, we are going to incorporate our method override NPM package using express. 
app.use(methodOverride("_method"));

// Here, we are going to incorporate our handlebars NPM package using express. 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");



app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(port, function() {
  console.log("Listening on port:%s", port);
});




