const map = new Map();

function askQuestion () {
	const answer = prompt('Введите информацию о человеке');

	if (answer === null) {
		calculateAgeAndJumps(map);
		return
	} else {
		const obj = {};
		let mass = answer.split(', ');
		for (i = 0; i < mass.length; i++) {
			obj[i] = mass[i];
		}
		map.set(Symbol("userUnique"), obj);
		askQuestion();
	}
}
let calculateAgeAndJumps = (map) => {
	let ageSummary = 0;
	let jumpsSummary = 0;

	for (let value of map) {
		jumpsSummary += +(value[1][1]);
		ageSummary += +(value[1][3]);
	}
	console.log('Общее количество прыжков: ' + jumpsSummary + ' Средний возраст прыгунов: ' + ageSummary / map.size);
}

askQuestion();
console.log(map);