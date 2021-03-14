function show_buttons(tasker_num, numer) {
	let buttons = ''
	for (let i = 1; i <= numer; i++) {
		buttons += '<button onclick="tasker_' + tasker_num + '(' + i + ')">Задание ' + i + '</button>'
	}
	document.getElementById('buttons').innerHTML = buttons
}

//////////
// Show //
//////////

function set_active(class_name) {
	document.getElementById('lab1').classList.remove('active')
	document.getElementById('lab2').classList.remove('active')
	document.getElementById(class_name).classList.add('active')
}

function show_1() {
	set_active('lab1')
	document.getElementById('title').innerHTML = ''
	document.getElementById('some-stuff').innerHTML = ''
	show_buttons(1, 7)
}

function show_2() {
	set_active('lab2')
	document.getElementById('title').innerHTML = ''
	document.getElementById('some-stuff').innerHTML = ''
	show_buttons(2, 4)
}

show_1()

////////////
// Task 1 //
////////////

function task_2_1() {
	document.getElementById('title').innerHTML = '1. Все изменения в коде script1.js'
	document.getElementById('some-stuff').innerHTML = ''
}

////////////
// Task 2 //
////////////

function task_2_2() {
	document.getElementById('title').innerHTML = '2. Таблица умножения'

	let table = mult_table()
	let html_table = '<table border="1">' + table.map((element) =>
		'<tr>' + element.map((inner) =>
			'<td>' + inner + '</td>'
		) + '</tr>'
	) + '</table>'
	html_table = html_table.split(',').join('')
	document.getElementById('some-stuff').innerHTML = html_table
}

function mult_table() {
	let a = prompt('Введите a'), b = prompt('Введите b')
	a = Number(a); b = Number(b)

	let row_a = Array(a).fill(1), row_b = Array(b).fill(1)
	row_a = row_a.map((e, index) => index + 1)
	row_b = row_b.map((e, index) => index + 1)

	let table = row_a.map((element_a) =>
		row_b.map((element_b) =>
			element_a * element_b
		)
	)
	return [...table]
}

////////////
// Task 3 //
////////////

function task_2_3() {
	document.getElementById('title').innerHTML = '3. Круг'
	let a = prompt('Введите a'), b = prompt('Введите b')
	a = Number(a); b = Number(b)

	if (a > b) {
		alert('a должно быть меньше b! Нажмите снова')
		return
	}

	let html_table = '<table border="1">'
	html_table += '<tr><th>Радиус</th><th>Площадь круга</th><th>Длина окружности</th></tr>'
	let make_row = (r, vol, len) => {
		return '<tr><td>' + r.toFixed(1) + '</td><td>' + Math.floor(vol) + '</td><td>' + Math.floor(len) + '</td></tr>'
	}
	do {
		html_table += make_row(a, 2 * Math.PI * a, Math.PI * a * a)
		if (b - a < 0.3) {
			html_table += make_row(b, 2 * Math.PI * b, Math.PI * b * b)
		}
		a += 0.3
	} while(a < b)
	html_table += '</table>'
	document.getElementById('some-stuff').innerHTML = html_table
}

////////////
// Task 4 //
////////////

function task_2_4() {
	document.getElementById('title').innerHTML = '4. Number'
	document.getElementById('desc').innerHTML = 'a = 545, b = 524231.6127'

	let a = 545, b = 524231.6127
	let html_table = '<table border="1">'
	html_table += '<tr><th>Число</th><th>Метод</th><th>Результат</th><th>Описание метода</th></tr>'
	let make_row = (num, method, result, desc) => {
		return '<tr><td>' + num + '</td><td>' + method + '</td><td>' + result + '</td><td>' + desc + '</td></tr>'
	}
	html_table += make_row(a, 'toExponential(7)', a.toExponential(7), 'Число в экспоненциальной форме записи с 7 цифрами после точки')
	html_table += make_row(a, 'toFixed(3)', a.toFixed(3), 'Число с фиксированно тремя цифрами после точки')
	html_table += make_row(a, 'toPrecision(5)', a.toPrecision(5), 'Число с общим количеством 5 цифр до и после точки')
	html_table += make_row(a, 'toString(9)', a.toString(9), 'Строковое представление числа в девятеричной системе счисления')

	html_table += make_row(b, 'toExponential(7)', b.toExponential(7), 'Число в экспоненциальной форме записи с 7 цифрами после точки')
	html_table += make_row(b, 'toFixed(3)', b.toFixed(3), 'Число с фиксированно тремя цифрами после точки')
	html_table += make_row(b, 'toPrecision(5)', b.toPrecision(5), 'Число с общим количеством 5 цифр до и после точки')
	html_table += make_row(b, 'toString(9)', b.toString(9), 'Строковое представление числа в девятеричной системе счисления')
	html_table += '</table>'
	document.getElementById('some-stuff').innerHTML = html_table
}

////////////
// Tasker //
////////////

function tasker_2(numer) {
	document.getElementById('desc').innerHTML = ''
	switch(numer) {
		case 1: task_2_1(); break;
		case 2: task_2_2(); break;
		case 3: task_2_3(); break;
		case 4: task_2_4(); break;
	}
}
