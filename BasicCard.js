var fs = require("fs");

function BasicCard (question, answer) {
	this.question = question;
	this.answer = answer;

	this.printBasicData = function() {
		var flashcard = "\nQuestion: " + this.question + " Answer: " + this.answer;
		fs.appendFile("basic.txt", flashcard);
	}

	this.studyBasic = function() {
		
	}
}

module.exports = BasicCard;