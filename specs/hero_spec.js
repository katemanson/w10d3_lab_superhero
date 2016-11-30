var Hero = require("../hero");
var Food = require("../food");
var Rat = require("../rat");
var assert = require("assert");

describe("Hero", function() {

  var testHero = new Hero("Tartan Man", "haggis");
  var testHaggis = new Food("haggis", 10);
  var testNeeps = new Food("neeps", 5); 
  var testRat = new Rat();

  beforeEach(function() {
    testHero.health = 100;
  })

  it("should have a name", function() {
    assert.equal("Tartan Man", testHero.name);
  });

  it("should have health", function() {
    assert.equal(100, testHero.health);
  });

  it("should have a favourite food", function() {
    assert.equal("haggis", testHero.faveFood);
  });

  it("should be able to say its name", function() {
    assert.equal("Hey, I am Tartan Man", testHero.talk());
  });

  it("should increase health by replenishment value on eating non-favourite food", function() {
    testHero.eat(testNeeps);
    assert.equal(105, testHero.health);
  });

  it("should increase health with multiplier 1.5 on eating favourite food", function() {
    testHero.eat(testHaggis);
    assert.equal(115, testHero.health);
  });

  it("should lose health if eat poisonous food", function() {
    testRat.touchFood(testHaggis);
    testRat.touchFood(testNeeps);
    testHero.eat(testHaggis);
    testHero.eat(testNeeps);
    assert.equal(80, testHero.health);
  });

});