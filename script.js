const form = $("form");
const reload = $("#reload");
const messageView = $("#message");
const finishMessage = $("#onFinish");
const rightAnswers = ["Emperor", "Shogun", "Daimyo","Samurai", "Ronin", "Peasants", "Artisans", "Merchants", "Outcasts", "3", "justice", "compassion", "honour", "loyalty", "courage", "honesty", "self-control"];
let message = "Oh no! You messed up on: <br>";
let isWrong, questionOneWrong, questionTwoWrong, questionThreeWrong = false;

form.css("display", "block");
finishMessage.css("display", "none");

function checkAns() {
	let answers = form.serializeArray();

	if (answers.length !== rightAnswers.length && !questionThreeWrong) {
		message += "question 3<br>";
		questionThreeWrong = true;
	}

	for (let i = 0; i < answers.length; i++) {
		if (answers[i].value !== rightAnswers[i]) {
			if (i < 9 && !questionOneWrong) {
				message += "question 1<br>";
				questionOneWrong = true;
			} else if (i === 9 && !questionTwoWrong) {
				message += "question 2<br>";				
				questionTwoWrong = true;
			} else if (i > 9 && !questionThreeWrong) {
				message += "question 3<br>";
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
	messageView.html(message);
	form.css("display", "none");
	finishMessage.css("display", "block");
});

reload.on("click", function() {
	location.reload();
});