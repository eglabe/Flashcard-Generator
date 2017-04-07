var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var fs = require("fs");
var chalk = require("chalk");
var inquirer = require("inquirer");


var command = process.argv[2];

if (!command) {
	console.log(chalk.blue.bold("Instructions: ")
	+ "\nUse command" + chalk.green.bold(" add ") + "to follow the prompts and add a new flashcard."
	+ "\nUse command" + chalk.green.bold(" basic ") + "to view the basic flashcards."
	+ "\nUse command" + chalk.green.bold(" cloze ") + "to view the cloze flashcards."
	// + "\nUse command" + chalk.green.bold(" study ") + "to study your flashcards."
	// + "\nUse command" + chalk.green.bold(" review ") + "to review what you have learned."
	);
}

switch(command) {
	case "add":
        addCard()
        break;
    case "basic":
        viewBasic()
        break;        
    case "cloze":
        viewCloze()
        break;
    // case "study":
    //     studyBasic()
    //     break;        
    // case "review":
    //     reviewCloze()
    //     break;
}


function addCard() {
	inquirer.prompt([
		{
		  name: "question",
		  message: "Type in a study question. (e.g. What is the third planet from the Sun?)"
		}, {
		  name: "answer",
		  message: "What is the anwer to the question you asked? (e.g. Earth)"
		}, {
		  name: "full",
		  message: "Combine the 'queston' and 'answer' above into one statement. (e.g. Earth is the third planet from the Sun.)"
		}
	]).then(function(input) {

		// 1. read all the current file contents into an array

		// 2. add new card to that array

		// 3. overwrite over file

		// BASIC CARD 
		var basicArr = [];
		fs.readFile("basic.txt", "utf8", function(err, data) {
			basicArr.push(data);
			// basicArr.push(JSON.parse(data), function(){});
		});

		var newBasicCard = new BasicCard(input.question, input.answer);
		basicArr.push(newBasicCard);

		fs.writeFile("basic.txt", JSON.stringify(basicArr), function(){});


		// CLOZE CARD
		var clozeArr = [];
		fs.readFile("cloze.txt", "utf8", function(err, data) {
			clozeArr.push(data);
			// clozeArr.push(JSON.parse(data), function(){});
		});

		var newClozeCard = new ClozeCard(input.full, input.answer);
		newClozeCard.partial();
		clozeArr.push(newClozeCard);

		fs.writeFile("cloze.txt", JSON.stringify(clozeArr), function(){});
	});
}

function viewBasic() {
    fs.readFile('basic.txt', 'utf8', function(err, data) {
	var allBasicCards = JSON.parse(data);

	console.log(JSON.stringify(allBasicCards[0], null, 2));
    });
}

function viewCloze() {
    fs.readFile('cloze.txt', 'utf8', function(err, data) {
	var allClozeCards = JSON.parse(data);

	console.log(JSON.stringify(allClozeCards[0], null, 2));
    });
}

// function studyBasic() {
	// // Loop through cards one at a time
// }

// function reviewCloze() {
	// // Loop through cards one at a time
// }








