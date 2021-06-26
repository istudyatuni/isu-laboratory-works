---
title: Самостоятельная работа № 5
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа № 2.7. Работа с формами.

Для создания форм используется тэг`<form>`.С помощью `<fieldset>` можно разделить форму на чати, внутри каждой такой части также задается название каждой части в `<label>`.
Для обращения удобного обращения к форме ей задаётся имя. Внутри формы могут быть использованы слудующие элементы: `input`, `textarea`, `select`. `input`с различными параметрами `type` (поле ввода, радио-кнопки), `textarea` - поле для ввода большого текста, `select` - выбор из нескольких заранее заданных вариантов:

```xml
<form name="data">
		<fieldset>
			<legend>User data</legend>
			Firstame: <br/> <input type="text" name="firstname"/></br>
			Surname: <br/> <input type="text" name="surname"/></br>
			Middlename: <br/> <input type="text" name="middlename"/></br>
			<p>Specify your gender</p>
			<input type="radio" name="s" value="m"/>Male</br>
			<input type="radio" name="s" value="f"/>Female</br>
		</fieldset>
	<br>
		<fieldset>
			<p>What specialty do you consider promising?</p>
		<fieldset>
			<input type="checkbox" name="space" value="1"/>Information systems and technologies</br>
			<input type="checkbox" name="space" value="1"/>Information technology software</br>
			<input type="checkbox" name="space" value="1"/>Information security software for mobile systems</br>
			<input type="checkbox" name="space" value="1"/>Design of electronic and web publications</br>
		</fieldset>
		<br>
		<div>
			<button type="button" id="">TEMP_NAME</button>
		</div>
	</form>
```


Для получения данных из формы используем следующий код:

```js
let btn_print = document.querySelector("#btn_print")
btn_print.onclick = () => {
    let addItem = (function() {
        let markedCheckbox = document.getElementsByName('inlineCheckbox');
        let ul = document.createElement('ul');
        ul.className = ('container my-4');
        document.body.after(ul);
        return function(){
            for (let checkbox of markedCheckbox) {
                if (checkbox.checked){
                  let li = document.createElement('li');
                  li.innerHTML = `<u>${checkbox.value}</u>`;
                  ul.append(li);
                }
              }        
        }
    }());
    addItem();
    let div = document.createElement('div');
    div.className = ('container my-4');
    div.innerHTML = 
    `
    </br>
    <u>${document.forms["data"].textarea.value}</u>
    </br>
    Student <u>${document.forms["data"].surname.value}</u> specialty <u>${document.forms["data"].specialty.value}</u> course <u>${document.forms["data"].inlineRadioOptions.value}</u> must take the following subjects:
    `;
    
    document.body.append(div);
    btn_print.disabled = 'true';
}
```

# Лабораторная работа № 2.8. События. Динамические эффекты на JS.

Для взаимодействий со страницей существуют различные события: `onmouseover` - наведение курсора, `onclick` - нажатие на элемент, `ondblclick` - двойное нажатие, `onkeypress` - нажатие клавишы, `onsubmit` - отправка формы, и так далее.

К примеру, для смены стиля объекта при срабатывании события необходимо определить соответсвующую функцию.
`e` - объект события, `e.target` - элемент, на котором вызвалось событие. Также можно не передавать параметр `e`, а вызывать просто `event.target`:

1. Изменение цвета текста при наведении курсора:

```js
let myParagraph_1 = document.querySelector("#HoverChange");
myParagraph_1.onmouseover = function(){
    this.style.color = "green";
}
myParagraph_1.onmouseout = function(){
    this.style.color = "red";
}
```

2. Изменение размера шрифта текста по щелчку мыши:

```js
let counter_1 = 0;
let myParagraph_2 = document.querySelector("#ClickChange");
myParagraph_2.onclick = function(){
    if(counter_1 == 0)
        this.style.fontSize = '32px';
    if(counter_1 == 1)
        this.style.fontSize = '16px';
    counter_1 = (counter_1 + 1) % 2;
}
```

3. Смена картинки по щелчку мыши:

```js
let counter_2 = 0;
let myImg_1 = document.getElementById("imgClickChange");
let sources = new Array('img/Cat.jpg','img/Dog.jpg');
myImg_1.onclick = function imgChange(){
    counter_2 = (counter_2 + 1) % 2;
    myImg_1.src = sources[counter_2];
}
```
4. Замена текста изображением по щелчку мыши:

```js
let myParagraph_3 = document.getElementById("ClickReplace");
myParagraph_3.onclick = function(){
    myParagraph_3.innerHTML = `<img src="img/ReplaceImg.jpg"></img>`;
};
```

5. Эффект увеличения размера изображения при наведении мыши:

```js
let myImg_2 = document.getElementById("SizeChangeImg");
myImg_2.onmouseover = function() { myImg_2.style.width = "300px"};
myImg_2.onmouseout = function() { myImg_2.style.width = "190px"};
```

6. Отрисовка цветной рамки при двойном щелчке по тексту:

```js
let myParagraph_4 = document.getElementById("DoublelClick");
myParagraph_4.ondblclick = function() { 
    myParagraph_4.style.padding = "6px";
    myParagraph_4.style.border = "solid 3px #cde";
    myParagraph_4.style.borderRadius = "4px";
};
```

# Лабораторная работа № 2.10. События. Динамические эффекты на JS.

jQuery – это библиотека, которая значительно упрощает и ускоряет написание JavaScript кода. jQuery позволяет создавать анимацию, обработчики событий, значительно облегчает выбор элементов в DOM. Данная библиотека работает со всеми браузерами.

Пример изменения обработчика события:

```js
//Task one
$('#HoverChange').mouseover(function(){
    $(this).css('color','red')
})

//Task four
$('#ClickReplace').click(function(){
    $(this).html('<img src="img/Replaceimg.jpg">')
})
```

jQuery позволяет сильно упростить создание анимаций. Для сравнения рассмотрим движения изображения.

Анимация без использования jQuery:

```js
let dx = 0.2, dy = 0
let interval
let xid = 'image'
function init_move() {
    interval = setInterval(function () {move()}, 1)
}
function move() {
    let x = parseFloat(document.all[xid].style.left)
    let y = parseFloat(document.all[xid].style.top)
    document.all[xid].style.top = (y + dy) + 'px'
    document.all[xid].style.left = (x + dx) + 'px'

    if (x > 1000) {
        clearInterval(interval)
    }
}
init_move()
```

Анимация с использованием jQuery:

```js
$('#image').animate({left: 1000}, 1000)
```
