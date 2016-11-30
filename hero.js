var Hero = function(name, faveFood) {
  this.name = name;
  this.health = 100;
  this.faveFood = faveFood;
};

Hero.prototype = {
  talk: function(){
    return "Hey, I am " + this.name;
  },
  eat: function(food) {
    if ( food.name === this.faveFood ) {
      this.health += (food.repValue * 1.5);
    }
    else this.health += food.repValue;
  }
};

module.exports = Hero;