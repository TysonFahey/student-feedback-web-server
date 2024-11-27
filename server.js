const express = require("express"); //import express library
const path = require("path"); // import library called path which is used to connect addresses of files
const bodyParser = require('body-parser') // tell express app to use bodyParser

const indexRouter = require("./routes/index"); // import index.js file

const app = express(); // this creates the web application server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({extended: false}))


const staticFileLocation = path.join(__dirname, 'public') // tells express where the location is. then tell web app to use the styles.
  app.use(express.static(staticFileLocation))


// tell the app where the views are. views are html files or templates
app.set("views", path.join(__dirname, "views")); // __dirname is current location of where this is stored. joining with views creates the correct path to the directory
app.set("view engine", "hbs"); // use handlebars to generate views

app.use("/", indexRouter); // all the requests of the app will be passed to indexRouter which will find out what the requests mean and generate responses

// start server running
let server = app.listen(process.env.PORT || 3000, function () {
  console.log("Server running on port", server.address().port);
}); // if told a specific port to run on, use it otherwise use 3000 as the port
