---
title: Самостоятельная работа № 5
subtitle: Визуализация и мультимедия
---
\clearpage

# Лабораторная работа № 4.1. Знакомство с HTML5. Элементы video и audio. Геолокация.Элемент canvas.

Тег `<mark>` позволяет подсвечивать текст:

```xml
<h1 style="text-align: center;">I, <mark>Dmitry Alexandrovich Krylov</mark>, study HTML5</h1>
```

Тег `<video>` даёт возможность добавлять на страницу виде, его свойсто `controls` добавляет элементы управления к видео, а свойство `autoplay` заставляет видео воспроизводиться сразу же при загрузке страницы:

```xml
<video src="video/Rick Astley - Never Gonna Give You Up (Video).mp4" width="600" height="400" controls="controls" autoplay="autoplay"></video>
```

С помощью тега `audio` на страницу можно добавлять аудио-файлы:

```xml
<audio src="audio/Rick Astley - Never Gonna Give You Up.mp3" controls="controls"></audio>
```

С помощью HTML5 геолокации можно определить местоположение пользователя. Текущая позиция пользователя может быть определена с помощью метода `getCurrentPosition()` объекта `navigator.geolocation.`:

```xml
<h2>Geolocation</h2>
    <p id="geo1"></p>
    <p id="geo2"></p>
```

```js
navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById("geo1").innerHTML = position.coords.latitude;
    document.getElementById("geo2").innerHTML = position.coords.longitude;
}, (e) => {console.error('error', e)})
```

Элемент `<сanvas>` позволяет рисовать на веб-страницах произвольные фигуры с помощью JavaScript (или других клиентских скриптов). Составные фигуры состоят из нескольких соединенных простых объектов. `moveTo(x,y)` – устанавливает координаты точки, из которой начнется рисование следующего объекта; `lineTo(x,y)` – рисует прямую линию; Для раскрашивания нарисованных в canvas фигур можно использовать свойство `fillStyle`. Метод `fillText("текст",x,y)` позволяет отображать в элементе canvas произвольный текст, который может быть оформлен с помощью свойства `font`.
`СreateLinearGradient(x1,y1,x2,y2)` – создать линейный градиент, x1 и y1 координаты начальной, x2 и y2 – конечной точки градиента. После создания градиента надо указать цветаперехода с помощью метода `addColorStop(точка,цвет)`.:

```xml
<canvas id="canvas" width="500px" height="500px"></canvas>
```

```js
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

c.fillStyle = 'rgba(51, 0, 51)';
c.fillRect(0, 0, 500, 500);

c.fillStyle = 'rgba(0, 51, 0)';

c.beginPath();
c.moveTo(200,110);
c.lineTo(140,298);
c.lineTo(290,178);
c.lineTo(110,178);
c.lineTo(260,298);

c.fill()

let grad = c.createLinearGradient(30, 0, 20, 40);
grad.addColorStop(0.0,'blue');
grad.addColorStop(1.0,'yellow');
c.fillStyle = grad

c.font = '25pt itallic'
c.fillText('Dmitry Alexandrovich Krylov', 50, 70)
```

# Лабораторная работа № 4.2. Формы в HTML5.

В HTML5 введены семантические тэги, с помощью которых можно сделать страницы сайтов более понятными для поисковых систем и браузеров. 
`<footer>` – футер;
`<header>` – заголовочный блок сайта;
`<nav>` – навигационное меню.:

Новые типы input в формах (`input type=email`, `input type=url`, `input type=tel`, `input type=number` и т.д.):

Новые элементы, например `output`, который может использоваться для вывода различной информации. С помощью атрибута
for можно указать связанные поля.:

Также в HTML5 добавлены новые элементы ввода т.к `date`, `time`, `datetime`, `datetime-local`, `month`, `week`.:

```js
<header>
        <h1 style="text-align: center;">I, <mark>Dmitry Alexandrovich Krylov</mark>, study HTML5</h1>
    </header>
    <nav>
		<figure>
			<img src='image/bluedog.jpg' width='300' height='300' />
			<figcaption>Author:(</figcaption>
		</figure>
	</nav>
    <form>
        <fieldset>
            <legend>Form</legend>
            <p>
                <label for="FIO">FIO</label>
                <input
                    id="FIO"
                    oninput="out_data_FIO.value=FIO.value"
                    type="text"
                    name="FIO"
                    placeholder="FIO"
                    multiplie
                    required>
            </p>
            <p>
                <label for="course">Course</label>
                <input
                    id="number"
                    oninput="out_data_course.value=course.value"
                    type="number"
                    name="course"
                    placeholder="Course"
                    multiplie
                    required>
            </p>
            <p>
                <label for="tel">tel</label>
                <input
                    id="tel"
                    oninput="out_data_tel.value=tel.value"
                    type="tel"
                    pattern="\+7\-?\d{3}\-?\d{3}\-?\d{2}\-?\d{2}"
                    name="tel"
                    placeholder="tel"
                    required>
            </p>
            <p>
                <label for="email">E-mail</label>
                <input
                    id="email"
                    oninput="out_data_email.value=email.value"
                    type="email"
                    name="email"
                    placeholder="email"
                    multiple
                    required>
            </p>
            <p>
                <label for="date">Date</label>
                <input
                    id="date"
                    oninput="out_data_date.value=date.value"
                    type="date"
                    name="date"
                    placeholder="date"
                    multiple
                    required>
            </p>
            <p>
                <label for="time">Date</label>
                <input
                    id="time"
                    oninput="out_data_time.value=time.value"
                    type="time"
                    name="time"
                    placeholder="time"
                    multiple
                    required>
            </p>
        </fieldset>
        <p><input type="submit" value="Отправить"></p>
    </form>
    <footer>
        FIO: <output id="out_data_FIO" for="FIO"></output>
        <br>
        Course: <output id="out_data_course" for="course"></output>
		<br>
		Email: <output id="out_data_email" for="email"></output>
		<br>
		Phone: <output id="out_data_tel" for="tel"></output>
        <br>
        Date: <output id="out_data_date" for="date"></output>
        <br>
        Time: <output id="out_data_time" for="date"></output>
    </footer>
```
