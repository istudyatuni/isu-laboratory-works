---
title: Самостоятельная работа №3
subtitle: Визуализация и мультимедиа
---
\clearpage

# Лабораторная работа № 5. Трансформации

Для демонстрации было создано несколько групп фигур с текстом.

**Реализация**

1. Первая группа фигур, трансформированных с помощью команд translate, rotate; каждая фигура трансфомирована с помощью команд scale, skewX, skewY:

```xml
     <g transform="translate(200,250), rotate(15)">
          <g transform="scale(1.2,1.2), skewX(15), skewY(15) ">
               <rect x="10" y="10" height="100" width="100" fill="lightblue"/>
               <text x="35" y="65" stroke="black">HELLO</text>
          </g>
          <g transform="scale(1.2,-1.2), skewX(-15), skewY(-15) ">
               <rect x="10" y="10" height="100" width="100" fill="lightgreen"/>
               <text x="35" y="65" stroke="black">HELLO</text>
          </g>
          <g transform="scale(-1.2,1.2), skewX(-15), skewY(-15) ">
               <rect x="10" y="10" height="100" width="100" fill="pink"/>
               <text x="35" y="65" stroke="black">WORLD</text>
          </g>
          <g transform="scale(-1.2,-1.2), skewX(15), skewY(15) ">
               <rect x="10" y="10" height="100" width="100" fill="moccasin"/>
               <text x="35" y="65" stroke="black">WORLD</text>
          </g>
     </g>
```

2. Вторая группа фигур, аналогичная первая, трансформированная с помощью команды matrix:

```xml
     <g transform="matrix(-1, 0.5, 0.5, 1 ,700, 300)">
          <g transform="scale(1.2,1.2), skewX(15), skewY(15) ">
               <rect x="10" y="10" height="100" width="100" fill="lightblue"/>
               <text x="35" y="65" stroke="black">HELLO</text>
          </g>
          <g transform="scale(1.2,-1.2), skewX(-15), skewY(-15) ">
               <rect x="10" y="10" height="100" width="100" fill="lightgreen"/>
               <text x="35" y="65" stroke="black">HELLO</text>
          </g>
          <g transform="scale(-1.2,1.2), skewX(-15), skewY(-15) ">
               <rect x="10" y="10" height="100" width="100" fill="pink"/>
               <text x="35" y="65" stroke="black">WORLD</text>
          </g>
          <g transform="scale(-1.2,-1.2), skewX(15), skewY(15) ">
               <rect x="10" y="10" height="100" width="100" fill="moccasin"/>
               <text x="35" y="65" stroke="black">WORLD</text>
          </g>
     </g>
```

Итоговая картинка выглядит следующим образом:

![](screenshot-lab5.jpg)

*Полный код в [__приложении 1__](#приложение-1)*

# Лабораторная работа № 6. Фильтры

Для демострации создано несколько элементов, с примененными к ним фильтрами.

Два изображения, с применным к одному из них фильтром feGaussianBlur для создания эффекта размытия по краям изображения:

```xml
<filter id="myfeGaussianBlur" filterUnits="userSpaceOnUse">
     <feGaussianBlur in="SourceGraphic" stdDeviation="10 10"/>
</filter>

<image x="50" y="50" width="100" height="100" href="img/blueDog.jpg" filter="url(#myfeGaussianBlur)"/>
<image x="50" y="50" width="100" height="100" href="img/blueDog.jpg"/>
```

Прямогульник, с применным к нему набором фильтром, накладывающем поверх него два изображения, смешанных с помощью фильтров feImage, feBlend, с отредактированными фильтром feComponentTransfer цветами:

```xml
<filter id="myFirstFilter" filterUnits="userSpaceOnUse" x="100" y="100">
     <feImage href="img/sky1.jpg" result="sky" width="200" height="200" y="200" x="250"/>
     <feImage href="img/sea.jpg" width="450" height="450" result="sea"/>
     <feBlend in1="sea" in2="sky" mode="lighten"/>
     <feComponentTransfer in1="sky" in2="sea">
          <feFuncR type="linear" slope="0.7" intercept="0"/>
          <feFuncG type="linear" slope="0.5" intercept="0"/>
          <feFuncB type="linear" slope="0.7" intercept="0"/>
          <feFuncA type="identity"/>
     </feComponentTransfer>
</filter>

<rect x="100" y="110" width="500" height="100" filter="url(#myFirstFilter)"/>
```
Прямогульник, с применным к нему набором фильтром, накладывающем поверх него два изображения, совмещенных с помощью фильтров feMerge и feImage:

```xml
<filter id="mySecondFilter" filterUnits="userSpaceOnUse" x="600" y="100">
     <feImage href="img/ocean.jpg" result="ocean" width="300" height="300"/>
     <feImage href="img/rock.jpg" result="rock" width="100" height="100" x="700" y="200"/>
     <feMerge>
          <feMergeNode in="ocean"/>
          <feMergeNode in="rock"/>
     </feMerge>
</filter>

<rect x="600" y="110" width="500" height="100" filter="url(#mySecondFilter)"/>
```

Получившееся изображение выглядит следующим образом:

![](screenshot-lab6.jpg)

*Код: [__приложение 2__](#приложение-2)*
