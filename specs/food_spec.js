var Food = require('../food')
var assert = require('assert')

describe("Food", function() {

  var testNeeps = new Food("neeps", 5); 
  var testHaggis = new Food("haggis", 10);

  it("should have a name", function() {
    assert.equal("neeps", testNeeps.name);
  });

  it("should have a replenishment value", function() {
    assert.equal(5, testNeeps.repValue);
    assert.equal(10, testHaggis.repValue);
  });

});