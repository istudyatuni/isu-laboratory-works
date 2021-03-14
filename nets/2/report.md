---
title: Самостоятельная работа № 3
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 2.1. Арифметические, логические операторы, операторы сравнения в JavaScript

Для ввода-вывода информации в JS можно использовать модальные окна `alert` (просто вывод текста), `prompt` (ввод данных) и `comfirm` (подтверждение чего-либо).

```js
// вывод привествия
alert('Добро пожаловать!')
// приглашение к вводу имени
let username = prompt('Введите имя')
// подтверждение продолжения
let continue_work = confirm('Продолжить работу?')
```

Строки складываем, причем в результате неявного приведения типов выражение вида `строка + число` или `число + строка` получится также строка:

```js
let a = '10'; b = '5'
console.log(typeof(a + b))
// "string"

a = 22; b = '5'
console.log(typeof(a + b))
// "string"

a = '22'; b = 5
console.log(typeof(a + b))
// "string"
```

Есть все стандартные математические операторы: сложение `+`, вычитание `-`, умножение `*`, деление `/`, остаток от деления `%`, также есть группировка с использованием скобок. Также есть и логические операторы `! && ||`, и операторы сравнения `== != > >= <=`.

Оператор условного перехода позволяет делать что-либо в зависимости от выполнения какого-то уловия, например, если одно число больше другого:

```js
if (a > b) {
	alert(a + ' больше ' + b)
}
```

Также есть тернарный оператор (условный оператор с упрощенным синтаксисом):

```js
(a > b)?alert(a + ' больше ' + b):alert(a + ' меньше или равно ' + b)
```

Для выбора из нескольких значений вместо конструкции вида

```js
if() {
	// smth
} else if() {
	// много строк
} else {
	// smth
}
```

можно использовать конструкцию `switch case`:

```js
switch (day) {
	case 1: day_name = 'понедельник'; break
	case 2: day_name = 'вторник'; break
	case 3: day_name = 'среда'; break
	case 4: day_name = 'четверг'; break
	case 5: day_name = 'пятница'; break
	case 6: day_name = 'суббота'; break
	case 7: day_name = 'воскресенье'; break
}
```

