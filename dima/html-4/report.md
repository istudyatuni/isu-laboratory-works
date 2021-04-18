---
title: Самостоятельная работа № 4
subtitle: Информационные сети
---
\clearpage

# Лабораторная работа №2.4. Пользовательские объекты JS. Специальные операторы.

Пользовательские объекты в JavaScript можно создать несколькими способами. Один из них основан на функции (функция-конструктор), в теле которой описываются все свойства и методы создаваемого объекта. Для обращения к свойствам и методам объекта при его определении необходимо использовать ключевое слово `<this>`:

```js
function Group(number, specialty, quantity){
	this.number = number;
	this.specialty = specialty;
	this.quantity = quantity;

	this.add_stud = function add_stud(q){
		this.quantity += q;
		document.write("<p>" + q + " students added to the group " + this.number + ".</p>");
	}
	this.sub_stud = function sub_stud(q){
		this.quantity -= q;
		document.write("<p>" + q + " students removed to the group " + this.number +".</p>");
	}
}
```

С помощью свойства `<prototype>` к конструкторам можно добавлять новые свойства и методы:

```js
Group.prototype.group_quantity = function group_quantity(){
	document.write("<p>Number of sutdents in the group number " + this.number + ": " + this.quantity + ".</p>");
}
```

Оператор `<in>` позволяет проверить наличие свойства/метода у объекта:

```js
if("scholarship" in student_1)
	document.write("YES</p>");
else
	document.write("NO</p>");

```

Оператор `<instanceof>` позволяет проверить, принадлежит ли некоторый объект объектной модели:

```js
document.write(`<p>Student_1 is object: ${student_1 instanceof Object}</p>`);
document.write(`<p>Student_2 is string: ${student_2 instanceof String}</p>`);
document.write(`<p>Expressions is Array: ${expressions instanceof Array}</p>`);
```

Оператор `<typeof>` позволяет определить к какому данных принадлежит объект (свойство/метод объекта:

```js
document.write(`<p>Type of expressions: ${typeof expressions}</p>`);


document.write(`<p>Type of group_1: ${typeof group_1}</p>`);
document.write(`<p>Type of group_1.number:${typeof group_1.number}</p>`);
document.write(`<p>Type of group_1.specialty:${typeof group_1.specialty}</p>`);
document.write(`<p>Type of group_1.quantity:${typeof group_1.quantity}</p>`);
document.write(`<p>Type of group_1.add_stud():${typeof group_1.add_stud}</p>`);
document.write(`<p>Type of group_1.sub_stud():${typeof group_1.sub_stud}</p>`);

document.write(`<p>Type of student_1: ${typeof student_1}</p>`);
document.write(`<p>Type of student_1.firstName:${typeof student_1.firstName}</p>`);
document.write(`<p>Type of student_1.secondName:${typeof student_1.secondName}</p>`);
document.write(`<p>Type of student_1.physicsMark:${typeof student_1.physicsMark}</p>`);
document.write(`<p>Type of student_1.mathMark:${typeof student_1.mathMark}</p>`);
document.write(`<p>Type of student_1.informaticsMark:${typeof student_1.informaticsMark}</p>`);
document.write(`<p>Type of student_1.avarageMark:${typeof student_1.avarageMark}</p>`);
document.write(`<p>Type of student_1.scholarship:${typeof student_1.scholarship}</p>`);
document.write(`<p>Type of student_1.dataInput():${typeof student_1.dataInput}</p>`);
document.write(`<p>Type of student_1.avarage():${typeof student_1.avarage}</p>`);
document.write(`<p>Type of student_1.scholarshipFunc():${typeof student_1.scholarshipFunc}</p>`);

document.write(`<p>Type of return5Func: ${typeof return5Func}</p>`);
```

# Лабораторная работа № 2.5. Объектная модель документа. Доступ к элементам web-страницы.

DOM (Объектная модель документа) – представление документа в виде дерева тегов. Каждый HTML-тег образует отдельный элемент-узел, каждый фрагмент текста – текстовый элемент.

Для манипуляций с DOM используется объект `<document>`. Используя `<document>`, можно получать нужный элемент дерева и менять его содержание:

```js
//Вывод списка имён тегов при помощи объекта document
document.write('</br>')
let all_tags = [];
for(let i = 0; i < document.all.length; i++){
	all_tags += `<p>${i}: ` + document.all[i].tagName + '</p>';
}
document.write(`<p>ALL tags:</p>${all_tags}`);
```

При помощи свойства `<childnodes>` можно обращаться к дочерним элементам текущего:

```js
//Вывод списка имён потомков тега body при помощи свойства childNodes
document.write('</br>');
let body_child = [];
for(let i = 0; i < document.body.childNodes.length; i++){
	body_child += `<p>${i}: ` + document.body.childNodes[i].tagName + '</p>';
}
document.write(`<p>Body child tags:</p>${body_child}`);
```

Свойство `<innerHTML>` позволяет динамически изменять содержимое страницы:
```js
document.querySelector("#secondSpan").innerHTML = `</br>${score / counter}</br>`;
```

# Лабораторная работа № 2.6. Объектная модель браузера (BOM)

С помощью объектной модели браузера (Browser Object Model) можно управлять поведением браузера из JavaScript.

Объект типа `<window>` создаётся при каждом открытии окна браузера. Для открытия и закрытия окон используются методы `<open(...)>`, `<close(...)>` соотвественно. 

```js
btn_1_open.onclick = () => {
	w1 = window.open("", "window_1", "top=100, left=200, width=500, height=400");
}
btn_1_output.onclick = () =>{
	w1.focus();
	w1.document.write(`<p>Window name: ${w1.name}</p>`);
}
btn_1_close.onclick = () => {
	w1.close();
}
```

Также, с помощью обьекта `<window>` можно получить информацию о: браузере, ОС, экране и т.д.

```js
let insert = (
	function(){
		let table = document.querySelector('table');
		table.rows[1].cells[0].innerText = "navigator.userAgent";
	    table.rows[1].cells[1].innerText = navigator.userAgent;
	    table.rows[2].cells[0].innerText = "navigator.appVersion";
	    table.rows[2].cells[1].innerText = navigator.appVersion;
	    table.rows[3].cells[0].innerText = "navigator.appName";
	    table.rows[3].cells[1].innerText = navigator.appName;
	    table.rows[4].cells[0].innerText = "navigator.appCodeName";
	    table.rows[4].cells[1].innerText = navigator.appCodeName;
	    table.rows[5].cells[0].innerText = "navigator.platform";
	    table.rows[6].cells[0].innerText = "navigator.javaEnabled()";
	    table.rows[6].cells[1].innerText = navigator.javaEnabled();
	    table.rows[7].cells[0].innerText = "screen.width x screen.height";
	    table.rows[7].cells[1].innerText = `${screen.width} x ${screen.height}`;
	    table.rows[8].cells[0].innerText = "screen.colorDepth";
	    table.rows[8].cells[1].innerText = screen.colorDepth;
	    table.rows[9].cells[0].innerText = "history.length";
	    table.rows[9].cells[1].innerText = history.length;
	    table.rows[10].cells[0].innerText = "location.href";
	    table.rows[10].cells[1].innerText = location.href;
	    table.rows[11].cells[0].innerText = "location.pathnam";
	    table.rows[11].cells[1].innerText = location.pathname;
	    table.rows[12].cells[0].innerText = "location.host";
	    table.rows[12].cells[1].innerText = location.host;
	}());
```

# Вывод

В процессе выполнения данной самостоятельной работы я ознакомился с объектными моделями документа и браузера, и возможностями их использования, а также научился создавать пользовательский объекты.