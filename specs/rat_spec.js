var Rat = require("../rat");
var Food = require("../food");
var assert = require("assert");

describe("Rat", function() {

  var testRat = new Rat();
  var testNeeps = new Food("neeps", 5); 

  it("should make food poisonous", function() {
    testRat.touchFood(testNeeps);
    assert.equal(-5, testNeeps.repValue);
  });

  it("if food already poisonous, no change to replenishment value", function() {
    testRat.touchFood(testNeeps);
    assert.equal(-5, testNeeps.repValue);
  });

});