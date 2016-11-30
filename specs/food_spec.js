var Food = require('../food')
var assert = require('assert')

describe("Food", function() {

  var testNeeps = new Food("neeps", 5, 0); 
  var testHaggis = new Food("haggis", 10, 5);

  it("should have a name", function() {
    assert.equal("neeps", testNeeps.name);
  });

  it("should have a replenishment value", function() {
    assert.equal(5, testNeeps.repValue);
    assert.equal(10, testHaggis.repValue);
  });

  it("should have a points value", function() {
    assert.equal(0, testNeeps.pointsValue);
    assert.equal(5, testHaggis.pointsValue);
  });

});