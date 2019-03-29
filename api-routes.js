// Filename: api-routes.js

// Initialize express router
let router = require('express').Router();

// Unique Id
const uuidv1 = require('uuid/v1');

// Import json
let json_obj = require('./scenarios');

// Import game controller
// var gameController = require('./gameController');

// router.route('/game')
  // .get(gameController.index)
  // .post(gameController.new);

// Set default API response
router.get('/', function (req, res) {
  res.render('index', { title: 'BandersGuru', message: 'Ready to create your own story?' });
});

router.get('/scenarios', function (req, res) {
  res.json({
    'scenarios': [
      'BandersGuru'
    ]
  });
});

router.post('/game', function (req, res) {
  res.json({
    'id': uuidv1(),
    'scenario': 'BandersGuru',
    'currentStep': 'initial'
  });
});

router.get('/game/:id', function (req, res) {
  res.send(req.params);
});

router.post('/game/:id', function (req, res) {
  res.send('GAME ID POSTED');
});

// Export API routes
module.exports = router;
