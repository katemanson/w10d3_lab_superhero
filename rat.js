var Enemy = require("./enemy");

Rat.prototype = new Enemy();

Rat.prototype.constructor = Rat;

function Rat (name, health) {
  this.name = name;
  this.health = health;
};

Rat.prototype.touchFood = function(food) {
  if ( food.repValue > 0 && this.health > 0 ) {
    food.repValue = -(food.repValue);
  };
};

module.exports = Rat;