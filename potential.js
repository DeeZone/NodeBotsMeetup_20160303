/**
 * Potential Button Solution - Code
 * http://acingraham.github.io/reveal.js/#/57/4
 */
 
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo(11);
  var button = new five.Button(2);

  button.on("press", function() {
    servo.sweep();
  });

  button.on("release", function() {
    servo.stop();
  });
});
