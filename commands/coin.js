const randomChoice = require('random-choice');

module.exports = {
  name: 'coin',
  description: 'Coin!',
  execute(msg, args) {
    msg.reply(randomChoice(['pile', 'face'], [1, 1]));
  },
};
