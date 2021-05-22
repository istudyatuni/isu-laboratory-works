---
title: Самостоятельная работа №5
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 4.1. Знакомство с HTML5. Элементы video и audio. Геолокация. Элемент canvas.

В стандарте HTML5 появилось много различных тегов, упрощающих в том числе интеграцию медиа контента, а также рисование и работу с местоположением.

**Video и audio**

С помощью тэга `<audio>` встраивается аудио контент, например, так:

```xml
<audio src="this is linus and i pronounse linux as linux.mp3" controls=""></audio>
```

Также тут есть дополнительный атрибут (и он же может упротребляться для нижеследующего элемента) - `controls` - отвечает за то, будут ли отображаться элементы управления для аудио (хотя если их не указать, не будет возможности вообще управлять аудио)

Тэг `<video>` предназначен, соответственно, для видео, например:

```xml
<video src="2020-12-21_13-04-06.mkv" width="1000px" controls=""></video>
```

*Примечание*. Атрибут `controls` только проверяется на наличие, значение внутри него не обязательно

**Местоположение**

В объекте `navigator.geolocation` в JS метод `getCurrentPosition` возвращает данные, связанные с текущим местоположением. Получить из них широту и долготу можно следующим образом:

```js
navigator.geolocation.getCurrentPosition((position) => {
	console.log('Coordinates:', position.coords.latitude, position.coords.longitude)
}, (e) => {console.log('error', e)})
```

Первым параметром в функцию передается другая функция, которая обрабатывает результат, вторым - функция обработки ошибки. Широта и долгота хранятся, соответственно, в `position.coords.latitude` и `position.coords.longitude`

*Примечание*. Данная функция работает только при работе сетью по `https://` или на `localhost`

**Canvas**

На HTML холсте поддерживаются все стандартные метода для рисования, такие как линии, прямоугольники, цвета, текст, градиенты, и т.д., например:

```js
// получаем элемент из HTML и контекст рисования
let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')

// заливаем на весь размер светло-серым цветом
c.fillStyle = 'rgba(0, 0, 0, 0.3)'
c.fillRect(0, 0, 1000, 600)

// рисуем флажок и в конце заливаем
c.fillStyle = 'rgba(255, 0, 0)'
c.beginPath()
c.moveTo(100, 300)
c.lineTo(100, 100)
c.lineTo(300, 100)
c.lineTo(200, 200)
c.lineTo(300, 300)
c.lineTo(100, 300)
c.closePath()
c.fill()

// рисуем палку для флажка
c.fillStyle = 'brown'
c.fillRect(100, 100, 10, 500)

// создаем градиент с точками остановки для переходов цветов
let grad = c.createLinearGradient(30, 0, 20, 40);
grad.addColorStop(0.0,'green');
grad.addColorStop(1.0,'red');
c.fillStyle = grad

// устанавливаем шрифт и выводим текст
c.font = '20pt sans-serif'
c.fillText('свои ФИО', 20, 40)
```

Получилось вот такое простенькое изображение:

![](canvas.jpg)

Код: [*Приложение 1*](#приложение-1)

# Лабораторная работа № 4.2. Формы в HTML5

В HTML5 много новых возможностей по вводу данных, такие как даты, адреса почты, ссылки (имеется ввиду не сам ввод, а удобные интерфейсы для выбора, например, даты или времени, и последующая переконвертация в один формат, встроенная валидация для адресов почт и номеров телефонов, и так далее), а также новые тэги для "семантической верстки", т.е. разбивании страницы на смысловые блоки: `<header>`, `<nav>`, `<main>`, `<footer>`

Пример ввода email адреса и номера телефона:

```xml
<form id="data">
	<input
		id="email"
		type="email"
		name="email"
		placeholder="email"
		multiple=""
		required="">
	<input
		id="tel"
		type="tel"
		pattern="\+7\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}"
		name="tel"
		placeholder="tel"
		required="">
</form>
```

Для email указывается соответствующий тип, то, что можно ввести несколько (через запятую), а также то, что это поле обязательно - `required`. Для телефона аналогично

Еще возможные типы полей ввода: `number`, `range`, `search`, `color`, а также для даты и времени: `date`, `time`, `datetime`, `datetime-local`, `month`, `week`. Новые элементы: `datalist` и `output`. Новые атрибуты: `autofocus`, `form`, `novalidate`, `placeholder`

*Семантические тэги*

Это тэги, такие как: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<mark>`, `<figure>` и `<figcaption>`, последние 2 используются для создания подписей к изображениям, `<mark>` - для выделения какой либо части

Пример использования:

```xml
<header>
	<h1>Я, <mark>ФИО</mark>, изучаю HTML5</h1>
	<br>Эта страница с семантической версткой!
</header>
<nav>
	<figure>
		<img src='cat.jpg' width='300' height='230' />
		<figcaption>Уставший автор</figcaption>
	</figure>
</nav>
<footer>
	ФИО<br>3 курс<br>3 группа<br>
	Email: <output id="out_data_email" for="email">Заполните поле email</output>
	<br>
	Phone: <output id="out_data_tel" for="tel">Заполните поле tel</output>
</footer>
```

Также можно связать данные из одной формы, и показать в тэге `<output>`, например вот так:

```xml
<form id="data">
	<input
		id="email"
		oninput="out_data_email.value=email.value"
		type="email">
</form>
<output id="out_data_email" for="email">Заполните поле email</output>
```

Код: [*Приложение 2*](#приложение-2)
