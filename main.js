console.log("Instructions: " + 
	"\nUse command 'add' to follow the prompts and add a new flashcard.");


var command = process.argv[2];

switch(command) {
	case add:
        addCard()
        break;
    case review:
        review()
        break;
    default:
        example()
}