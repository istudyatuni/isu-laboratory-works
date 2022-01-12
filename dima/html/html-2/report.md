---
title: Самостоятельная работа № 2
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 1.4. Блоковая модель

CSS позволяет задавать стили границ html-элементов:

``` css
#par1
{
    border: brown solid 3px;
}
#par2
{
    border-left: brown solid 3px;
    border-right: brown solid 3px;
}
#par3
{
    border:lightblue dashed 3px;
    border-top:pink solid 3px;
}
#par4
{
    border:orange solid 1px;
}
#par5
{
    border:red solid 2px;
    border-right:gray dashed 2px;
    border-left:gray dashed 2px;
}
#par6
{
    border: #1435AD double 4px;
}
#par7
{
    border-top: #FF8100 solid 1px;
    border-bottom: #0B6124 solid 2px;
}
```

Так же в CSS существуют возможность изменять внешние и внутренние отступы элементов:

```css
#wrap {
    margin:20px;
    padding:40px;
    height:450px;
    background-color: rgb(60,100,150);
}
.ex1 {
    border:15px rgb(0,130,75,0.5) solid;
    margin-left:70px;
    margin-right:70px;
    padding:65px;
    background-color:rgb(230,235,50,0.7);
    color:rgb(90,90,150);
}
.ex2 {
    border:10px rgb(0,130,75,0.5) solid;
    margin-top:30px;
    margin-left:210px;
    margin-right:210px;
    padding:65px;
    background-color:rgb(230,235,50,0.7);
    color:rgb(90,90,150);
}
```

Стоит упомянуть разницу между `visibility: hidden;` и `display: none;`. Первый способ делает элемент невидимым, но при этом оставляет его на странице и учитывает его размеры при размещении остальных блоков. Второй - убирает элемент со страницы так, как будто его там никогда и не было.


[Код: *Приложение 1*](#приложение-1)

*Примечание:* здесь и далее слова вида "Код: Приложение 1" в pdf документе являются ссылками на разделы

# Лабораторная работа № 1.5. Новые возможности в CSS3

CSS позволяет использовать в качестве фона изображение, с заданными для него свойствами:

```css
body{
	background-image: url(../img/bridge.jpg);
	background-size: 100%;
	background-repeat: no-repeat;
}

```

Свойтсво @font-face позволяет добавлять шрифты:

```css
@font-face {
    font-family: "Monotype Corsiva";
    src: url("fonts/monotype_corsiva.eot"); /* IE 9 Compatibility Mode */
    src: url("fonts/monotype_corsiva.eot?#iefix") format("embedded-opentype"),
        /* IE < 9 */ url("fonts/monotype_corsiva.woff2") format("woff2"),
        /* Super Modern Browsers */ url("fonts/monotype_corsiva.woff")
            format("woff"),
        /* Firefox >= 3.6, any other modern browser */
            url("fonts/monotype_corsiva.ttf") format("truetype"),
        /* Safari, Android, iOS */
            url("fonts/monotype_corsiva.svg#monotype_corsiva") format("svg"); /* Chrome < 4, Legacy iOS */
}

```

Цвета можно задавать различными способами:

```css
{
background-color: hsla(180,80%,50%,60%);
box-shadow: 0px 0px 20px 7px hsl(180,80%,50%);
background: rgba(2,0,36,1);
}

```

Так же CSS позволяет создавать градиенты:

```css
{
background: rgba(2,0,36,1);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
```

Свойство transform позволяет трансформировать элементы, а свойтво transition создавать эффект перхода:
```css
.figure:hover{
	transform: translate(200px,200px) rotate(45deg) scale(2,0.5) skew(15deg,15deg);
	transition: 0.6s ease-in-out;
}
```

[Код: *Приложение 2*](#приложение-2)

# Лабораторная работа № 1.6. Анимация. Создание выпадающего меню

Для создания анимации в CSS3 используется свойство @keyframes. Чтоб анимировать элемент, надо добавить ему свойство animation и указать в нем имя анимации и время , в течении которого она будет выполняться. Также можно устанавливать количество повторов анимации (3-е значение).:

```css
#ball{
	width: 140px;
	height: 140px;
	border-radius: 70px;
	background: linear-gradient(top, rgba(187,187,187,1) 5%, rgba(119,119,119,1) 99%);
	box-shadow: inset 0 -5px 15px rgba(255,255,255,0.4),
				inset -2px -1px 40px rgba(0,0,0,0.4),
				0 0 1px rgba(0,0,0,1);
	animation: jump 1.5s infinite;
}
@keyframes jump {
    0% {
        top: 0;
    }
    50% {
        margin-top: 140px;
        height: 140px;
    }
    55% {
        margin-top: 160px;
        height: 120px;
    }
    65% {
        margin-top: 120px;
        height: 140px;
    }
    95% {
        margin-top: 0;
    }
    100% {
        margin-top: 0;
    }
}
```
```css
#ballShadow{
	width: 60px;
	height: 75px;
	position: absolute;
	z-index: 0;
	buttom: 0;
	left: 50%;
	margin-left: -30px;
	background: rgba(20,20,20,0.1);
	box-shadow: 0px 0 20px 35px rgba(20,20,20,0.1);
	border-radius: 30px/40px;
	animation: shrink 1.5s infinite;
}
@keyframes shrink {
    0% {
        bottom: 0;
        margin-left: -30px;
        width: 60px;
        height: 75px;
        background: rgba(20, 20, 20, .1);
        box-shadow: 0px 0 20px 35px rgba(20,20,20,.1);
        border-radius: 30px / 40px;
    }
    50% {
        bottom: 30px;
        margin-left: -10px;
        width: 20px;
        height: 5px;
        background: rgba(20, 20, 20, .3);
        box-shadow: 0px 0 20px 35px rgba(20,20,20,.3);
        border-radius: 20px / 20px;
    }
    100% {
        bottom: 0;
        margin-left: -30px;
        width: 60px;
        height: 75px;
        background: rgba(20, 20, 20, .1);
        box-shadow: 0px 0 20px 35px rgba(20,20,20,.1);
        border-radius: 30px / 40px;
    }
}
```

[Код: *Приложение 3*](#приложение-3)
