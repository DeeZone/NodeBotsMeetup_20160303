/**
 * Second exercise of the NodeBots Workshop Meetup
 *
 * http://acingraham.github.io/reveal.js/#/30
 */
 
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(11);

  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
});
