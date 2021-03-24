//Task one
function taskOneFunc(){
	let expressions = new Array((6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8)),
	(2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3)),
    (3 * Math.sin(9) + Math.log(5) + Math.sqrt(3)),
    (2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12)))
    document.write('<h2>Task one</h2>')
    for(let i = 0; i < expressions.length; i++){
		document.write('[' + i + '] = ' + expressions[i] + ' ')
	}
	let max = Math.max(...expressions);
	let min = Math.min(...expressions);
	document.write("</br> min = " + min + "</br>" + "max = " + max + "</br>")
}


//Task two
function taskTwoFunc(){
	document.write("<h2>Task two</h2></br>")
	let methods = new Array('pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort')
	let a = new Array()
	let b = new Array()
	for(let i = 0; i < methods.length; i++){
		if(Math.hasOwnProperty(methods[i]))
			a.push(methods[i])
		else
			b.push(methods[i])
	}
	document.write("Math methods: " + a + "</br>")
	document.write("Array methods: " + b + "</br>")
}
// taskTwoFunc()

//Task three
function taskThreeFunc(){
	let str = "Krylov Dmitry Aleksandrovich"
	document.write("<h2>Task three</h2></br> String " + str + "</br>")
	document.write("String length: " + str.length + "</br>")
	let up = str
	document.write("Upper case string: " + up.toUpperCase() + "</br>")
	let low = str
	document.write("Lower case string: " + low.toLowerCase() + "</br>")
	let result = up + low
	let fio = new String()
	fio+=str[0]
	for(let i = 2; i < str.length; i++){
		if(str[i-1]==' ')
			fio+=str[i]
	}
	document.write("FIO: " + fio + '</br>')
}

//Task four
function taskFourFunc(){
	document.write("<h2>Task four</h2></br>")

	let date = new Date()

	let year = date.getFullYear()
	let month = date.getMonth()
	let day =date.getDay()
	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()

	let table = '<table border="1">'
	let row = (name, value) => {return '<tr><td>' + name + '</td><td>' + value + '</td></tr>'}
	table += row('Year', year)
	table += row('Month', month)
	table += row('Day', day)
	table += row('Hours', hour)
	table += row('Minuts', minute)
	table += row('Seconds', second)
	table += '</table>'
	document.write(table)
}

taskOneFunc()

taskTwoFunc()

taskThreeFunc()
taskFourFunc()

