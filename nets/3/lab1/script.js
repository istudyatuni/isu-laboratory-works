// helper functions
function set_title(name) {
	document.getElementById('title').innerHTML = 'Задание ' + name
}

function set_description(text) {
	document.getElementById('desc').innerHTML = text
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

////////////
// Task 1 //
////////////

async function task_1() {
	set_title('1 - Приветствие')
	await sleep(1)

	alert('Добро пожаловать!')
	let username = prompt('Введите имя')
	alert('Добрый день, ' + username)
	let continue_work = confirm('Продолжить работу?')
	if (continue_work) {
		alert('Ok')
	} else {
		alert('До свидания, ' + username)
	}
}

////////////
// Task 2 //
////////////

async function task_2() {
	set_title('2 - JS такой JS')
	await sleep(1)

	let add = () => {
		let res = a + b
		alert(a + ' is ' + typeof(a) + ', ' + b + ' is ' + typeof(b) + '\n' + a + ' + ' + b + ' = ' + res + '\n' + res + ' is ' + typeof(res))
	}
	let a = 10, b = 5
	add()
	a = '10'; b = '5'
	add()
	a = 22; b = '5'
	add()
	a = '22'; b = 5
	add()

	alert('Результатом сложения строки и числа всегда будет строка!')
}

////////////
// Task 3 //
////////////

async function task_3() {
	set_title('3 - Большие числа')
	set_description(`Есть два выражения:<br>
		(35y - 25x)/5 + 232 и (8y/x + 5x/y - 43)*6<br>
		Цель: подбираем x и y, чтобы значение первого выражения было сильно больше второго<br>
		Итоговые значения: x = 100000 и y = 1000000`)
	await sleep(1)

	let first_math = (x, y) => {
		return (35 * y - 25 * x) / 5 + 232
	}, second_math = (x, y) => {
		return (8 * y / x + 5 * x / y - 43) * 6
	}
	let x = 100000, y = 1000000
	alert(first_math(x, y) + ' % ' + second_math(x, y) + ' = ' + first_math(x, y) % second_math(x, y))
	set_description('')
}

////////////
// Task 4 //
////////////

async function task_4() {
	set_title('4 - Угадай-ка')
	await sleep(1)

	let num = prompt('Введите любое число (например 15)')
	if (num == null || num == '') {
		alert('А ввести?')
	} else if ((num < 20 || num > 40) && num != 15 && num % 5 == 0) {
		alert('Правильное значение')
		return
	} else {
		alert('Ты никогда не угадаешь правильное значение!')
	}
	let ans = confirm('Еще раз?')
	if (ans) {
		await task_4()
	}
}

////////////
// Task 5 //
////////////

async function task_5() {
	set_title('5 - Сравниватель')
	await sleep(1)

	let a = prompt('Введите a: '),
		b = prompt('Введите b: ')
	if (a > b) {
		alert(a + ' больше ' + b)
	} else if (b > a) {
		alert(a + ' меньше ' + b)
	} else {
		alert(a + ' равно ' + b)
	}
	a = prompt('Введите a: ')
	b = prompt('Введите b: ')
	alert((a % 2 == b % 2)?
		''.concat(a, ' и ', b, ' равны по модулю 2'):
		''.concat(a, ' и ', b, ' не равны по модулю 2')
		)
}

////////////
// Task 6 //
////////////

async function task_6() {
	set_title('6 - День недели')
	await sleep(1)

	let day = (new Date).getDay()
	let day_name = ''
	switch (day) {
		case 1: day_name = 'понедельник'; break
		case 2: day_name = 'вторник'; break
		case 3: day_name = 'среда'; break
		case 4: day_name = 'четверг'; break
		case 5: day_name = 'пятница'; break
		case 6: day_name = 'суббота'; break
		case 7: day_name = 'воскресенье'; break
	}
	alert('Сегодня ' + day_name)
}

////////////
// Task 7 //
////////////

async function task_7() {
	set_title('7 - Try/catch')
	await sleep(1)

	alert('Error')
	set_description('Попался!<br>Try/catch мы не проходили :(')
}

//////////
// Main //
//////////

async function main() {
	await task_1()
	await task_2()
	await task_3()
	await task_4()
	await task_5()
	await task_6()
	await task_7()

	// just clear with no reasons
	setTimeout(()=>{document.write('')}, 60 * 1000)
}

main()
