var Weapon = function(name, dmgValue) {
  this.name = name;
  this.dmgValue = dmgValue;
}

Weapon.prototype = {
  doDamage: function(enemy) {
    enemy.health -= this.dmgValue;
  }
}

module.exports = Weapon;