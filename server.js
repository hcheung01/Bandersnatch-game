const express = require('express');
const path = require('path');
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const scenarios = require('./Scenarios');
// initialize the app
const app = express();

// Middle arrow function and init
const logger = (req, res, next) => {
  // Output request url and method
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  console.log(req.method + ' request');
  next();
};

app.locals.siteName = 'BanderSnatch';

// Set pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(logger);
// Use routes in the App
// app.use(express.static(path.join(__dirname, 'views/static/')));
// Configure parser to handle post requests -- optional

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Storage engine
let game_storage = {};
let game_obj = {};

app.get('/', (req, res) => {
});

// GET all scenarios
app.get('/scenarios', (req, res) => {
  res.render('index', json = scenarios);
});

// POST scenario choice and start a game as JSON and return ID
app.post('/game', (req, res) => {
  let gameUID = uuid();
  // let gameURL = `${req.protocol}://${req.get('host')}${req.originalUrl}`; +'/' + gameUID;

  game_obj['id'] = 'derp';
  game_obj['scenario'] = req.body.scenario;
  game_obj['currentStep'] = 'initial';
  res.json({'id': gameUID});
  // store game to file Storage
  game_storage[gameUID] = game_obj;
  game_obj = {};
});

// GET game with id
app.get('/game/:id', (req, res) => {
  gameId = req.params.id;
  if (req.params.id) {
    const story = require('./scenarios.json');
    console.log(gameId);
    console.log(story['BandersGuru']);
    // game_storage[gameId][] = scenarios[]
    // res.render('game', scenarios = );
  }
});

// Setup server port to 8080
const port = process.env.PORT || 8080;

// Launch app to listen to 8080
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
