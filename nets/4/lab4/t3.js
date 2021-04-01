let math = 5
let arr = new Array(5, 6, 7, 3, 8, 2)
let str = new String('Test')

document.write('<br><br><b>Task 3</b>')

document.write(`<br>Array before: ${arr}`)
console.log('Array before: ', arr)
delete arr[3]
document.write(`, array arter: ${arr}`)
console.log('Array after: ', arr)
document.write('<br>See more in dev tools console')

document.write('<br>')

document.write(`<br> 2 in arr: ${2 in arr}`)
document.write(`<br> math in Gruppa: ${'math' in gr2}`)
document.write(`<br> math in student: ${'math' in s1}`)

document.write('<br>')

document.write(`<br> arr is Array: ${arr instanceof Array}`)
document.write(`<br> str is String: ${str instanceof String}`)
document.write(`<br> s1 is student: ${s1 instanceof student}`)
document.write(`<br> gr2 is student: ${gr2 instanceof student}`)

function just5() {
	return 5
}

document.write('<br><br><b>typeof</b>')

document.write(`<br>Typeof s1: ${typeof s1}`)
document.write(`<br>Typeof student: ${typeof student}`)
document.write(`<br>Typeof gr2: ${typeof gr2}`)
document.write(`<br>Typeof Gruppa: ${typeof Gruppa}`)
document.write(`<br>Typeof just5: ${typeof just5}`)

document.write('<br>')

document.write(`<br>Typeof student.name: ${typeof s1.name}`)
document.write(`<br>Typeof student.surname: ${typeof s1.surname}`)
document.write(`<br>Typeof student.phisics: ${typeof s1.phisics}`)
document.write(`<br>Typeof student.math: ${typeof s1.math}`)
document.write(`<br>Typeof student.info: ${typeof s1.info}`)
document.write(`<br>Typeof student.show_cred: ${typeof s1.show_cred}`)
document.write(`<br>Typeof student.avg_score: ${typeof s1.avg_score}`)

document.write('<br>')

document.write(`<br>Typeof Gruppa.n: ${typeof gr2.n}`)
document.write(`<br>Typeof Gruppa.spec: ${typeof gr2.spec}`)
document.write(`<br>Typeof Gruppa.number: ${typeof gr2.number}`)
document.write(`<br>Typeof Gruppa.add_stud: ${typeof gr2.add_stud}`)
document.write(`<br>Typeof Gruppa.sub_stud: ${typeof gr2.sub_stud}`)
