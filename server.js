var express = require("express");
var app = express();

var ejs = require("ejs");

app.set("view_engine", "ejs")
app.use(express.static(__dirname + "/public"));

// app.get("/goodbye", function(req, res) {
//   res.send("Goodbye!");
// });

// app.get("/:name", function(req, res) {
//   var nameParam = req.params.name;
//   var data = ejs.render("Hello, <%= name %>", {name: nameParam});
//   res.send(data);
// });

app.get("/", function(req, res) {
  res.render("index.ejs");
});

var server = app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});

