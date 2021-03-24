//Task one
alert('Welcome!')
let userName = prompt('Enter the name')
alert('Good afternoon ' + userName)

let confirmation = confirm('Continue work?')
if(confirmation) 
	alert("OK")
else
	alert('Good buy ' + userName) 

//Task two
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

//Task three
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

//Task four
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

//Task five
let variable_3 = prompt("Enter first number")
let variable_4 = prompt("Enter second number")
if(variable_3 > variable_4)
	alert("The first number is greater than the second")
else if(variable_3 < variable_4)
	alert("The first number is less than the second")
else
	alert("Numbers are equal")

//Task six
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

//Task 7

try{
	alert(test)
}
catch{
	alert("Error!")
}