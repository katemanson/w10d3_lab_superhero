var Weapon = function(name, dmgValue, disposable, value) {
  this.name = name;
  this.dmgValue = dmgValue;
  this.disposable = disposable;
  this.value = value;
}

Weapon.prototype = {
  doDamage: function(enemy) {
    enemy.health -= this.dmgValue;
  }
}

module.exports = Weapon;