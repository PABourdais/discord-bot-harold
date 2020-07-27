const randomInt = require('random-int');

module.exports = {
    name: 'rand',
    description: 'rand!',
    execute(msg, args) {
        console.log(typeof args[0])
        if ( args[0] === undefined) {
            msg.reply(randomInt(1, 10));
        }
        else if(args[0] >= 2) {
            msg.reply(randomInt(1, parseInt(args[0])));
        } 
        else if(args[0] >= 0){
            msg.reply('Donner une valeur supérieure à 1');
        } 
    },
  };