/**
 * Exercise six of the NodeBots Workshop Meetup
 * http://acingraham.github.io/reveal.js/#/55
 */
 
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var servo = new five.Servo(11);

  this.repl.inject({
    servo: servo
  });
});
