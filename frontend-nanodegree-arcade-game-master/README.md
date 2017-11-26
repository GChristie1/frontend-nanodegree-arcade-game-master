frontend-nanodegree-arcade-game
===============================

The Objective of the Game

*Use JS to build functions Classes and Subclasses to populate a game
 environment *Use JS to randomize speed and position of enemies and 
 to respond to key input with player movement*Create collision 
 detection when reaching water or when getting caught by a bug.

The game was developed purely within JS with sprite objects and the
use of pseudo-classical classes within Javascript. It is primarily 
built within the engine.js file which controls the time based update 
check every second, as well as containing all of the information on 
collision detection by comparing bug positions against player position,
or when the players height position reaches the waterline.

Within the app.js file we build the actual player model set his speed
and initial position, after which we set the canvas frame boundries and
make the player input a straight return at the boundry rather than a 
valid movement. We also define what the distance for each movement 
direction is, in this case 80 pixels up or down and 101 pixels to the 
left or right. We then update the player position within the next 
canvas update by taking his current position and setting a playerReset
method to bring the player back to its original starting position.

For the enemy class within app.js we create a base for the enemy bugs
to be defined by giving a blank speed, x, and y variable and defining 
the sprite. We modify how fast each bug moves by setting the value of x 
equal to the position of x, plus the param(speed) mulitiplied by the 
param(dt) in the update object.  

Toward the end of the app.js file we instantiate a Player object and 
a Enemy object array that pushes out mulitple enemies with positions
and speeds.

In order to use this application you simply have to open the index.html
file with a browser of your choice. The Javascript programming codes 
will perform the functions invoked with the html code that links the 
two together, and user will be able to operate the application.

To play the game simply use the arrow keys on your keyboard to control 
the Player and avoid hitting the bugs. If you make it to the water, a 
message will appear letting the user know that they have won the game.

HAVE FUN! :)