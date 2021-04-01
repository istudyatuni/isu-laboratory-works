---
title: Самостоятельная работа № 4
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 2.4. Пользовательские объекты JS. Специальные операторы.

**Пользовательские объекты**

Объекты создаются следующим образом через функцию:

```js
function student(name, surname) {
	this.name = name
	this.surname = surname
	this.show_name = function show_name() {
		document.write(`<br>Student ${this.name} ${this.surname}`)
	}
}

let stud1 = new student('One', 'Boy')
```

Далее можно к каждому свойству обращаться:

```js
let full_name = stud1.name + ' ' + stud1.surname
document.write(full_name)
// or
document.write(stud1.show_name())
```

Добавление нового свойства к объекту, и, следовательно, ко всем экземплярам, делается так:

```js
student.prototype.age = this.age
```

Также необходимо инициализировать новое свойство у всех объектов, иначе оно будет `undefined`:

```js
stud1.age = 20
```

**Специальные операторы**

**`delete`**

Удаляет элемент из массива, не изменяя при этом его длину:

```js
let arr = new Array(2, 3, 4)
delete arr[1]
```

Также удаляет свойство объекта

**`in`**

Проверяет, есть ли у массива элемент или у объекта свойство:

```js
document.write(1 in arr)
// false
document.write('name' in stud1)
// true
```

**`instanceof`**

Проверяет, является ли объект объектом определенного типа:

```js
document.write(arr instanceof Array)
// true
```

**`typeof`**

Определяет тип объекта:

```js
document.write(typeof stud1)
// object
document.write(typeof student)
// function
```

Код: [*Приложение 1*](#приложение-1)

# Лабораторная работа № 2.5. Объектная модель документа. Доступ к элементам web-страницы.

Для доступа ко всем элементам на странице может использоваться `document.all`:

```js
let all = document.all
for (let i = 0; i < all.length; i++) {
	console.log(all[i].tagName)
}
```

Все дочерние элементы, например, у `document.body`, можно получить так:

```js
let body_childs = document.body.childNodes
body_childs.forEach((e, i)=>{
	if (e.tagName!==undefined) {
		console.log(e.tagName, i)
	}
})
```

А получить первый элемент определенного тэга можно разными способами:

```js
// из document.all
let first_span;
for (let a of all) {
	if (a.tagName=='SPAN') {
		first_span = a
		break
	}
}
console.log(first_span)
// выбором всех похожих элементов
first_span = document.getElementsByTagName('span')[0]
console.log(first_span)
// заранее присвоить id нужному элементу
first_span = document.getElementById('span1')
console.log(first_span)
```

Извлечение данных из таблицы можно сделать так:

```js
// получаем набор самых "глубоких" элементов
let subjects = document.getElementsByTagName('table')[0]
	.childNodes[1].childNodes[4]
	.childNodes[3].childNodes[1]
	.firstElementChild.getElementsByTagName('tr')
let score = 0
// из каждого достаем значение, в данном случае - число
for (let i = 1; i < subjects.length; i++) {
	score += Number(subjects[i].lastElementChild.innerText)
}
// считаем
score /= (subjects.length - 1)
console.log('average score: ', score)
```

*Полная таблица в приложении*

Изменение отображаемых данных в дереве делается следующим образом:

```js
document.getElementsByTagName('span')[1].innerHTML += ' ' + score
```

Код: [*Приложение 2*](#приложение-2)

# Лабораторная работа № 2.6. Объектная модель браузера (BOM).

Можно с помощью JS открывать и закрывать окна:

```html
<button onclick="window.open('/')">Open duplicate</button>
<button onclick="window.close()">Close</button>
```

Закрывать можно только окна, открытые с помощью JS

Также с помощью объектов `navigator`, `screen`, `history`, `location` можно узнавать большое количество различных данных, например ОС, версию браузера, данные дисплея, количество посещенных URL в текущем окне, текущий адрес, и т.д.:

```js
let data = [
	['browser version', navigator.appVersion],
	['browser name', navigator.appName],
	['browser code name', navigator.appCodeName],
	['OS', navigator.platform],
	['is Java enabled', navigator.javaEnabled()],
	['width', screen.width],
	['height', screen.height],
	['color depth', screen.colorDepth],
	['history urls', history],
	['current url', location.href],
	['path to load document', location.pathname],
	['domain name', location.host],
]
```

Код: [*Приложение 3*](#приложение-3)
