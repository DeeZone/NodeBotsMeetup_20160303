/**
 * First exercise of the NodeBots Workshop Meetup
 * 
 * Based on http://acingraham.github.io/reveal.js/#/22
 */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(13);

  led.blink(500);
});
