var Weapon = require("./weapon");

var Hero = function(name, faveFood) {
  this.name = name;
  this.health = 100;
  this.faveFood = faveFood;
  this.weapons = [];
  this.score = 0;
  this.irnBruCounter = 0;
};

Hero.prototype = {
  talk: function(){
    return "Hey, I am " + this.name;
  },
  eat: function(food) {
    if ( food.name === "Irn Bru" ) {
      this.health += food.repValue;
      this.irnBruCounter++;
      if ( this.irnBruCounter >= 3 ) {
        var irnBruBurp = new Weapon("Unleash the Burp", 100, true);
        this.weapons.push(irnBruBurp);
        this.irnBruCounter -= 3;
      }
    }
    else if ( food.name === this.faveFood ) {
      this.health += (food.repValue * 1.5);
    }
    else {
      this.health += food.repValue;
    };
  },
  addWeapon: function(weapon) {
    this.weapons.push(weapon);
    this.score += weapon.value;
  }, 
  useWeapon: function(weapon, enemy) {
    for ( var item of this.weapons ) {
      if ( item === weapon ) {
        weapon.doDamage(enemy);
      }
    };
    var index = this.weapons.indexOf(weapon);
    if (weapon.disposable) {
      this.weapons.splice(index, 1);
    };
    if ( enemy.health <= 0 ) {
      return "You've kilt it!";
    };
  }
};

module.exports = Hero;