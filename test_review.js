var knight = "Arthur";
var maiden = "Guinevere";
var monster = "Dragon";

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

var hero = {
	wizard: "Merlin",
	weapon: weaponChest[2],
	power: 12,
};

//Hail the king

function swordInTheStone(worthy){
	if (worthy == "Arthur"){
		(worthy = knight)
		console.log("we have found our king " + worthy);
	} else {
		(worthy = knight)
		console.log("We must keep searching, for " + worthy + " is unworthy");
	}
}

swordInTheStone(knight)

//King and Queen

function trueLove(king,queen){
	if (queen == Guinevere && king == Arthur){
		//(king = "Arthur")(queen = "Guinevere")
		console.log("On this day our " + king + " and " + queen + " shall rule happily ever after");
	} else {
		console.log("We must keep searching, for true love must reign over Camelot");
	}
}

truelove(knight,maiden)

// Merlin and the Monster

function epicBattle(wizard,enemy,power){
	if (power < 15 || power = 15)
		console.log("our " + wizard + " has fallen");
	} else if (power > 16 || power = 40) {
		console.log("Our " + wizard + " has almost slain the " + enemy);
	} else {
		console.log("Our " + wizard + "has slain the " + enemy);
	}
}

epicBattle(wizard,monster,power)