const form = $("form");
const rightAnswers = ["emperor", "shogun", "daimyo","samurai", "ronin", "peasants", "artisans", "merchants", "outcasts", "3", "justice", "compassion", "honour", "loyalty", "courage", "honesty", "self-control"];
let message = "You got them ALL right!! Great Job! :D";

function checkAns() {
	let answers = form.serializeArray();
	console.log(answers);

	if (answers.length !== rightAnswers.length) {
		message = "Oh no! You messed up on question 3... :(";
		return;
	}

	for (let i = 0; i < answers.length; i++) {
		if (answers[i] != rightAnswers[i]) {
			if (i < 9) {
				message = "Oh no! You messed up on question 1... :(";
			}
			else if (i > 9) {
				message = "Oh no! You messed up on question 3... :(";
			}
			else {
				message = "Oh no! You messed up on question 2... :(";
			}
		}
	}
}

form.on("submit", function (e) {
	e.preventDefault();
	checkAns();
	console.log(message);
});

/*
10
: 
{name: 'virtues', value: 'Justice'}
11
: 
{name: 'virtues', value: 'compassion'}
12
: 
{name: 'virtues', value: 'honour'}
13
: 
{name: 'virtues', value: 'loyalty'}
14
: 
{name: 'virtues', value: 'courage'}
15
: 
{name: 'virtues', value: 'honesty'}
16
: 
{name: 'virtues', value: 'self-control'}
*/