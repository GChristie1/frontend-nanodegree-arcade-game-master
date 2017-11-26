/**
* @ description Represents the Enemies in the Game
* @ Constructor The Enemy
* @param {position} x - The position on the enemy on the x axis
* @param {position} y - The position on the enemy on the y axis
*/
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // this is the speed of the enemy on the x axis
    this.x = this.x + (this.speed * dt);
    // Keeps enemies looping from beginning to end
    if(this.x > 515){
        this.x = -60;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is where the height and width are defined for enemy
Enemy.prototype.width = 100;
Enemy.prototype.height = 50;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 370;

};

// This is where the height and width are defined for the player
Player.prototype.width = 100;
Player.prototype.height = 100;

// this function allows the player to reset back to its starting position
Player.prototype.PlayerReset = function(){
    this.x = 200;
    this.y = 370;

}

// this function is so the player resets when collision happens with the enemy
Player.prototype.hitDetection = function(){
    for(var i = 0; i < allEnemies.length; i++){
        // These variables are set to equal the x and y values of the allEnemies array
        var e = allEnemies[i].x;
        var e2 = allEnemies[i].y;
        // this if statement allows the player and enemy to collide
        if(this.x + 30 < e + allEnemies[i].width &&
        this.x + this.width > e + 30 && 
        this.y < e2 + allEnemies[i].height && 
        this.y + this.height > e2 ){
             // return back to the PlayerReset function
            alert("Ouch! You've been hit");
             return this.PlayerReset();
        }
    }
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.hitDetection();
   
};


// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(userinput){
    // make player move according to key code
    if(userinput === 'up'){
        this.y = this.y - 80;
        if(this.y < 0){
            // this alerts the player that they have won and the game resets 
            alert("You Win!");
           this.PlayerReset();
        }
    }
    if(userinput === 'down'){
        // keep player on the screen going down
        if(this.y < 350){
            this.y = this.y + 80;
        }
    }
    if(userinput === 'right'){
        // keep player on the screen going right
        if(this.x < 305){
            this.x = this.x + 101;
        }
    }
    if(userinput === 'left'){
        // keep player on the screen going left
        if(this.x > 0){
            this.x = this.x - 101;   
        }
        
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(-60,140, 60),new Enemy(-60, 225, 30),new Enemy(-120, 60, 120),new Enemy(-200, 60, 90), new Enemy(-100, 225, 65),new Enemy(-45,140, 20)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
