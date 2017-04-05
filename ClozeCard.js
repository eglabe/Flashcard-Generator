function ClozeCard (full, answer) {
	this.full = full;
	this.cloze = answer;

	this.partial = function() {
		var fullArr = this.full.split(" ");
		console.log(fullArr);  // 'George', 'Washington', 'was', 'the', 'first', 'president'
		var clozeArr = this.cloze.split(" ");
		console.log(clozeArr);  // 'George', 'Washington'

		
		
		// var index = this.full.indexOf("George");
		// console.log(index);
		// console.log(this.full[index]);
	}

	this.reviewCloze = function() {
		
	}
}

module.exports = ClozeCard;

var first = new ClozeCard("George Washington was the first president", "George Washington");
console.log(first.full);
first.partial();