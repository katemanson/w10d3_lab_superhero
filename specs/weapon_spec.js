var Weapon = require("../weapon");
var assert = require("assert");


describe("Weapon", function() {

  var bagpipes = new Weapon("Bagpipes of Doom", 50);

  it("should have a name", function() {
    assert.equal("Bagpipes of Doom", bagpipes.name);
  });

  it("should have a damage value", function() {
    assert.equal(50, bagpipes.dmgValue);
  });

});