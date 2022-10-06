const form = $("form");
const reload = $("#reload");
const rightAnswers = ["Emperor", "Shogun", "Daimyo","Samurai", "Ronin", "Peasants", "Artisans", "Merchants", "Outcasts", "3", "justice", "compassion", "honour", "loyalty", "courage", "honesty", "self-control"];
let message = "Oh no! You messed up on";
let isWrong, questionOneWrong, questionTwoWrong, questionThreeWrong = false;

function checkAns() {
	let answers = form.serializeArray();

	if (answers.length !== rightAnswers.length && !questionThreeWrong) {
		message += "question 3\n";
		questionThreeWrong = true;
	}

	for (let i = 0; i < answers.length; i++) {
		if (answers[i].value !== rightAnswers[i]) {
			if (i < 9 && !questionOneWrong) {
				message += "question 1\n";
				questionOneWrong = true;
			} else if (i === 9 && !questionTwoWrong) {
				message += "question 2\n";				
				questionTwoWrong = true;
			} else if (i > 9 && !questionThreeWrong) {
				message += "question 3\n";
				questionThreeWrong = true;
			}
		}
	}

	if (questionOneWrong || questionTwoWrong || questionThreeWrong) {
		isWrong = true;
	}
	if (!isWrong) {
		message = "You got it right!!";
	}
}

form.on("submit", function (e) {
	e.preventDefault();
	checkAns();
	console.log(message);
});

reload.on("click", function() {
	location.reload();
});