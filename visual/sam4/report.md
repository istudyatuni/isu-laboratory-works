---
title: Самостоятельная работа №4
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 7. Анимация.

Также в SVG есть довольно широкие возможности для создания анимации, причем не просто покадровой, как `keyframes` в CSS.

Например, можно анимировать почти любой тэг, который задается у SVG объектов:

```xml
<rect x="50" y="30" width="50" height="140" style="fill:white;stroke:white" >
	<animate attributeName="x" to="100" dur="10s" repeatCount="indefinite" />
</rect>
```

В данном примере анимируется (если точнее, плавно изменяется) атрибут `x` от `50` до `100` в течении 10 секунд, а потом анимация начинается с начала

Возможно применять следующие элементы для создания анимации:

- `animate` - анимация отдельного свойства в течении определенного промежутка времени
- `animateMotion` - анимация для задания движения  объекта вдоль какой либо траектории. С заданным атрибутом `rotate="auto"` объект будет дополнительно менять свою ось наклона
- `animateColor` - анимация изменения цвета. Также вместо данного элемента можно использовать `animate`, например так:

```xml
<animate attributeName="fill" from="blue" to="red" dur="5s" />
```

- `animateTransform` - анимация, в которой участвуют преобразования
- `set` - анимация дискретного изменения свойства

Для демонстрации работы анимации в SVG я использовал свои предыдущие работы, и анимировал в них некоторые элементы.

1. Кораблик плывет по волнам

Весь объект корабля помещен в секцию `defs`, и используется через элемент `use`:

```xml
<use x="0" y="0" href="#ship" />
```

Анимация задается следующим образом:

```xml
<use x="0" y="0" href="#ship" >
	<animateMotion path="M0,50 C150,150 272,-50 500,50" dur="10s" repeatCount="indefinite" rotate="auto" />
</use>
```

В атрибуте `path` записан "путь" для изображения волны, и создается анимация движения по этому пути

2. Эскаватор сносит здание

Само здание правда после этого стоит, но шар-баба не прекращает попытки его сломать. В данном случае анимация добавляется уже к подгруппам:

```xml
<g id="scene">
	<g style="fill:none; stroke:black; stroke-width:1" transform="rotate(0)" transform-origin="60 25" >
		<title>Ball</title>
		<polyline points="36 42 60 25" />
		<circle cx="28" cy="49" r="10"></circle>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" to="-75" dur="2s" repeatCount="indefinite" />
	</g>
	<!-- ... -->
</g>
```

Внутри первой подгруппы анимируется поворот самой группы (в нее входит шар и трос, на котором висит этот шар) относительно смещенного центра применения преобразований: `transform-origin="60 25"`

