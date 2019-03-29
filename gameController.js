Game = require('./models/gameModel');

exports.index = function (req, res) {
  Contact.get(function (err, game) {
    if (err) {
      res.json({
        status: 'error',
        message: err
      });
    }
    res.json({
      status: 'success',
      message: 'Game info retrieved successfully',
      data: game
    });
  });
};

// Create games
exports.new = function (req, res) {
  let game = new Game();
  game.id = req.body.id;
  game.scenario = req.body.scenario;
  game.currentStep = req.body.currentStep;
  game.choices = req.body.choices;

  // save game info after posting
  game.save(function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: 'New game created!',
        data: game
      });
    }
  });
};
