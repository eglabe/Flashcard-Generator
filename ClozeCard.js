var fs = require("fs");

function ClozeCard (full, answer) {
	this.full = full;
	this.cloze = answer;

	this.partial = function() {
		// Split the full text and cloze into arrays.
		var fullArr = this.full.split(" ");
		var clozeArr = this.cloze.split(" ");

		// Within the full text, replace cloze with "..."
		var index = fullArr.indexOf(clozeArr[0]);
		fullArr[index] = "...";

		// If cloze is more than word, loop is needed to remove the rest from the full text.
		if (clozeArr.length > 1) {
			for (var i = 1; i < clozeArr.length; i++) {
				var index = fullArr.indexOf(clozeArr[i]);
				fullArr.splice(index, 1);
			}
		}

		// Turns the text array into a string and replaces commas for spaces.
		partialCloze = fullArr.join(" ");

		return partialCloze;
	}

	this.printClozeData = function() {
		var flashcard = "\nFull Text: " + this.full + " Partial Text: " + this.partial() + " Cloze: " + this.cloze;
		fs.appendFile("cloze.txt", flashcard, function(){});
	}

	this.reviewCloze = function() {
		
	}
}

module.exports = ClozeCard;

// // Text
// var first = new ClozeCard("my name is john jacob jingleheimer schmidt", "john jacob jingleheimer schmidt");
// console.log(first.full);
// console.log(first.cloze);
// first.partial();
// console.log(first.partial());
