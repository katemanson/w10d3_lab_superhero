var Hero = require("../hero");
var Food = require("../food");
var Rat = require("../rat");
var Weapon = require("../weapon");
var assert = require("assert");

describe("Hero", function() {

  var testHero = new Hero("Barry Gadgie", "haggis");
  var testHaggis = new Food("haggis", 10, 5);
  var testNeeps = new Food("neeps", 5, 0); 
  var testRumbledethumps = new Food("rumbledethumps", 12, 3);
  var testRat = new Rat("Roland", 50);
  var bagpipes = new Weapon("Bagpipes of Doom", 50, false, 7);
  var teacake = new Weapon("Teacake of Fate", 30, true);
  var irnBru = new Food("Irn Bru", -1);

  beforeEach(function() {
    testHero.health = 100;
    testHero.weapons = [];
    testHero.score = 0;
    testHero.irnBruCounter = 0;
    testRat.health = 50;
  });

  it("should have a name", function() {
    assert.equal("Barry Gadgie", testHero.name);
  });

  it("should have health", function() {
    assert.equal(100, testHero.health);
  });

  it("should have a favourite food", function() {
    assert.equal("haggis", testHero.faveFood);
  });

  it("should be able to say his/her name", function() {
    assert.equal("Hey, I am Barry Gadgie", testHero.talk());
  });

  it("should increase health by replenishment value on eating non-favourite food", function() {
    testHero.eat(testNeeps);
    assert.equal(105, testHero.health);
  });

  it("should increase health with multiplier 1.5 on eating favourite food", function() {
    testHero.eat(testHaggis);
    assert.equal(115, testHero.health);
  });

  it("should increase Irn Bru counter on drinking an Irn Bru", function() {
    testHero.eat(irnBru);
    assert.equal(1, testHero.irnBruCounter);
  });

  it("should get an Irn Bru Burp after drinking three Irn Brus", function() {
    for ( var i = 0; i < 3; i++ ) {
      testHero.eat(irnBru);
    };
    assert.equal(0, testHero.irnBruCounter);
    assert.equal(1, testHero.weapons.length);
    assert.equal("Unleash the Burp", testHero.weapons[0].name);
    assert.equal(97, testHero.health);
  });

  it("should lose health on eating poisonous food", function() {
    testRat.touchFood(testHaggis);
    testHero.eat(testHaggis);
    assert.equal(85, testHero.health);
    testRat.touchFood(testNeeps);
    testHero.eat(testNeeps);
    assert.equal(80, testHero.health);
  });

  it("should score points for user on eating food with a points value", function() {
    testHero.eat(testHaggis);
    assert.equal(5, testHero.score);
    testHero.eat(testRumbledethumps);
    assert.equal(8, testHero.score);
  });

  it("should not score points for user on eating food with a zero points value", function() {
    testHero.eat(testNeeps);
    assert.equal(0, testHero.score);
  });

  it("should be able to get a weapon and gain points", function() {
    testHero.addWeapon(bagpipes);
    assert.equal(1, testHero.weapons.length);
    assert.equal("Bagpipes of Doom", testHero.weapons[0].name);
    assert.equal(7, testHero.score);
  });

  it("should be able to use a weapon (s)he's got", function() {
    testHero.addWeapon(bagpipes);
    assert.equal("Ye've kilt it!", testHero.useWeapon(bagpipes, testRat));
    assert.equal(0, testRat.health);
  });

  it("shouldn't be able to use a weapon (s)he hasn't got", function() {
    testHero.useWeapon(teacake, testRat);
    assert.equal(50, testRat.health);
  });

  it("should lose disposable weapon after one use", function() {
    testHero.addWeapon(teacake);
    assert.equal(1, testHero.weapons.length);
    testHero.useWeapon(teacake, testRat);
    assert.equal(20, testRat.health);
    assert.equal(0, testHero.weapons.length);
  });

});