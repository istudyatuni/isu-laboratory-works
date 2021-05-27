---
title: Самостоятельная работа № 4
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 7. Анимация.

В SVG существует возможность создавать анимацию. Для её создания используются следующие элементы:

- `animate` - анимация отдельного свойства в течении определенного промежутка времени
- `animateMotion` - анимация для задания движения  объекта вдоль какой либо траектории. С заданным атрибутом `rotate="auto"` объект будет дополнительно менять свою ось наклона
- `animateColor` - анимация изменения цвета. Также вместо данного элемента можно использовать `animate`
- `animateTransform` - анимация, в которой участвуют преобразования
- `set` - анимация дискретного изменения свойства

Для демострация мною было создано изоюражения зонта и "знака вращения" для запуска анимации. При нажатии на "знак", он делает один полный оборот относительно своего центра, а зонта в течение двух секунду изменяет своё положение с открытого на закрытое и обратно.
```xml
<g id="reload" stroke-width="2" stroke="red" fill="none">   
	<circle cx="100" cy="75" r="15" fill="red" opacity="0"/> 
	<path d="M 110 65 A 15 15 0 10 115 75"/>
	<path d="M 105 58.5 110 65 102.5 64.5"/>
	<animateTransform
	attributeName="transform"
	type="rotate"
	from="0 100 76"
	to="360 100 76"
	dur="2s"
	repeatCount="1"
	begin="click"/>
</g>  
<g>
	<path id="holder" d="M 50 5 L 50 90 Q 55 95 60 90" stroke-width="2" stroke="red" stroke-linecap="round" fill="none"/>
	<path id="umbrella" d="M 50 10 40 80 Q 50 85 60 80;">
	<animate begin="reload.click" dur="2s" repeatCount="1" attributeName="d"        
	values="M 50 10 40 80 Q 50 85 60 80;  
	M 50 10 0 25 Q 50 35 100 25;
	M 50 10 40 80 Q 50 85 60 80"/>   
	</path>           
</g>  
```
# Лабораторная работа № 2.9. Движение объектов и графика на JavaScript.

JS даёт возможность перемещения объектов. Для этого необходимо объявить флаг для определения можно ли перемещать объект, обработчики пермещения мыши, для изменения положения объекта, и отпускания ЛКМ, для прекращения пермещения (`onmousemove`, `onmouseup`).:

```xml
<img id="myimg" src="image/eagle.jpg" ondragstart="drag_img()" style="position:absolute; top:50px; left:10px">
```

```js
let drag_flag = false
let img_id = ""
function drag_img() {
    drag_flag = true
    img_id = event.srcElement.id
}
let tracked = document.querySelector('html')
tracked.onmousemove = () => {
    if (drag_flag){
        document.all[img_id].style.top = event.clientY + 'px'
        document.all[img_id].style.left = event.clientX + 'px'
    }
}
tracked.onmouseup = () =>  {
    drag_flag = false
}
```

### Анимация движения по прямой

Необходимо чтобы объект был абсолютно позиционирован.

```xml
<img id="image" src="image/eagle.jpg" style="position:absolute; top:50px; left:10px">
 ```

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
### Анимация движения по кривой

Аналогично предыдущий задаче, но `y` координата вычисляется отдельно.

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

## Рисование графиков функций

Отдельные изображения распологаются с разными отступами создавая тем самым график.

Основная функция:

```js
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

Ввод пользовательских значений:

```xml
<form id="func" onsubmit="event.preventDefault(); draw()">
		<input type="radio" name="f" value="square" checked> y = x<sup>2</sup>
		<input type="radio" name="f" value="cube"> y = x<sup>3</sup>
		<input type="radio" name="f" value="sin"> y = sin(x)
		<input type="radio" name="f" value="cos"> y = cos(x)
		<br />Color
		<select name="color">
			<option selected>black</option>
			<option>blue</option>
			<option>red</option>
			<option>yellow</option>
		</select><br />
		<input type="submit" value="draw" />
	</form>
```

Выбор цвета:

```js
const color = f['color'].value
switch (color) {
	case 'black': color_style = 'grayscale(1)'; break;
	case 'blue': break;
	case 'red': color_style = 'hue-rotate(90deg)'; break;
	case 'yellow': color_style = 'invert(1)'; break;
}
```