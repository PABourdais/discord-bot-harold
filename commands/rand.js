const randomInt = require('random-int');

module.exports = {
    name: 'rand',
    description: 'rand!',
    execute(msg, args) {
      msg.reply(randomInt(1, 10));
    },
  };