Код: [*Приложение 1*](#приложение-1)

# Лабораторная работа № 2.9. Движение объектов и графика на JavaScript.

## Перемещение объектов

С помощью JS можно перемещать объекты по странице. Необходимо: включить обработку события `ondragstart` (например, а вообще можно любого), и определить несколько дополнительных обработчиков, на перемещение указателя мыши `onmousemove` и на отпускание левой кнопки мыши `onmouseup`. В первом мы изменяем положение изображения (или любого другого объекта с абсолютным позиционированием), а во втором устанавливаем флаг, разрешающий перемещение, в отрицательное значение. Например, все это может выглядеть так:

Картинка:

```xml
<img id="myimg" src="cat.jpg" ondragstart="drag_img()" style="position:absolute; top:50px; left:10px">
```

JS код:

```js
let flag = false // нельзя перемещать
let id_img = ""
function drag_img() {
	flag = true
	id_img = event.srcElement.id
}
let tracked = document.querySelector('html')
tracked.onmousemove = () => {
	if (flag){ // если можно перемещать
		document.all[id_img].style.top = event.clientY + 'px'
		document.all[id_img].style.left = event.clientX + 'px'
	}
}
tracked.onmouseup = () =>  {
	flag = false // нельзя перемещать
}
```

Что то похожее можно сделать для областей ввода текста:

```xml
<textarea id="tl" ondblclick="drag_text()" style="position:absolute; top:40px; left: 10px; font-size: large">Это – первый текст</textarea>
<textarea id="t2" ondblclick="drag_text()" style="position:absolute; top:100px; left:150px">Это – второй текст </textarea>
<textarea id="t3" ondblclick="drag_text()" style="position:absolute; top:150px; left:250px">Это - третий текст </textarea>
```

```js
let flag = false // нельзя перемещать
let id_img = ""
function drag_text() {
	flag = true
	id_img = event.srcElement.id
	// id элемента, который надо перемещать
}
tracked.onmousemove = () => {
	if (flag) {
		document.all[id_img].style.top = event.clientY + 'px'
		document.all[id_img].style.left = event.clientX + 'px'
		resizetext()
	}
}
// установка размеров текстовых областей
tracked.onmouseup = () => {
	flag = false
}
function resizetext() {
	// установка размеров областей
	var y, size, idimg, idtext
	for (i = 0; i < document.all.length; i++) {
		if (document.all[i].tagName == 'TEXTAREA') {
			idtext = document.all[i].id
			y = parseInt(document.all[idtext].style.top)
			size = Math.min(y, 800)
			size = Math.max(size, 60)
			document.all[idtext].style.width = size + 'px'
			document.all[idtext].style.height = (0.8 * size) + 'px'
			document.all[idtext].style.zIndex = y
			document.all[idtext].style.fontSize = Math.max(2, y / 10)
		}
	}
}
```

Также здесь сделано изменение размера поля в зависимости от его отступа сверху, функция `resizetext`

## Анимация движения объектов

### 1. По прямой

Чтобы создать анимацию для движения какого-либо объекта, он должен быть абсолютно позиционирован:

```xml
<img id="image" src="cat.jpg" style="position:absolute; top:50px; left:10px">
```

А в JS создается функция начала движения, которая задает с помощью встроенной функции `setInterval` периодичный вызов другой функции, которая и будет осуществлять сдвиг объекта:

```js
let dx = 0.2, dy = 0
let interval
let xid = 'image'
function init_move() {
	interval = setInterval(function () {move()}, 1)
}
function move() {
	let x = parseFloat(document.all[xid].style.left)
	let y = parseFloat(document.all[xid].style.top)
	document.all[xid].style.top = (y + dy) + 'px'
	document.all[xid].style.left = (x + dx) + 'px'

	if (x > 1000) {
		clearInterval(interval)
	}
}
init_move()
```

В функции `move` также проверяем какие-либо граничные условия для остановки движения, и останавливаем движение вызовом другой встроенной функции - `clearInterval`, в качестве параметра в нее передается ID, полученный при инициализации функции `setInterval`

### 2. По кривой

Эта задача не сильно отличается от предыдущей:

```js
let x = 0, y
let interval, expression
let xid = 'image'
function curvemove(expr, time) {
	interval = setInterval(() => {move()}, time)
	expression = expr
	y = expression(x)
}
function move() {
	x++
	y = expression(x)
	document.all[xid].style.top = y + 'px'
	document.all[xid].style.left = x + 'px'

	if (x > window.innerWidth || y > window.innerHeight) {
		clearInterval(interval)
		document.all[xid].style.top = '50px'
		document.all[xid].style.left = '10px'
	}
}
curvemove(x => 100 + 50 * Math.sin(0.03 * x), 10)
```

Разница в том, что теперь значения `y` вычисляются с использованием отдельной функции

## Рисование графиков функций

Идея - расположение большого количества изображений размером 1x1 пиксель, и задание для каждого индивидуального отступа

Основная функция и задание переменных:

```js
let expression
const discret = 1
const thickness = 2

let color_style = ''
function curve() {
	let x = 0
	let y = expression(x)
	let images = ''
	while (x < window.innerWidth) {
		if (y < window.innerHeight) {
			let img = `<img src="blue-pixel.bmp" style="position:absolute; top:${y}px; left:${x}px; filter:${color_style}" width="${thickness}" height="${thickness}">`
			images += img
		}
		x += discret
		y = expression(x)
	}
	document.write(images)
	document.title = 'Press F5 to reload'
}
```

`y` и `x` задают отступ сверху и слева, `thickness` - толщину линии (это значение устанавливается в атрибуты `width` и `height`), `discret` - шаг изменения `x`. В цикле осуществляется пробежка по всем `x`, которые потом будут отображаться, и для каждого создается элемент `<img />`. Полученный элемент затем добавляется к строке, которая накапливает в себе все "точки" для графика

Форма для задания параметров:

```xml
<form id="func" onsubmit="event.preventDefault(); draw()">
	<input type="radio" name="f" value="square" checked> y = x<sup>2</sup>
	<input type="radio" name="f" value="cube"> y = x<sup>3</sup>
	<input type="radio" name="f" value="sin"> y = sin(x)
	<input type="radio" name="f" value="cos"> y = cos(x)
	<input type="submit" value="draw" />
</form>
```

Функция, которая вызывается при нажатии кнопки `draw` в этой форме, и которая получает заданные пользователем значения:

```js
function draw() {
	let f = document.forms['func'].elements

	const type = Array.from(f)
		.filter((e) => e.checked)[0].value
	switch (type) {
		case 'square': expression = x => 100 + 50 * Math.pow(0.02 * (x - 200), 2); break;
		case 'cube': expression = x => 100 + 50 * Math.pow(0.02 * (x - 200), 3); break;
		case 'sin': expression = x => 100 + 50 * Math.sin(0.02 * x); break;
		case 'cos': expression = x => 100 + 50 * Math.cos(0.02 * x); break;
	}
	curve()
}
```

В ней мы получаем значение выбранного элемента и в зависимости от того, что выбрано, устанавливаем значение переменной `expression`, которое вызывается в функции `curve` для вычисления значения `y`.

**Выбор цвета для графика**

В форму добавим следующие поля:

```xml
<select name="color">
	<option selected>black</option>
	<option>blue</option>
	<option>red</option>
	<option>yellow</option>
</select>
```

В функцию `draw` (перед вызовом функции `curve`):

```js
const color = f['color'].value
switch (color) {
	case 'black': color_style = 'grayscale(1)'; break;
	case 'blue': break;
	case 'red': color_style = 'hue-rotate(90deg)'; break;
	case 'yellow': color_style = 'invert(1)'; break;
}
```

Исходная картинка - синий пиксель, а для изменения цвета я использую CSS свойство `filter`. Его значение передается в функцию `curve` через глобальную переменную `color_style`

Код: [*Приложение 2*](#приложение-2)