Код: [*Приложение 1*](#приложение-1)

# Лабораторная работа № 2.2. Функции. Операторы цикла. Объекты Math, Number

Части кода можно выделить и обернуть в "именованные" участки:

```js
function task_1() {
	set_title('1 - Приветствие')

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
```

Далее можно вызывать их, например, создать на странице кнопку, при нажатии на которую будет вызываться данная функция:

```xml
<button onclick="task_1()">Задание 1</button>
```

Создать таблицу из любых сгенерированных значений (в данном случае - таблицы умножения) можно наподобие этого:

```js
function task_2() {
	// вводим данные
	let a = prompt('Введите a'), b = prompt('Введите b')
	// преобразуем в числа
	a = Number(a); b = Number(b)

	// создаем массивы
	let row_a = Array(a).fill(1), row_b = Array(b).fill(1)
	// заполняем возрастающими индексами
	row_a = row_a.map((e, index) => index + 1)
	row_b = row_b.map((e, index) => index + 1)

	let table = row_a.map((element_a) =>
		// каждый элемент из первого массива
		row_b.map((element_b) =>
			// умножаем на каждый элемент второго массива
			element_a * element_b
		)
	)
	// в результате получается двумерный массив

	let html_table = '<table border="1">' + table.map((element) =>
		// каждую строку массива помещаем в тег <tr>
		'<tr>' + element.map((inner) =>
			// а каждый элемент строки помещаем в тег <td>
			'<td>' + inner + '</td>'
		) + '</tr>'
	) + '</table>'
	// убираем запятые (получились в результате преобразования map в строку)
	html_table = html_table.split(',').join('')
}
```

Другой способ состоит в использовании циклов:

```js
function task_2_3() {
	let a = prompt('Введите a'), b = prompt('Введите b')
	a = Number(a); b = Number(b)

	if (a > b) {
		alert('a должно быть меньше b! Нажмите снова')
		return
	}

	// изначально это строка, но потом мы запишем в документ, и будет html
	let html_table = '<table border="1">'
	html_table += '<tr><th>Радиус</th><th>Площадь круга</th><th>Длина окружности</th></tr>'

	// функция для формирования строки
	let make_row = (r, vol, len) => {
		return '<tr><td>' + r.toFixed(1) + '</td><td>' + Math.floor(vol) + '</td><td>' + Math.floor(len) + '</td></tr>'
	}

	// для всех значений создаем по новой строке
	do {
		html_table += make_row(a, 2 * Math.PI * a, Math.PI * a * a)
		if (b - a < 0.3) {
			html_table += make_row(b, 2 * Math.PI * b, Math.PI * b * b)
		}
		a += 0.3
	} while(a < b)
	html_table += '</table>'
}
```

Округление числа производится либо с помощью `Math.floor()`, либо вызовом `num.toFixed(arg)`, где `arg` -- количество цифр после запятой, либо похожим методом `num.toPrecision(arg)`, где `arg` -- общее количество цифр. *Оба последних метода возвращают строку!*

Также к объектам типа `Number` применимы методы `toExponential(arg)` -- для представления числа в экспоненциальной форме записи (`arg` -- количество цифр после точки), и `toString(arg)` -- для преобразования в строку (`arg` -- основание системы счисления, в которой необходимо представить число, по умолчанию 10)

Код: [*Приложение 2*](#приложение-2)

# Лабораторная работа № 2.3. Встроенные объекты JavaScript

Создаем массив, в который записываем значения математических выражений:

```js
function task_1() {
	let a = Array(
		6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8),
		2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3),
		3 * Math.sin(9) + Math.log(5) + Math.sqrt(3),
		2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12)
	)
	let sorted = [...a]
	// сортируем
	sorted.sort((a, b) => (a <= b)?-1:1)

	// ищем минимальное и максимальное
	let min_val = sorted[0], max_val = sorted[sorted.length - 1]
	// далее их индексы
	let min_ind = a.indexOf(min_val), max_ind = a.indexOf(max_val)
	console.log(a)
	console.log(min_val, max_val)
	console.log(min_ind, max_ind)
}
```

Проверяем, принадлежат ли методы объектам:

```js
function task_2() {
	let a = ['pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort']
	console.log('Source array', a)

	// выбираем только те, которые есть в Math
	let math_objs = a.filter(element => element in Math)
	// аналогично с Array
	let array_objs = a.filter(element => element in a)

	// добавляем еще несколько
	math_objs.unshift('cos')
	array_objs.push('concat')

	console.log('Math methods', math_objs, 'length', math_objs.length)
	console.log('Array methods', array_objs, 'length', array_objs.length)
}
```

Работаем со строками:

```js
function task_3() {
	// создаем объект String
	let name = 'Фамилия Имя Отчество '
	// преобразуем в верхний регистр
	let name1 = name.toUpperCase(),
	// в нижний
	name2 = name.toLowerCase()
	// соединяем
	let new_name = name.concat(name1, name2).replace('Фамилия Имя Отчество', 'ФИО')
	// длина строки
	let length = name.length
	// выводим
	document.write('Исходная строка: ' + name + '<br>Длина строки ' + length + '<br>Новая строка: ' + new_name)
}
```

Также можно работать с датами, для этого используем встроенный объект `Date`:

```js
function task_4() {
	// создаем объект
	let date = new Date()
	let html_table = '<table border="1">'
	let make_row = (name, value) => {
		return '<tr><td>' + name + '</td><td>' + value + '</td></tr>'
	}
	// получаем год
	html_table += make_row('Год', date.getFullYear())
	// месяц
	html_table += make_row('Месяц', date.getMonth())
	// и так далее
	html_table += make_row('День', date.getDay())
	html_table += make_row('Час', date.getHours())
	html_table += make_row('Минуты', date.getMinutes())
	html_table += make_row('Секунды', date.getSeconds())
	html_table += '</table>'
	document.write(html_table)
}
```

Код: [*Приложение 3*](#приложение-3)

# Вывод

Теперь мы умеем не только размещать текст на странице, но и динамически генерировать новый, или показывать результаты каких-то вычислений на странице. Круто же!
