var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var fs = require("fs");


var command = process.argv[2];

if (!command) {
	console.log("Instructions: "
	+ "\nUse command 'add' to follow the prompts and add a new flashcard."
	// + "\nUse command 'study' to study your flashcards."
	// + "\nUse command 'review' to review what you have learned."
	);
}

switch(command) {
	case "add":
        addCard()
        break;
    case "study":
        //studyBasic()
        fs.readFile('basic.txt', 'utf8', function(err, data) {
        	var allTheCards = JSON.parse(data);

        	console.log(JSON.stringify(allTheCards[0], null, 2));
        });

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

		// 1. read all the current file contents into an array

		// 2. add new card to that array

		// 3. overwrite over file

		// BASIC CARD
		var basicArr = [];
		fs.readFile("basic.txt", "utf8", function(err, data) {
			basicArr.push(JSON.parse(data));
		console.log(basicArr);
		})

		var newBasicCard = new BasicCard(input.question, input.answer);
		basicArr.push(newBasicCard);
		console.log(basicArr);

		fs.writeFile("basic.txt", JSON.stringify(basicArr), function(){});


		// CLOZE CARD
		var clozeArr = [];
		fs.readFile("cloze.txt", "utf8", function(err, data) {
			clozeArr.push(JSON.parse(data));
		console.log(clozeArr);
		})

		var newBasicCard = new BasicCard(input.question, input.answer);
		clozeArr.push(newBasicCard);
		console.log(clozeArr);

		fs.writeFile("cloze.txt", JSON.stringify(clozeArr), function(){});
	});
}

// addCard function to initiate constructors

// store new data to data.txt






