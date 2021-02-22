---
title: Самостоятельная работа № 1
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 1.1. Знакомство с HTML

Изначально создается пустая HTML страничка примерно следующего содержания:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- здесь контент для отображения на странице -->
</body>
</html>
```

Потом добавляется контент: заголовки (теги `h1,h2,..h6`), абзацы с текстом (`p`), списки (`ul,ol`), и т.д. Например:

```html
<h1>Заголовок первого уровня</h1>
<p>Очень содержательный абзац с большим количеством текста</p>
<ol>
	<li>Первый элемент списка</li>
	<li>Второй</li>
	<li>3</li>
</ol>
<ul>
	<li>Просто элемент без номера</li>
	<li>И этот такой же</li>
	<li><a href="index.html">А это ссылка</a></li>
</ul>
<!-- вот так вставляются картинки -->
<img src="image.jpg">
```

Также можно делать таблицы:

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

[Код: *Приложение 1*](#приложение-1)

*Примечание:* здесь и далее слова вида "Код: Приложение 1" в pdf документе являются ссылками на разделы

# Лабораторная работа № 1.2. HTML+CSS

Подключаем CSS следующим образом:

```html
<link rel="stylesheet" href="style.css">
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

С помощью стилей управляем цветами, картинками (в том числе на фоне), шрифтами, выравниванием текста, и т.д.

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

Но их всех можно заменить на одно свойство, внутри которого написать все параметры в любом порядке

```css
.add-img {
	/*background-image: url(doge.jpg);
	background-repeat: no-repeat;
	background-position: right top;
	background-attachment: fixed;*/
	background: fixed url(doge.jpg) right top no-repeat;
}
```

[Код: *Приложение 2*](#приложение-2)

# Лабораторная работа № 1.3. HTML+CSS

Для списков задаем различные типы маркеров, можно даже картинки:

```css
ul > li {
	list-style-type: disc; /* circle, square, none */
	/* or */
	list-style-image: url(img.jpg);
}
ol > li {
	list-style-type: decimal; /* lower-latin, upper-roman, etc */
}
```

Для оформления ссылок используем псевдоклассы:

- `a:link` - обычная не посещенная ссылка
- `a:visited` - посещенная ссылка
- `а:hover` - ссылка, на которую наведен курсор
- `a:active` - ссылка во время щелчка по ней

Например:

```css
a:visited {
	color: red;
}

a:hover {
	text-decoration: underline;
	filter: hue-rotate(120deg);
}

a:active {
	filter: hue-rotate(-90deg);
}
```

**Таблицы**

Выравнивать текст в таблицах можно следующими способами:

- *По вертикали*, свойство `text-align`, значения: `right, left, center`
- *По горизонтали*, свойство `vertical-align`, значения: `top, middle, bottom`

Например:

```css
td {
	text-align: center;
	vertical-align: top;
}
```

Отступы в ячейках задаются при помощи универсального свойства `padding`

```css
td {
	padding: 1em;
}
```

**Псевдо-классы**

Для изменения стилей у первого из однотипных элементов (например, всех `p`), применяется класс `first-child`:

```css
p:first-child {
	text-decoration: none;
}
```

*Примечание*: не работает, если хотя бы у одного из элементов задан класс `class=""`

Изменение первой буквы элемента с помощью `first-letter`:

```css
p:first-letter {
	font-size: 1.2em;
	border: double;
	padding: 3px;
}
```

Первой строчки с помощью `first-line`:

```css
p:first-line {
	text-decoration: underline;
}
```

Добавление и оформление любого содержимого до или после элемента с помощью `before` и `after`:

```css
h1:first-child > a:before {
	content: "студент III курса, "
}

h1:first-child > a:after {
	content: ", проживающий по адресу \"г. Иваново\""
}
```

[Код: *Приложение 3*](#приложение-3)

<!-- # Лабораторная работа № 1.4. Блоковая модель

Стоит упомянуть разницу между `visibility: hidden;` и `display: none;`. Первый способ делает элемент невидимым, но при этом оставляет его на странице и учитывает его размеры при размещении остальных блоков. Второй - убирает элемент со страницы так, как будто его там никогда и не было

[Код: *Приложение 4*](#приложение-4)
 -->
