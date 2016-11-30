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
var irnBru = new Food("Irn Bru", -1, 0);
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

    return "Barry's health level is now " + barry.health + ", \nand you have " + barry.score + pointPlural;
  }, 
  firstChoice: function(choice) {
    // Note: readlineSync package interprets user input as index of input array; user input of integer n returns n - 1 (so input of 1, for example, is returned as 0, 0 as -1).
    switch ( choice ) {
      case 0:
        barry.eat(haggis);
        return "\n-----------------------------\nYou selected haggis. \n\nThat's Barry's favourite! And a good choice. \nBarry gets a boost, and you score 5 points.";
        break;
      case 1:
        barry.eat(neeps);
        return "\n-----------------------------\nYou selected neeps. \n\nOkay, that's a pretty decent choice. \nBarry gets a bit of a health boost, there.";
        break;
      case 2:
        barry.eat(tatties);
        return "\n-----------------------------\nYou selected tatties. \n\nOkay, that's a pretty decent choice. \nBarry gets a bit of a health boost, there.";
        break;
      case 3:
        barry.eat(rumbledethumps);
        return "\n-----------------------------\nYou selected rumbledethumps. \n\nInteresting choice. Barry gets a terrible dose of wind \n(it's called rumbledethumps -- what did you think was going to happen?). \nHe also gets a fair bit of nutrition, though. You score 3 points.";
        break;
      case 4:
        barry.eat(irnBru);
        return "\n-----------------------------\nYou selected Irn-Bru. \n\nHmmm... Barry loses out a bit on the health side of things, there, \nbut where Irn-Bru's involved there's got to be a bit more to it than that... ";
        break;
      case -1:
        return "\n-----------------------------\nYou selected... nu'hin. \n\nBe like that, then. See if we care."
        break;
    };
  },
  secondChoice: function(choice) {
    // Note: readlineSync package interprets user input as index of input array; user input of integer n returns n - 1 (so input of 1, for example, is returned as 0, 0 as -1).
    switch ( choice ) {
      case 0:
        barry.addWeapon(bagpipes);
        return "\n-----------------------------\nYou went for the bagpipes. \n\nBut wait, what's this... ? \n\nThose aren't just any bagpipes... \n\n...those are the... \n\n     BAGPIPES OF DOOM!!! \n\nThough at this point we've no idea what good that does you. \nHave some points, anyway.";
        break;
      case 1:
        return "\n-----------------------------\nYou decided to investigate the rats. \n\nWeird, but okay... \n\nThree rats introduce themselves as Rizzo, Jai and Ziggy. \nThey seem a bit shady.";
        break;
      case 2:
        return "\n-----------------------------\nYou want Barry to eat something else. \nBarry says: \n\n'Ah cummoan, min. Fur why? Jist et the noo.'\n\nSeems he's not so keen on that suggestion.";
        break;
      case 3:
        barry.eat(irnBru);
        return "\n-----------------------------\nYou decided Barry should have another Irn-Bru. \n\nWell okay, then.";
        break;
      case -1:
        return "\n-----------------------------\nYou selected... nu'hin. \n\nBooooor-ing. \n\n"
        break;
    };
  }
};

// Console -- introduction
console.log("-----------------------------------------------------------------");
console.log(" Barry Gadgie and the Bagpipes of Doom (it's a working title...)");
console.log("-----------------------------------------------------------------");

console.log("Our hero, Barry Gadgie, needs your help to guide him through \nthe danger zone that is Scottish cuisine. \n\nBarry's starting health level is " + barry.health + ", \nand you have " + barry.score + " points. \n\nNow, choose wisely... \n\n-----------------------------");

// Console -- first choice
var foods = ["Haggis", "Neeps", "Tatties", "Rumbledethumps", "Irn-Bru"];
var choiceOne = readlineSync.keyInSelect(foods, "What should Barry have? Select from the list.");
console.log();
console.log(consoleMethod.firstChoice(choiceOne));
console.log();
console.log(consoleMethod.showScores());
console.log("\n-----------------------------\n");

// Console -- second choice
console.log("\nA few rats around here... and some bagpipes. Huh. \n\nWhat do you want to do?\n");
var actions = ["Get the bagpipes", "Investigate the rats", "Eat something else", "Drink another Irn-Bru"];
var choiceTwo = readlineSync.keyInSelect(actions, "Select from the list.");
console.log();
console.log(consoleMethod.secondChoice(choiceTwo));
console.log();
console.log(consoleMethod.showScores());
console.log("\n-----------------------------\n");

// Console -- third choice
