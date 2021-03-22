---
title: Самостоятельная работа № 1
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 1.1. Знакомство с HTML

Обязательными тегами для создания страницы являются !DOCTYPE, html, head, body:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My first page</title>
</head>
<body>
	<!-- здесь контент для отображения на странице -->
</body>
</html>
```

Контент добавляется добавляется на страницу с помощью разнообразных тегов, например: заголовки (теги `h1,h2,..h6`), абзацы с текстом (`p`), списки (`ul,ol`):

```html
<h1 align="center">I, <a href="index2.html">Krylov Dmitry Alexandrovich</a>, learn <font color="orange">HTML</font> and CSS</h1>
	<h2>Text title</h2>
	<h3>First paragraph of text</h3>
	<p>
		<font color="darkgreen" face="monospace" size="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nunc lobortis, accumsan turpis quis, vulputate ex. Nullam in est ac erat euismod convallis. Nulla ut suscipit turpis. Nam ac rutrum orci, sit amet egestas mi. Cras id porttitor dolor. <span>Suspendisse convallis vel orci et luctus.</span> Proin tortor odio, egestas vitae cursus non, aliquet quis justo. Duis nisi dolor, egestas et blandit sit amet, cursus nec mauris. Nulla euismod euismod nisi non tempor. Maecenas finibus metus sem, quis aliquet odio pretium a. Aenean viverra viverra volutpat.</font>
	</p>
	<h3>Second paragraph of text</h3>
	<p>
		<font color="green" face="cursive" size="3">Donec aliquam elit a leo tincidunt porttitor. Duis aliquam feugiat laoreet. Nunc eu accumsan velit. Cras ligula libero, vulputate at ante vitae, pharetra pharetra elit. Praesent dapibus felis id metus gravida ultricies. <span>Vivamus consequat aliquam feugiat.</span> Nullam tincidunt ultricies metus nec tempor. Maecenas non ultricies magna. Donec tincidunt placerat rutrum. Nullam volutpat diam eget suscipit lacinia. Vestibulum ac auctor ipsum. Sed id erat vitae nisi imperdiet vulputate at dignissim nulla. Curabitur pellentesque elementum erat porta vulputate.</font>
	</p>
	<h3>Third paragraph of text</h3>
	<p>
		<font color="lightgreen" face="sans-serif" size="5">Sed aliquet venenatis lectus ac aliquet. Vivamus pulvinar tellus turpis, vel posuere purus posuere lacinia. Duis faucibus convallis arcu a tempor. Aliquam non ipsum imperdiet arcu pharetra consectetur eget non elit. Nulla vel purus vitae ex scelerisque tincidunt. Nulla suscipit velit tincidunt dolor fermentum dictum. <span>Aenean ac enim justo.</span> Ut lobortis elit eu arcu facilisis posuere. Praesent arcu lacus, accumsan a lacus non, bibendum ornare leo. Fusce sit amet mi sed ex finibus mattis nec nec tellus. Suspendisse tincidunt mollis posuere. Suspendisse potenti.</font>
	</p>
	<h2>Grocery list</h2>
	<ol>
		<li>Apple section</li>
		<ul>
			<li type="disc">Green apple</li>
			<li type="disc">Red apple</li>
		</ul>
		<li>Nut section</li>
		<ul>
			<li type="square">Walnuts</li>
			<li type="square">Peanut</li>
			<li type="square">Cashew</li>
		</ul>
		<li>Pepper section</li>
		<ul>
			<li type="circle">Bell pepper</li>
			<li type="circle">Chilli</li>
		</ul>
	</ol>
```
Таблицы (table):

```html
<table>
	<tr>
		<td>Заголовок первого стоблца</td>
		<td>Заголовок второго стоблца</td>
	</tr>
	<tr>
		<td>Текст в первом стоблце первой строки</td>
		<td>Во втором стоблце</td>
	</tr>
</table>
```

Изображения (img):

```html
<img src="blueDog.jpg" alt="Blue Dog" width="25%">
```

[Код: *Приложение 1*](#приложение-1)

*Примечание:* здесь и далее слова вида "Код: Приложение 1" в pdf документе являются ссылками на разделы

# Лабораторная работа № 1.2. HTML+CSS

Подключение CSS выглядит следующим образом:

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
```

