var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var command = process.argv[2];

if (!command) {
	console.log("Instructions: "
	+ "\nUse command 'add' to follow the prompts and add a new flashcard."
	// + "\nUse command 'study' to study your flashcards."
	// + "\nUse command 'review' to review your flashcards."
	);
}

switch(command) {
	case "add":
        addCard()
        break;
    case "study":
        studyBasic()
        break;        
    case "review":
        reviewCloze()
        break;
}


function addCard() {
	inquirer.prompt([
		{
		  name: "question",
		  message: "Type in a study question. (front of flashcard)"
		}, {
		  name: "answer",
		  message: "What is the anwer to the question you asked? (back of flashcard)"
		}, {
		  name: "full",
		  message: "Turn the 'queston' and 'answer' above into a full sentence. (for review)"
		}
	]).then(function(input) {

		var newBasicCard = new BasicCard(input.question, input.answer);

		var newClozeCard = new ClozeCard(input.full, input.answer);
		newClozeCard.partial();

	});
}

// addCard function to initiate constructors

// store new data to data.txt






