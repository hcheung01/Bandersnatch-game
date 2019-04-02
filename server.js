const express = require('express');
const path = require('path');
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const scenarios = require('./Scenarios');
const story = require('./scenarios.json');

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

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err

  if (err.shouldRedirect) {
    res.render('myErrorPage'); // Renders a myErrorPage.html for the user
  } else {
    res.status(err.statusCode).send(err.message); // If shouldRedirect is not defined in our error, sends our original err data
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('/', function (req, res, next) {
  console.log('Accessing the / section');
  next();
});

// Storage engine
let gameStorage = {};
let game_obj = {};

// GET all scenarios
app.get('/scenarios', (req, res) => {
  let line = story.BandersGuru.summary;
  res.render('template', scene = {'scenarios': Object.keys(story), 'line': line});
});

// POST scenario choice and start a game as JSON and return ID
app.post('/game', (req, res) => {
  const allScenarios = Object.keys(story);
  const thisScenario = req.body.scenario;
  let bool = 0;
  for (let i = 0; i < allScenarios.length; i++) {
    if (thisScenario === allScenarios[i]) {
      bool = 1;
    }
  }
  if (bool === 1) {
    const gameUID = uuid();
    game_obj['id'] = gameUID;
    game_obj['scenario'] = req.body.scenario;
    game_obj['currentStep'] = 'initial';
    res.json(game_obj);
    gameStorage[gameUID] = game_obj;
    game_obj = {};
  } else {
    res.json({
      'statusCode': 400,
      'error': 'Bad Request',
      'message': 'invalid query'
    });
  }
});

// GET game with id
app.get('/game/:id', (req, res) => {
  const gameId = req.params.id;
  const game = gameStorage[gameId];
  const scene = gameStorage[gameId].scenario;
  const step = gameStorage[gameId].currentStep;
  let renderChoices = [];
  let renderReasons = [];

  try {
    let arrChoice = [];
    let allChoice = story[scene].nodes[step].choices;
    for (let i = 0; i < allChoice.length; i++) {
      arrChoice.push({'line': allChoice[i]['line']});
      renderChoices.push(allChoice[i]['line']);
      renderReasons.push(allChoice[i]['reason']);
    }
    game.id = 'derp';
    game['choices'] = arrChoice;
  } catch (err) {
    res.status;
  }
  res.render('game', thechoice = {'choice': renderChoices, 'reason': renderReasons});
});

// POST the index of each action
app.post('/game/:id', (req, res) => {
  const gameId = req.params.id;
  const game = gameStorage[gameId];
  const choiceIndex = req.body.choiceIndex;
  const currentGame = gameStorage[req.params.id];

  const scene = gameStorage[gameId].scenario;
  const step = gameStorage[gameId].currentStep;

  try {
    let currentChoices = story[scene].nodes[step].choices[choiceIndex];
    const newIndex = currentChoices.goto;
    if (newIndex === 'success') {
      res.json({'goto': 'success'});
    } else if (newIndex !== 'failure' || newIndex != 'success') {
      game['currentStep'] = newIndex;
      let arrChoices = [];
      let newChoices = story[scene].nodes[newIndex].choices;
      for (let i = 0; i < newChoices.length; i++) {
        arrChoices.push({'line': newChoices[i]['line']});
        game['choices'] = arrChoices;
      }
      res.json(game);
    }
  } catch (err) {
    res.json({'goto': 'failure'});
  }
});

// Elsewhere route
app.get('*', function (req, res, next) {
  let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`);
  err.statusCode = 404;
  err.shouldRedirect = true;
  next(err);
});

// Setup server port to 8080
const port = process.env.PORT || 8080;

// Launch app to listen to 8080
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
