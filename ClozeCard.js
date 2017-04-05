function ClozeCard (full, answer) {
	this.full = full;
	this.cloze = answer;

	this.partial = function() {
		var fullArr = this.full.split(" ");
		console.log(fullArr);  // 'George', 'Washington', 'was', 'the', 'first', 'president'
		var clozeArr = this.cloze.split(" ");
		console.log(clozeArr);  // 'George', 'Washington'

		var index = fullArr.indexOf(clozeArr[0]);
		console.log(index);
		console.log(fullArr[index]);

		fullArr[index] = "...";
		console.log(fullArr);

		if (clozeArr.length > 1) {
			for (var i = 1; i < clozeArr.length; i++) {
				var index = fullArr.indexOf(clozeArr[i]);
				fullArr.splice(index, 1);
			}
		}
		console.log(fullArr.toString());
	}

	this.reviewCloze = function() {
		
	}
}

module.exports = ClozeCard;

var first = new ClozeCard("George Washington was the first president", "George Washington");
console.log(first.full);
first.partial();