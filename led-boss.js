/**
 * Third exercise of the NodeBots Workshop Meetup
 * http://acingraham.github.io/reveal.js/#/34
 *
 * > led.on();
 * > led.off();
 * > led.blink();
 * > led.stop();
 * > led.pulse();
 */
 
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);

  this.repl.inject({
    led: led
  });
});
