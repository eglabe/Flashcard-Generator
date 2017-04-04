console.log("Instructions: "
	+ "\nUse command 'add' to follow the prompts and add a new flashcard."
	// + "\nUse command 'study' to study your flashcards."
	// + "\nUse command 'review' to review your flashcards."
);


var command = process.argv[2];

switch(command) {
	case add:
        addCard()
        break;
    case study:
        studyBasic()
        break;        
    case review:
        reviewCloze()
        break;
}


// write inquirer prompts

// addCard function to initiate constructors

// store new data to data.txt