//Task one
function taskOneFunc() {
    alert('Welcome!')
    let userName = prompt('Enter the name')
    alert('Good afternoon ' + userName)

    let confirmation = confirm('Continue work?')
    if(confirmation) 
    	alert("OK")
    else
    	alert('Good buy ' + userName) 
}
function taskTwoFunc() {
    document.write("10 + 5 = ")
    document.write(10 + 5)
    document.write('<br>')
    document.write('"10" + "5" = ')
    document.write("10" + "5")
    document.write('<br>')
    document.write('22 + "5" = ')
    document.write(22 + "5")
    document.write('<br>')
    document.write('"22" + 5 = ')
    document.write("22" + 5)
    document.write('<br>')
    alert("The result of adding a number and a string is always a string")
}
function taskThreeFunc() {
    let x = prompt("Enter X")
    let y = prompt("Enter Y")
    let result_1 = (35 * y - 25 * x) / 5 + 232
    document.write('<br>' + "The result of the first expression ")
    document.write(`${result_1}` + '<br>')
    let result_2 = (8 * y / x + 5 * x / y - 43) * 6;
    document.write('<br>' + "The result of the second expression ")
    document.write(`${result_2}` + '<br>')
    let result_3 = result_1 % result_2
    document.write('<br>' + "The result of the third expression ")
    document.write(`${result_3}` + '<br>')
    alert(`Results: 1) ${result_1}, 2) ${result_2}, 3) ${result_3}`)
}
function taskFourFunc() {
    let variable_1 = prompt("Enter any number")
    if(variable_1 < 20 || variable_1 > 40 && variable_1 != 15 && variable_1 % 5 == 0)
        alert("Correct value")
    else
        alert("Wrong value")

    let variable_2 = prompt("Enter another number")
    if(variable_2 < 0 || variable_2 > 255)
        alert("Correct value")
    else
        alert("Wrong value")
}
function taskFiveFunc() {
    let variable_3 = prompt("Enter first number")
    let variable_4 = prompt("Enter second number")
    if(variable_3 > variable_4)
        alert("The first number is greater than the second")
    else if(variable_3 < variable_4)
        alert("The first number is less than the second")
    else
        alert("Numbers are equal")
}
function taskSixFunc() {
    let day = prompt("What`s day today?")
    switch(day){
        case "monday":
            alert(`Today is ${day}`);
            break;
        case "tuesday":
            alert(`Today is ${day}`);
            break;
        case "wednesday":
            alert(`Today is ${day}`);
            break;
        case "thursday":
            alert(`Today is ${day}`);
            break;
        case "friday":
            alert(`Today is ${day}`);
            break;
        case "saturday":
            alert(`Today is ${day}`);
            break;
        case "sunday":
            alert(`Today is ${day}`);
            break;
        default:
            alert("Nope");
    }
}
function taskSevenFunc() {
    try{
    alert(test)
    }
    catch{
        alert("Error!")
    }
}

//Task two
function FirstTableFunc() {
let a = prompt("Enter number A (for the multiplication table)");
let b = prompt("Enter number B (for the multiplication table)");
document.write('<h2>Task two</h2></br>')
document.write('<table>')
for (let i = 1; i <= a; i++)
{
    document.write("<tr>");
    for (let j = 1; j <= b; j++)
    {
        document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")
    }
document.write("</tr>")
}
document.write("</table>")
document.write('</br>')
}
FirstTableFunc()

//Task three
function SecondTableFunc() {
    let a
    let b
    let circleLenght
    let circleSquare
    a = +prompt("Enter number A (for a table with a circle.): ")
    if (isNaN(a)) {
        alert("Error")
        return
    }

    b = +prompt("Enter number B (for a table with a circle.): ")
    if (isNaN(b)) {
        alert("Error")
        return
    }

    let table_circle = '<table> <td>Radius</td> <td>Circumference</td> <td>Area of a circle</td> </tr>'
    do {
        circleLenght = Math.round(2 * 3.14 * a)
        circleSquare = Math.round(3.14 * a * a)
        table_circle += "<tr><td>" + a.toFixed(1) + "</td><td>" + circleLenght + "</td><td>" + circleSquare + "</td></tr>"
        a = a + 0.3;
    }
    while (a <= b);
    document.write(table_circle + "</table>")
    document.write('</br>')
}

document.write('<h2>Task tree</h2></br>')
SecondTableFunc();

//Task four

function ThirdTableFunc(){
    let num_1 = new Number(3.14)
    let num_2 = new Number(3)
    let table_num = `<table> <tr> <td>Number</td> <td>Method</td> <td>Result</td> <td>Method description</td> </tr>`;
    table_num += `<tr> <td> 3.14 </td> <td> toString(3.14) </td> <td> ${ num_1.toString(2) } </td> <td>The toString() method returns a string representing the object.</td> </tr>`
    table_num += `<tr> <td> 3.14 </td> <td> toExponential(3.14) </td> <td> ${ num_1.toExponential(2) } </td> <td>The toExponential method returns a string representing the Number object in exponential notation.</td> </tr>`
    table_num += `<tr> <td> 3.14 </td> <td> toPrecision(3.14) </td> <td> ${ num_1.toPrecision(2) } </td> <td>The toPrecision method returns a string representing the Number object to the specified precision.</td> </tr>`
    table_num += `<tr> <td> 3.14 </td> <td>  toFixed(3.14) </td> <td> ${ num_1.toFixed(1) } </td> <td>The toFixed method formats a number using fixed-point notation.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td> toString(3) </td> <td> ${ num_2.toString(2) } </td> <td>The toString() method returns a string representing the object.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td> toExponential(3) </td> <td> ${ num_2.toExponential(2) } </td> <td>The toExponential method returns a string representing the Number object in exponential notation.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td> toPrecision(3) </td> <td> ${ num_2.toPrecision(2) } </td> <td>The toPrecision method returns a string representing the Number object to the specified precision.</td> </tr>`
    table_num += `<tr> <td> 3 </td> <td>  toFixed(3) </td> <td> ${ num_2.toFixed(1) } </td> <td>The toFixed method formats a number using fixed-point notation.</td> </tr>`
    document.write(table_num + "</table>")
}

document.write('<h2>Task tree</h2></br>')
ThirdTableFunc()