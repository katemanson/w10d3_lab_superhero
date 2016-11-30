var Enemy = require("./enemy");

function Hairy (name, health) {
  this.name = name;
  this.health = health;
};

Hairy.prototype = new Enemy();

// Hairy.prototype. = function() {
//   if ( this.health > 0 ) {

//   };
// };

module.exports = Hairy;
