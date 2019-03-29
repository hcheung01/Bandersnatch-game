var mongoose = require('mongoose');

// Schema
var gameSchema = mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  scenario: {
    type: String,
    require: true
  },
  currentStep: {
    type: String,
    require: true
  },
  choices: []
});

// Export Game model
var Game = module.exports = mongoose.model('game', gameSchema);

module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
};
