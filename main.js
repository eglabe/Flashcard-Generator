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

		var newCard = new BasicCard(input.question, input.answer, input.full);

		// initializes the variable newguy to be a programmer object which will take
		// in all of the user's answers to the questions above
		var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
		// printInfo method is run to show that the newguy object was successfully created and filled
		newGuy.printInfo();
	});
}

// addCard function to initiate constructors

// store new data to data.txt






