var Rat = function() {};

Rat.prototype = {
  touchFood: function(food) {
    if ( food.repValue > 0 ) {
      food.repValue = -(food.repValue);
    };
  }
};

module.exports = Rat;