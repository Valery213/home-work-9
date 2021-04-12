const windFromTheSea =
`Ветер с моря дул, ветер с моря дул
Нагонял беду, нагонял беду
И сказал ты мне, и сказал ты мне
Больше не приду, больше не приду

Видно не судьба, видно не судьба
Видно нет любви, видно нет любви
Видно надо мной, видно надо мной
Посмеялся ты, посмеялся ты

Я тебя люблю, я тебя люблю
Честно говорю, честно говорю
Ведь ты знаешь сам, ведь ты знаешь сам
Как тебя я жду, как тебя я жду

Видно не судьба, видно не судьба
Видно нет любви, видно нет любви
Видно надо мной, видно надо мной
Посмеялся ты, посмеялся ты`;

let string = windFromTheSea.replace(/,/g, '');
string = string.replace(/\n/g, ' ');
string = string.replace(/  /g, ' ');
const array = string.split(' ');

const set = new Set (array);
const object = {};

for (let value1 of set) {

	let quantity = 0;
	for (let value2 of array) {
		
		if (value1 === value2) {
			quantity++;
		}
	}
	object[value1] = quantity;
}
console.log(object);