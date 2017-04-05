function ClozeCard (full, answer) {
	this.full = full;
	this.cloze = answer;

	this.partial = function() {
		// Split the full text and cloze into arrays.
		var fullArr = this.full.split(" ");
		var clozeArr = this.cloze.split(" ");

		// Within the full text, replace cloze with "..."
		var index = fullArr.indexOf(clozeArr[0]);
		fullArr[index] = "...";

		// If cloze is more than word, loop is needed to remove the rest from the full text.
		if (clozeArr.length > 1) {
			for (var i = 1; i < clozeArr.length; i++) {
				var index = fullArr.indexOf(clozeArr[i]);
				fullArr.splice(index, 1);
			}
		}
		console.log(fullArr.join(" "));
	}

	this.reviewCloze = function() {
		
	}
}

module.exports = ClozeCard;

var first = new ClozeCard("my name is erin camomile glabe", "erin camomile glabe");
first.partial();