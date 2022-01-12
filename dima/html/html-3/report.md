---
title: Самостоятельная работа № 3
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 2.1. Арифметические, логические операторы, операторы сравнения в JavaScript

Для ввода-вывода информации в JS могут быть использованы модальные окна: `alert` (вывод текста), `prompt` (вывод текста и ввод данных), `comfirm` (подтверждение).

```js
alert('Welcome!')

let userName = prompt('Enter the name')

let confirmation = confirm('Continue work?')
```

Оператор `+` работает как для чисел, так и для строк, причём при сложение числа и строки, в любом порядке, получается строка:

```js
document.write(10 + 5)
document.write("10" + "5")
document.write(22 + "5")
document.write("22" + 5)
```

В JS присутсвуют стандартные математические операторы: `+`, `-`, `*`, `/`, `%`, а также логические операторы `! && ||`, и операторы сравнения `== != > >= <=`.

Оператор условного перехода функционирует аналогично тому, как он функционирует в других языках, если условие верно, выполняется часть кода, находящаяся в `{ }`:

```js
if(variable_1 < 20 || variable_1 > 40 && variable_1 != 15 && variable_1 % 5 == 0)
	alert("Correct value")
else
	alert("Wrong value")
```

Операторы `else` и `if` могут быть использованы в связке. 

```js
if(variable_3 > variable_4)
	alert("The first number is greater than the second")
else if(variable_3 < variable_4)
	alert("The first number is less than the second")
else
	alert("Numbers are equal")
```

Для большого кол-ва однотипных вариантов может быть использована конструкция `switch case`:

```js
switch(day){
	case "monday":
        alert(`Today is ${day}`);
        break;
    case "tuesday":
        alert(`Today is ${day}`);
        break;
    case "wednesday":
        alert(`Today is ${day}`);
        break;
    case "thursday":
        alert(`Today is ${day}`);
        break;
    case "friday":
        alert(`Today is ${day}`);
        break;
    case "saturday":
        alert(`Today is ${day}`);
        break;
    case "sunday":
        alert(`Today is ${day}`);
        break;
    default:
        alert("Nope");
}
```

В случае работы с кодом, который может вызывать ошибки, стоит использовать операторы `try` `catch`:
```js
    try{
        alert(test)
    }
    catch{
        alert("Error!")
    }
```

