---
title: Самостоятельная работа №1
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 1. Основные фигуры SVG - графики

Для демонстрации было создано несколько простых фигур.

**Реализация**

1. Основы "Знаков" - круги:

```xml
<circle cx="450" cy="150" r="100" fill="red" stroke="black" stroke-width="3"></circle>

<circle cx="150" cy="150" r="100" fill="blue" stroke="black" stroke-width="3"></circle>

<circle cx="750" cy="150" r="100" fill="green" stroke="black" stroke-width="3"></circle>
```

2. Элементы изображений на "знаках" - прямоугольники и круги.

```xml
<circle cx="150" cy="150" r="100" fill="blue" stroke="black" stroke-width="3"></circle>
<circle cx="150" cy="102" r="15" fill="white" stroke="black" stroke-width="2"></circle>
<rect x="138" y="128" width="25" height="80" rx="15" ry="15" fill="white" stroke="black" stroke-width="2"/>

<circle cx="450" cy="150" r="100" fill="red" stroke="black" stroke-width="3"></circle>
<rect x="437" y="77" width="25" height="80" rx="15" ry="15" fill="white" stroke="black" stroke-width="2"/>
<circle cx="450" cy="190" r="15" fill="white" stroke="black" stroke-width="2"></circle>

<circle cx="750" cy="150" r="100" fill="green" stroke="black" stroke-width="3"></circle>



```

3. Основа "лягушачьего глаза".

```xml
<ellipse cx="450" cy="370" rx="225" ry="55" fill="yellow" stroke="gray" stroke-width="4"/>
<!-- etc -->
```

4. Текст внутри зелёного "знака".

```xml
<text x="720" y="160" style="fill:white; stroke:white; stroke-width:0.5; word-spacing: 2.5" font-size="40">OK</text>
```

Итоговая картинка выглядит следующим образом:

![](screenshot-lab1.jpg)

*Полный код в [__приложении 1__](#приложение-1)*

# Лабораторная работа № 2. Элемент Path

Для демострации построено изображение корабля полностью созданное из элементов path.

Паруса:

```xml
<g >
		<path d="M680,235
			C680,235 750,350 680,330 680,345" style="fill:pink;"/>
		<path d="M680,237
			C680,235 725,350 665,325 680,343" style="fill:white;"/>

		<path d="M580,135
			C580,135 665,345 580,325 580,315" style="fill:pink;"/>
		<path d="M580,145
			C580,145 650,350 560,320 570,325" style="fill:white;"/>

		<path d="M475,175
			C475,175 555,350 475,325 480,300" style="fill:pink;"/>
		<path d="M475,180
			C475,180 540,345 460,320 470,325" style="fill:white;"/>
	</g>
```

Мачты и корпус:

```xml
<g style="stroke:light-green; stroke-width:3; fill:aquamarine;">
		<path d="M300,400
			L400,500
			L700,500
			C700,500 800,500 800,400
			L300,400
			Z"/>

		<path d="M685,400
		L680,200
		L675,400
		Z"/>

		<path d="M585,400
			L580,100
			L575,400
			Z"/>

		<path d="M480,400
			L475,150
			L470,400
			Z"/>
	</g>
```

Получившееся изображение выглядит следующим образом:

![](screenshot-lab2.jpg)

*Код: [__приложение 2__](#приложение-2)*
