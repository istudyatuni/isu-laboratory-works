function show_buttons(tasker_num, numer) {
	let buttons = ''
	for (let i = 1; i <= numer; i++) {
		buttons += '<button onclick="tasker_' + tasker_num + '(' + i + ')">Задание ' + i + '</button>'
	}
	document.getElementById('buttons').innerHTML = buttons
}

function show_3() {
	document.getElementById('title').innerHTML = ''
	document.getElementById('some-stuff').innerHTML = ''
	show_buttons(3, 4)
}

show_3()

function task_3_1() {
	document.getElementById('desc').innerHTML = 'See in dev tools'

	let a = Array(
		6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8),
		2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3),
		3 * Math.sin(9) + Math.log(5) + Math.sqrt(3),
		2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12)
	)
	let sorted = [...a]
	sorted.sort((a, b) => (a <= b)?-1:1)

	let min_val = sorted[0], max_val = sorted[sorted.length - 1]
	let min_ind = a.indexOf(min_val), max_ind = a.indexOf(max_val)
	console.log(a)
	console.log(min_val, max_val)
	console.log(min_ind, max_ind)
}

function task_3_2() {
	document.getElementById('desc').innerHTML = 'See in dev tools'

	let a = ['pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort']
	console.log('Source array', a)
	let math_objs = a.filter(element => element in Math)
	let array_objs = a.filter(element => element in a)
	math_objs.unshift('cos')
	array_objs.push('concat')
	console.log('Math methods', math_objs, 'length', math_objs.length)
	console.log('Array methods', array_objs, 'length', array_objs.length)
}

function task_3_3() {
	document.getElementById('some-stuff').innerHTML = ''

	let name = 'Фамилия Имя Отчество '
	let name1 = name.toUpperCase(),
	name2 = name.toLowerCase()
	let new_name = name.concat(name1, name2).replace('Фамилия Имя Отчество', 'ФИО')
	let desc = 'Исходная строка: ' + name + '<br>Длина строки ' + name.length + '<br>Новая строка: ' + new_name
	document.getElementById('desc').innerHTML = desc
}

function task_3_4() {
	document.getElementById('desc').innerHTML = ''

	let date = new Date()
	let html_table = '<table border="1">'
	let make_row = (name, value) => {
		return '<tr><td>' + name + '</td><td>' + value + '</td></tr>'
	}
	html_table += make_row('Год', date.getFullYear())
	html_table += make_row('Месяц', date.getMonth())
	html_table += make_row('День', date.getDay())
	html_table += make_row('Час', date.getHours())
	html_table += make_row('Минуты', date.getMinutes())
	html_table += make_row('Секунды', date.getSeconds())
	html_table += '</table>'
	document.getElementById('some-stuff').innerHTML = html_table
}

////////////
// Tasker //
////////////

function tasker_3(numer) {
	switch(numer) {
		case 1: task_3_1(); break;
		case 2: task_3_2(); break;
		case 3: task_3_3(); break;
		case 4: task_3_4(); break;
	}
}
