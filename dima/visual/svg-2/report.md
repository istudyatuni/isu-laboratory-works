---
title: Самостоятельная работа №2
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 3. Работа с текстом

Для демонстрации было создано несколько текстовых строк.

**Реализация**

1. Элементы tspan с атрибутом rotate:

```xml
<tspan x="100" dy="1em" rotate="30" style="letter-spacing:2; font-family: cursive; fill:green;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</tspan>
<tspan x="100" dy="2em" rotate="-30" style="letter-spacing:2; font-family: fantasy; fill:darkgreen;">
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</tspan>
```

2. Элементы tspan с атрибутом dy ("лесенки"): 

```xml
<tspan x="100" dy="2em" style="font-size: 20;letter-spacing:2; font-family: monospace; fill:darkolivegreen;">
     <tspan dy="1em">Duis aute irure dolor </tspan>
     <tspan dy="1em">in reprehenderit in voluptate </tspan>
     <tspan dy="1em">velit esse cillum dolore </tspan>
     <tspan dy="1em">eu fugiat nulla pariatur.</tspan>
</tspan> 
<tspan x="100" dy="2em" style="letter-spacing:2; font-family: sans-serif; fill:forestgreen;">
     <tspan dy="4em">Excepteur sint occaecat cupidatat </tspan>
     <tspan dy="-1em">non proident, sunt in </tspan>
     <tspan dy="-1em">culpa qui officia deserunt </tspan>
     <tspan dy="-1em">mollit anim id est laborum.</tspan>
</tspan>
```

3. Текст на кривой (элемент textPath).

```xml
<defs>
     <path id="myPath" d="M125,475 Q200,425 275,475 T425,475 T575,475 T1525,375" />
</defs>

<text text-anchor="left" style="fill:olivedrab; font-size:20;">
     <textPath href="#myPath">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     </textPath>
</text>
```

Итоговая картинка выглядит следующим образом:

![](screenshot-lab3.jpg)

*Полный код в [__приложении 1__](#приложение-1)*

# Лабораторная работа № 4. Рисование

Для демострации создано несколько элементов.

Прямоугольник с градиентом из нескольких цветов, направленным от левого верхнего угла к правому нижнему, с коэффициентом прозрачности:

```xml
     <defs> 
          <linearGradient id="MyGradient_3" x1="0%" y1="0%" x2="100%" y2="100%" > 
               <stop offset="0%" stop-color="aquamarine"/>
               <stop offset="20%" stop-color="lightblue"/>
               <stop offset="40%" stop-color="cyan" stop-opacity="0"/>
               <stop offset="60%" stop-color="deepskyblue"/>
               <stop offset="80%" stop-color="darkturquoise"/> 
               <stop offset="100%" stop-color="lightskyblue"/> 
          </linearGradient>
     </defs>
     <rect x="400" y="100" width="150" height="150" fill="url(#MyGradient_3)" />
     <!--Круг с радиальной градиентной заливкой и нулевой прозрачностью в центре-->
     <defs>
          <radialGradient id="MyGradient_4" fx="75%" fy="75%">
               <stop offset="0%" stop-color="lime" stop-opacity="0"/>
               <stop offset="100%" stop-color="cyan" />
          </radialGradient>
     </defs>
     <circle cx="75" cy="350" r="70" fill="url(#MyGradient_4)" stroke="green"   stroke-dasharray="7 3 5"/>
```

Круг с радиальной градиентной заливкой и нулевой прозрачностью в центре:

```xml
     <defs>
          <radialGradient id="MyGradient_4" fx="75%" fy="75%">
               <stop offset="0%" stop-color="lime" stop-opacity="0"/>
               <stop offset="100%" stop-color="cyan" />
          </radialGradient>
     </defs>
     <circle cx="75" cy="350" r="70" fill="url(#MyGradient_4)" stroke="green"   stroke-dasharray="7 3 5"/>
```
Паттерн, содержащий круг с атрибутом контура:

```xml
     <pattern id="MyPattern_1" x="5" y="15" width="12" height="12" patternUnits="userSpaceOnUse"> 
          <circle cx="5" cy="5" r="5" fill="yellow" stroke="green" stroke-dasharray="7"/> 
     </pattern>
```
Элемент Marker:

```xml
     <defs>
          <marker id="myMarker" markerWidth="100" markerHeight="100" refX="0" refY="30" orient="auto">
               <polygon points="0,0, 70,30 0,60" fill="url(#MyPattern_1)" stroke="blue" stroke-width="1"/> 
          </marker> 
     </defs>
     <line x1="410" y1="390" x2="530" y2="390" stroke="red" stroke-width="2" marker-end="url(#myMarker)"/>
```
Элемент Marker:

```xml
     <defs>
          <marker id="myMarker" markerWidth="100" markerHeight="100" refX="0" refY="30" orient="auto">
               <polygon points="0,0, 70,30 0,60" fill="url(#MyPattern_1)" stroke="blue" stroke-width="1"/> 
          </marker> 
     </defs>
     <line x1="410" y1="390" x2="530" y2="390" stroke="red" stroke-width="2" marker-end="url(#myMarker)"/>
```
Элемент Symbol:

```xml
     <defs>
          <symbol id="symbol1" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,25 L 50,25  M25,0 L25,50"/>
          </symbol>
     </defs>
     <use x="38" y="40" href="#symbol1" width="50" height="50" style="fill: black; stroke: black;" stroke-width="5" />
     <use x="135" y="15" href="#symbol1" width="50" height="50" style="fill: black; stroke: black;" stroke-width="10" />
```
Элемент ClipPath:

```xml
     <defs>
          <clipPath id="clippath1">
               <circle cx="210" cy="150" r="30" />
               <circle cx="250" cy="150" r="30" />
          </clipPath>
     </defs>
     <image x="180" y="100" width="100" height="100" href="blueDog.png" clip-path="url(#clippath1)" />
```
Элемент Mask:

```xml
     <defs>
          <mask id="mask1">
               <circle cx="210" cy="230" r="30" style="fill:url(#MyPattern_1)" />
          </mask>
     </defs>
     <image x="180" y="190" width="100" height="100" href="blueDog.png" mask="url(#mask1)" />
```

Получившееся изображение выглядит следующим образом:

![](screenshot-lab4.jpg)

*Код: [__приложение 2__](#приложение-2)*
