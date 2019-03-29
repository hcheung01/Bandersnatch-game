// File: index.js

// Import express
let express = require('express');

// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Import routes from api-routes
let apiRoutes = require('./api-routes');

// initialize the app
let app = express();

// Setup server port to 8080
let port = process.env.PORT || 8080;

// Configure parser to handle post requests -- optional
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/bandersguru', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/bandersguru');
var db = mongoose.connection;

// Set default views
app.set('views', './views');

// Use pug template engine
app.set('view engine', 'pug');

// Use routes in the App
app.use('/', apiRoutes);

// Launch app to listen to 8080
app.listen(port, function () {
  console.log('Running on port ' + port);
});
