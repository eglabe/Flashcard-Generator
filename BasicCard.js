
function BasicCard (question, answer) {
	this.question = question;
	this.answer = answer;

	this.printBasicData = function() {
		return "\nQuestion: " + this.question + " Answer: " + this.answer;
		
	}

	this.studyBasic = function() {
		
	}
}

module.exports = BasicCard;