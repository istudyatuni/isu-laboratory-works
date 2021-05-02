---
title: Самостоятельная работа № 5
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 2.7. Работа с формами.

Форма создается внутри тэга `<form>`. Можно дополнительно разграничить различные части формы с помощью `<fieldset>`, внутри которого также задается название каждой части в `<label>`:

```xml
<form name="student-data">
	<fieldset>
		<legend>Задание 2</legend>
		<textarea name="bigtext">ИМИТиЕН</textarea>
	</fieldset>
	<input type="submit" value="submit" />
</form>
```

У формы задается имя для удобного доступа из JS. Доступны следующие объекты для создания интерактивных элементов: `input`, `textarea`, `select`. `input`с различными параметрами `type` создает от полей ввода, до радио-кнопок переключателей, `textarea` - поле для ввода большого текста, `select` - выбор из нескольких заранее заданных вариантов:

```xml
<form name="student-data">
	<fieldset>
		<legend>Задание 2</legend>
		<textarea name="bigtext">ИМИТиЕН</textarea>
		<br>
		<input type='text' name='firstname' placeholder="Имя" />
		<br>
		<input type='text' name='lastname' placeholder="Фамилия" />
		<br><b>Специальность</b><br>
		<select name="spec">
			<option>Математика</option>
			<option>Физика</option>
			<option>Химия</option>
			<option>Биология</option>
			<option>Информатика</option>
		</select>
		<br><b>Курс</b><br>
		<input type="radio" name="cource" value="1"> 1
		<input type="radio" name="cource" value="2"> 2
		<input type="radio" name="cource" value="3"> 3
		<input type="radio" name="cource" value="4"> 4
		<br><b>Предметы</b><br>
		<input type="checkbox" name="subjects" value="ИКТ"> ИКТ
		<input type="checkbox" name="subjects" value="УФМ"> УФМ
		<input type="checkbox" name="subjects" value="История"> История
		<input type="checkbox" name="subjects" value="Физика"> Физика
		<input type="checkbox" name="subjects" value="Математика"> Математика
	</fieldset>
	<input type="submit" value="submit" />
	<input type="reset" value="reset" />
</form>
```

Для получения данных из формы выше делаем следующее. Сначала получаем саму форму из коллекции `forms` по имени, затем из полученного объекта можно получать отдельные элементы как по имени, так и по индексу, а значения полей - по ключу `value`:

```js
let elements = document.forms['student-data'].elements
let data = {
	text: elements.bigtext.value,
	name: elements[3].value,
	spec: elements[4].value,
	cource: elements.cource.value,
	subjects: Array.from(elements.subjects)
		.filter((e) => e.checked)
		.map((e) => e.value),
}
```

Далее можно список преобразовать следующим образом:

```js
let sub_list =
	data.subjects
		.map((e) => `<li>${e}</li>`)
		// убираем запятые при преобразовании в строку
		.join('')
```

Создадим новую форму для заполнения из JS:

```xml
<form name="new-data">
	<fieldset>
		<legend>Задание 4</legend>
		<select name="data">
			<option>empty</option>
		</select>
	</fieldset>
</form>
```

Получим элемент `select` из неё:

```js
let select = document.forms['new-data'].elements.data
```

Далее получим старую форму, а точнее, список предметов:

```js
let subs = document.forms['student-data'].elements.subjects
subs = Array.from(subs)
	// если отмечено
	.filter((e) => e.checked)
	// берем значение
	.map((e) => e.value)
```

И если отмечен хотя бы один предмет, создадим внутри новой формы несколько опций с полученными именами:

```js
if (subs.length !== 0) {
	subs.forEach((e) => {
		let options = document.createElement('option')
		let text = document.createTextNode(e)
		options.appendChild(text)
		select.appendChild(options)
	})
}
```

Код: [*Приложение 1*](#приложение-1)

# Лабораторная работа № 2.8. События. Динамические эффекты на JS.

Чтобы поменять, например, какой-либо стиль у объекта при срабатывании какого-нибудь события (`event`), необходимо определить необходимую функцию, которая и вызовется на нужном событии:

```js
// например, при наведении мышки
document.getElementById('change-color').onmouseover = (e) => {
	// меняем цвет
	e.target.style.color = 'green'
}
```

`e` - объект события, `e.target` - элемент, на котором вызвалось событие. Также можно не передавать параметр `e`, а вызывать просто `event.target`:

```js
document.getElementById('change-color').onclick = () => {
	event.target.style.color = 'green'
}
```

Для взаимодействий со страницей есть различные события: `onmouseover` - наведение курсора, `onclick` - нажатие на элемент, `ondblclick` - двойное нажатие, `onkeypress` - нажатие клавишы, `onsubmit` - отправка формы, и так далее.

Код: [*Приложение 2*](#приложение-2)

# Лабораторная работа № 2.10. Знакомство с jQuery.

С помощью jQuery можно делать тоже что и на чистом JS, но с помощью меньшего количества кода. Например, так можно изменить добавление обработчиков событий:

```js
$('#change-color').mouseover(function () {
	// изменение css свойств
	$(this).css('color', 'green')
})
$('#change-image').click(function () {
	// изменение атрибутов HTML объектов
	$(this).attr('src', 'doge.jpg')
})
$('#change-text-to-img').click(function () {
	// изменение внутреннего содержимого элемента
	$(this).html('<img src="cat.jpg">')
})
```

Код: [*Приложение 3*](#приложение-3)

Создадим с помощью jQuery перемещение элемента (картинки) с помощью мыши:

```js
let flag = false // нельзя перемещать
let id_img = ''
function drag_img() {
	flag = true
	// id элемента, который надо перемещать
	id_img = '#' + event.srcElement.id
}
$('html').mousemove(() => {
	if (flag) { // если можно перемещать
		$(id_img).css('top', event.clientY)
		$(id_img).css('left', event.clientX)
	}
})
// установка размеров текстовых областей
$('html').mouseup(() => {
	flag = false // нельзя перемещать
})
```

Функция `drag_img` вызывается при начале перемещения изображения мышкой:

```xml
<img id="myimg" src="cat.jpg" ondragstart="drag_img()" style="position:absolute; top:50px; left:10px">
```

Далее при передвижении указателя мыши мы изменяем параметры, задающие отступ объекта сверху и снизу, а при отпускании кнопки мыши обнуляем флаг, разрешающий осуществлять перемещение

С помощью jQuery создавать анимации простого изменения каких-либо CSS свойств можно в одну строку, например, движение картинки по прямой линии:

```js
$('#image').animate({left: 1000}, 1000)
```

В первом параметре задаем само свойство, и на сколько необходимо его изменить, вторым параметром - время, в течении которого это будет происходить

Код: [*Приложение 4*](#приложение-4)
