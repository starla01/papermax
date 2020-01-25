var express = require("express");
var path = require("path");
var app = express();

app.use(express.static("./"));

app.get("/:name", function(req, res, next) {
  var options = {
    root: path.join(__dirname, ""),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };

  var fileName = req.params.name;

  res.sendFile(fileName, options, function(err) {
    console.log({ fileName });
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(3000, function() {
  console.log("Ready");
});
