const express = require('express');
//import express from 'express';
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyparser = require('body-parser');
//import bodyparser from 'body-parser';


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//import apiRoutes from './routes/apiRoutes';
//apiRoutes(app);
require('./routes/apiRoutes')(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