Или пишем стили прямо в html файле:

```html
<style>
	.first {
		color: blue;
	}
	.second {
		color: #006C85;
		font-family: sans-serif;
		font-size: 3;
		text-align: right;
	}
</style>
```

С помощью стилей у различных тегов могут быть изменены цвета, изображения , шрифты, выравнивание текста, и т.д.

Указать цвет текста и размер шрифта можно различными способами.

1. Тег `<font>`. В нем задаются параметры `color="red"` и `size="3"`
2. Стили. `color: blue;` и `font-size: 3;`
3. Также цвет текста можно задать параметром `text="grey"` тега `<body>`

Строковые стили (`<span style="some styles">`) имеют приоритет над остальными способами задания.

Задание фона производится следующими свойствами:

```
background-image
background-repeat
background-position
background-attachment
background-color
```

```css
body{
	background: #F8F8FF;
}
```
Так же они могут быть записаны в краткой форме:

```css
body{
	background: url(../img/bridge.jpg) top right/25% no-repeat fixed;
}
```

[Код: *Приложение 2*](#приложение-2)

# Лабораторная работа № 1.3. HTML+CSS

Списки могут иметь различные типы маркеров, в том числе изображения:

```css
.l-lvl-1{
	list-style-type: disc;
	font-style: italic;
	color: #FF00FF;
}
.l-lvl-2{
	list-style-type: square;
	font-style: initial;
	color: #800080;
}
.l-lvl-3{
	list-style-type: circle;
	font-style: oblique;
	color: #FF00AA;
}
.l-marker{
	list-style-image: url(../img/marker.ico);
}
```

Для оформления ссылок могут быть использованы псевдоклассы:

- `a:link` - обычная не посещенная ссылка
- `a:visited` - посещенная ссылка
- `а:hover` - ссылка, на которую наведен курсор
- `a:active` - ссылка во время щелчка по ней

Например:

```css
a:link {
    text-decoration: line-through;
}
a:active {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
    background: #999999;
}
```

**Таблицы**

Текст в таблицах может быть выровнен следующими способами:

- *По вертикали*, свойство `text-align`, значения: `right, left, center`
- *По горизонтали*, свойство `vertical-align`, значения: `top, middle, bottom`

Отступы в ячейках задаются при помощи универсального свойства `padding`:

Например:

```css
td:nth-child(odd) {
    text-align: end;
    padding: 13px 11px;
    background-color: #cfc;
}
td:nth-child(even) {
    text-align: center;
    padding: 15px 10px;
    background-color: #faf;
}
td:first-child {
    text-align: start;
    padding: 12px 12px;
    background-color: #373;
}
```


**Псевдо-классы**

Для изменения стилей у первого из однотипных элементов (например, всех `p`), применяется класс `first-child`:

```css
p:first-child {
    color: steelblue;
}
```

*Примечание*: не работает, если хотя бы у одного из элементов задан класс `class=""`

Изменение первой буквы элемента с помощью `first-letter`:

```css
p::first-letter {
    border: solid 1px rgba(250, 0, 0, 0.3);
    border-radius: 5%;
    font-size: 125%;
    padding: 2px;
}
```

Первой строчки с помощью `first-line`:

```css
p::first-line {
    text-decoration: underline;
}
```

Добавление и оформление любого содержимого до или после элемента с помощью `before` и `after`:

```css
.fio::before {
	content: "Студент III курса ";
}
.fio::after {
    content: ", проживающий по адресу...";
}
```

[Код: *Приложение 3*](#приложение-3)

<!-- # Лабораторная работа № 1.4. Блоковая модель

Стоит упомянуть разницу между `visibility: hidden;` и `display: none;`. Первый способ делает элемент невидимым, но при этом оставляет его на странице и учитывает его размеры при размещении остальных блоков. Второй - убирает элемент со страницы так, как будто его там никогда и не было

[Код: *Приложение 4*](#приложение-4)
 -->
