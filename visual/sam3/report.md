---
title: Самостоятельная работа №3
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 5. Трансформации.

К фигурам в SVG можно применять различные преобразования - перемещения, повороты, масштабирование, искажение по осям. Делается следующим образом.

Для демонстрации будет использоваться 2 группы:

```xml
<g id="flag" style="stroke-width:10; stroke:hsl(100, 100%, 50%); fill: none">
	<ellipse cx="100" cy="100" rx="50" ry="70"></ellipse>
	<rect x="50" y="30" width="50" height="140" style="fill:white;stroke:white"></rect>
</g>
<g id="pine" style="fill: none; stroke: brown; stroke-width:10">
	<line x1="0" y1="0" x2="100" y2="0"></line>
</g>
```

**Поворот**

Задается в градусах. `rotate(deg)`

```xml
<use x="0" y="0" width="100" height="100" href="#flag" transform="rotate(90)" />
```

**Перемещение**

Точнее будет назвать это смещением. Задается в пикселях. `translate(x, y)`

```xml
<use x="0" y="0" width="100" height="100" href="#flag" transform="translate(380,100)" />
```

Масштабирование, задается как коеффиценты, на которые будут умножаться координаты. `scale(x, y)`

```xml
<use x="0" y="0" width="100" height="100" href="#flag" transform="scale(1,2)" />
```

**Искажение**

Смещает одну из осей фигуры, на указанное число градусов в направленнии заданной оси: `x` или `y`. `skewX(deg)`, `skewY(deg)`.

```xml
<use x="0" y="0" width="100" height="100" href="#pine" transform="skewX(100)" />
```

***Применение матриц***

Вместо записи преобразований их можно выразить с помощью матриц преобразований.

$$\begin{pmatrix} a & c & e\\  b & d & f\\  0 & 0 & 1 \end{pmatrix}$$ запишется как `matrix(a, b, c, d, e, f)`

Translate: $\begin{pmatrix} 1 & 0 & x\\  0 & 1 & y\\  0 & 0 & 1 \end{pmatrix}$<!--  \rightarrow$ `matrix(1, 0, 0, 1, x, y)` -->

Rotate: $\begin{pmatrix} \cos(\alpha) & -\sin(\alpha) & 0\\  \sin(\alpha) & \cos(\alpha) & 0\\  0 & 0 & 1 \end{pmatrix}$ <!-- \rightarrow$ `matrix(cos(a),sin(a),-sin(a),cos(a), 0, 0)` -->

Scale: $\begin{pmatrix} x & 0 & 0\\  0 & y & 0\\  0 & 0 & 1 \end{pmatrix}$

SkewX: $\begin{pmatrix} 1 & tg(\alpha) & 0\\  0 & 1 & 0\\  0 & 0 & 1 \end{pmatrix}$

SkewY: $\begin{pmatrix} 1 & 0 & 0\\ tg(\alpha) & 1 & 0\\  0 & 0 & 1 \end{pmatrix}$

Для задания нескольких преобразований одной матрицей находится произведение их матриц

Например, следующее преобразование

```xml
<use x="0" y="0" width="100" height="100" href="#pine" transform="scale(1,1) translate(400,166) skewX(100) rotate(20)" />
```

Можно записать следующим образом:

$$\begin{pmatrix} 1 & 0 & 0\\  0 & 1 & 0\\  0 & 0 & 1 \end{pmatrix}*
\begin{pmatrix} 1 & 0 & 400\\  0 & 1 & 166\\  0 & 0 & 1 \end{pmatrix}*
\begin{pmatrix} 1 & tg(100) & 0\\  0 & 1 & 0\\  0 & 0 & 1 \end{pmatrix}\ast$$
\linebreak
$$\begin{pmatrix} \cos(20) & -\sin(20) & 0\\  \sin(20) & \cos(20) & 0\\  0 & 0 & 1 \end{pmatrix}=
\begin{pmatrix} -0.12795488 & -1.15253632 & 400\\ 0.9129 & 0.4081 & 166\\  0 & 0 & 1 \end{pmatrix}$$

```xml
<use x="0" y="0" width="100" height="100" href="#pine" transform="matrix(-0.12795488, 0.9129, -1.15253632, 0.4081, 400, 166)" />
```

Выглядит получившаяся картинка следующим образом:

![](lab5.png)

# Лабораторная работа № 6. Фильтры.

Самый простой и знакомый фильтр - *размытие по Гауссу*, которое выглядит следующим образом:

![](gauss_blur.png)

Фильтры внутри SVG файла задаются в секции `defs`, и затем используются в стиле `filter`, по `id`:

```xml
<defs>
	<filter id="filt">
		<feGaussianBlur in="SourceGraphic" stdDeviation="5 5"/>
	</filter>
</defs>
<text style="filter:url(#filt);" x="0" y="0" >Test text</text>
```

Также существует фильтр "смешивание", который задается следующим образом, причем чтобы смешивание работало, необходимо задать группу с атрибутом `enable-background`:

```xml
<defs>
	<filter id="mult-blend">
		<feBlend mode="multiply" in="SourceGraphic" in2="BackgroundImage"/>
	</filter>
</defs>
<g enable-background="new" >
	<text style="filter:url(#filt); fill:black; stroke:black; stroke-width:1; font-size:2em" x="100" y="100" >Test text</text>
	<rect x="100" y="50" width="160" height="50" fill="blue" filter="url(#mult-blend)"></rect>
</g>
```

Выглядит получившаяся картинка так:

![](mult-blend.png)

Причем прямоугольник находится над текстом!

*Примечание*. В новых браузерах смешивание не отображается совсем.

Также возможно совмещать несколько изображений с помощью фильтра `feMerge`:

```xml
<defs>
	<filter id="merge">
		<feImage href="cat-img" result="cat-img" />
		<feImage href="doge-img" result="doge-img" />
		<feMerge>
			<feMergeNode in="cat-img"/>
			<feMergeNode in="doge-img"/>
		</feMerge>
	</filter>
	<image id="cat-img" href="cat.jpg" x="100" y="150" opacity="0.5" />
	<image id="doge-img" href="doge.jpg" x="100" y="150" opacity="0.5" />
</defs>
<rect x="100" y="150" width="200" height="200" style="filter:url(#merge)" />
```

*Примечание*: к сожалению, приведенные в методических указаниях примеры не отображаются нигде, даже в Inkscape, так что данный эффект без картинки.

Кроме приведенных выше фильтров есть большое множество других, например: `feComposite` - фигурная образка изображений, `feFlood` - тонирование изображения заданным цветом с заданной прозрачностью, `feOffset` - для смещения изображения, и много других.
