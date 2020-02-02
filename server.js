//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/my-hotel-app"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/my-hotel-app/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000!!");
});