Код: [*Приложение 1*](#приложение-1)

# Лабораторная работа № 2.2. Функции. Операторы цикла. Объекты Math, Number

Анаогично другим языкам, в JS присутсвует возможность писать собственные функции:

```js
function taskOneFunc() {
    alert('Welcome!')
    let userName = prompt('Enter the name')
    alert('Good afternoon ' + userName)

    let confirmation = confirm('Continue work?')
    if(confirmation) 
    	alert("OK")
    else
    	alert('Good buy ' + userName) 
}
function FirstTableFunc() {
let a = prompt("Enter number A (for the multiplication table)");
let b = prompt("Enter number B (for the multiplication table)");
document.write('<h2>Task two</h2></br>')
document.write('<table>')
for (let i = 1; i <= a; i++)
{
    document.write("<tr>");
    for (let j = 1; j <= b; j++)
    {
        document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")
    }
document.write("</tr>")
}
document.write("</table>")
document.write('</br>')
}
```

Функции могут быть использованы в различных участках кода повторно:

```xml
	<button onclick="taskOneFunc()">One</button>
```
```js
    FirstTableFunc()
```

JS позволяет добавлять элементы напрямую в html файлы:

```js
function SecondTableFunc() {
    let a
    let b
    let circleLenght
    let circleSquare
    a = +prompt("Enter number A (for a table with a circle.): ")
    if (isNaN(a)) {
        alert("Error")
        return
    }

    b = +prompt("Enter number B (for a table with a circle.): ")
    if (isNaN(b)) {
        alert("Error")
        return
    }

    let table_circle = '<table> <td>Radius</td> <td>Circumference</td> <td>Area of a circle</td> </tr>'
    do {
        circleLenght = Math.round(2 * 3.14 * a)
        circleSquare = Math.round(3.14 * a * a)
        table_circle += "<tr><td>" + a.toFixed(1) + "</td><td>" + circleLenght + "</td><td>" + circleSquare + "</td></tr>"
        a = a + 0.3;
    }
    while (a <= b);
    document.write(table_circle + "</table>")
    document.write('</br>')
}

document.write('<h2>Task tree</h2></br>')
SecondTableFunc();
```

Округление числа может быть реализовано с помощью функций `Math.floor()`, `Math.round()`.

```js
circleLenght = Math.round(2 * 3.14 * a)
circleSquare = Math.round(3.14 * a * a)
```


C помощью метода `toExponential(arg)` объекты типа `Number` могут быть представлены в экспоненциальной форме записи.
C помощью метода `toString(arg)`  объекты типа `Number` можгут быть преобразован в строку.
C помощью метода `toPrecision(arg)` будет возвращена строка, представляющая объект типа `Number` с указанной точностью. 
C помощью метода `toFixed(arg)` объекты типа `Number` форматируется с помощью записи с фиксированной точкой. 

```js
let num_1 = new Number(3.14)
    let num_2 = new Number(3)
    let table_num = `<table> <tr> <td>Number</td> <td>Method</td> <td>Result</td> <td>Method description</td> </tr>`;
    table_num += `<tr> <td> 3.14 </td> <td> toString(3.14) </td> <td> ${ num_1.toString(2) } </td> <td>The toString() method returns a string representing the object.</td> </tr>`
    table_num += `<tr> <td> 3.14 </td> <td> toExponential(3.14) </td> <td> ${ num_1.toExponential(2) } </td> <td>The toExponential method returns a string representing the Number object in exponential notation.</td> </tr>`
    table_num += `<tr> <td> 3.14 </td> <td> toPrecision(3.14) </td> <td> ${ num_1.toPrecision(2) } </td> <td>The toPrecision method returns a string representing the Number object to the specified precision.</td> </tr>`
    table_num += `<tr> <td> 3.14 </td> <td>  toFixed(3.14) </td> <td> ${ num_1.toFixed(1) } </td> <td>The toFixed method formats a number using fixed-point notation.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td> toString(3) </td> <td> ${ num_2.toString(2) } </td> <td>The toString() method returns a string representing the object.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td> toExponential(3) </td> <td> ${ num_2.toExponential(2) } </td> <td>The toExponential method returns a string representing the Number object in exponential notation.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td> toPrecision(3) </td> <td> ${ num_2.toPrecision(2) } </td> <td>The toPrecision method returns a string representing the Number object to the specified precision.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td>  toFixed(3) </td> <td> ${ num_2.toFixed(1) } </td> <td>The toFixed method formats a number using fixed-point notation.</td> </tr>`
```

Код: [*Приложение 2*](#приложение-2)

# Лабораторная работа № 2.3. Встроенные объекты JavaScript

Создаем массив, в который записываем значения математических выражений:
Аналогично другим языкам в JS присутсвуют такие объекты как `Array` в которым могут хранится различные типы данных:

```js
let expressions = new Array((6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8)),
	(2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3)),
    (3 * Math.sin(9) + Math.log(5) + Math.sqrt(3)),
    (2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12)))
```

С помощью метода `.hasOwnProperty` проверяем принадлежность элементов массива к `Math`, и добаляем в первый массив, не подходящие элементы добавляем во второй.

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

Производим преобразования строк с помощью методов объектов `String`:

```js
function taskThreeFunc(){
	let str = "Krylov Dmitry Aleksandrovich"
	document.write("<h2>Task three</h2></br> String " + str + "</br>")
	document.write("String length: " + str.length + "</br>")
	let up = str
	document.write("Upper case string: " + up.toUpperCase() + "</br>")
	let low = str
	document.write("Lower case string: " + low.toLowerCase() + "</br>")
	let result = up + low
	let fio = new String()
	fio+=str[0]
	for(let i = 2; i < str.length; i++){
		if(str[i-1]==' ')
			fio+=str[i]
	}
	document.write("FIO: " + fio + '</br>')
}
```

Используем объект `Date` для создания таблицы с значениями текущих даты и времени:

```js
function taskFourFunc(){
	document.write("<h2>Task four</h2></br>")

	let date = new Date()

	let year = date.getFullYear()
	let month = date.getMonth()
	let day =date.getDay()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()

	let table = '<table border="1">'
	let row = (name, value) => {return '<tr><td>' + name + '</td><td>' + value + '</td></tr>'}
	table += row('Year', year)
	table += row('Month', month)
	table += row('Day', day)
	table += row('Hours', hour)
	table += row('Minuts', minute)
	table += row('Seconds', second)
	table += '</table>'
	document.write(table)
}
```

Код: [*Приложение 3*](#приложение-3)

# Вывод

В ходе лабораторной рабое были изучены возможности динамического добавления текста на страницу, работы с числами и строками.
