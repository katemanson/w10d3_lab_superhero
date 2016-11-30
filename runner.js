// Dependencies
var readlineSync = require("readline-sync");
var Hero = require("./hero");
var Food = require("./food");
var Rat = require("./rat");
var Hairy = require("./hairy");
var Weapon = require("./weapon");

// Cast
var barry = new Hero("Barry Gadgie", "haggis");
var haggis = new Food("haggis", 10, 5);
var neeps = new Food("neeps", 5, 0); 
var tatties = new Food("tatties", 3, 0); 
var rumbledethumps = new Food("rumbledethumps", 12, 3);
var irnBru = new Food("Irn Bru", -5, 0);
var rizzoRat = new Rat("Rizzo", 50);
var jaiRat = new Rat("Jai", 40);
var ziggyRat = new Rat("Ziggy", 30);
var hairyBean = new Hairy("Sawney Bean", 60);
var hairyOxter = new Hairy("Tam the Oxter", 40);
var hairyMary = new Hairy("Mary", 40);
var bagpipes = new Weapon("Bagpipes of Doom", 50, false, 7);
var teacake = new Weapon("Teacake of Destiny", 30, true, 12);

//
var consoleMethod = {
  showScores: function() {
    var pointPlural = "";
    if ( barry.score === 1 ) {
      pointPlural = " point.";
    }
    else { 
      pointPlural = " points.";
    };

    return "Now, Barry's health level is " + barry.health + ", \nand you have " + barry.score + pointPlural;
  }
};

// Console
console.log();
console.log("[Working title...] Barry Gadgie and the Bagpipes of Doom");
console.log();

console.log("Our hero, Barry Gadgie, needs your help to guide him through the danger zone that is Scottish cuisine. Choose wisely...");
console.log();
console.log(consoleMethod.showScores());

var foods = ["Haggis", "Neeps", "Tatties", "Rumbledethumps", "Irn Bru"];
var choice = readlineSync.keyInSelect(foods, "What should Barry have?");

switch ( choice ) {
  case 1:
    barry.eat(haggis);

    console.log("Barry's favourite! Good choice. \nBarry gets a boost, and you score 5 points.");
    console.log();
    console.log(consoleMethod.showScores());
    break;
  case 2:
    barry.eat(neeps);
    console.log("Okay, that's a decent choice. Barry gets a bit of a health boost, there.");
    console.log();
    console.log(consoleMethod.showScores());
    break;
  case 3:
    barry.eat(tatties);
    console.log("Okay, that's a decent choice. Barry gets a bit of a health boost, there.");
    console.log();
    console.log(consoleMethod.showScores());
    break;
  case 4:
    barry.eat(rumbledethumps);
    console.log("Interesting choice. Barry gets a terrible dose of wind (it's called rumbledethumps -- what did you think was going to happen?), but also a fair bit of nutrition. You score 3 points.");
    console.log();
    console.log(consoleMethod.showScores());
    break;
  case 5:
    barry.eat(irnBru);
    console.log("Hmmm... Barry loses out a bit on the health side of things, there, however where Irn-Bru's involved there's got to be a bit more to it than that... ");
    console.log();
    console.log(consoleMethod.showScores());
    break;
  case 0:
    break;
}


