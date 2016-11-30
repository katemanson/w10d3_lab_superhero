var Enemy = require("../enemy");
var Rat = require("../rat");
var assert = require("assert");

describe("Enemy", function() {

  var hairy = new Enemy("Hairy McGangle", 80);
  var rat = new Rat("Roland", 50);

  it("should have a name", function() {
    assert.equal("Roland", rat.name);
    assert.equal("Hairy McGangle", hairy.name);
  });

  it("should have health", function() {
    assert.equal(80, hairy.health);
    assert.equal(50, rat.health);
  });


})