// 1

let all = document.all
for (let i = 0; i < all.length; i++) {
	console.log(all[i].tagName, i)
}

// 2

let body_childs = document.body.childNodes
body_childs.forEach((e, i)=>{
	if (e.tagName!==undefined) {
		console.log(e.tagName, i)
	} else {}
})

// 3

let first_span;
for (let a of all) {
	if (a.tagName=='SPAN') {
		first_span = a
		break
	} else {}
}
console.log(first_span)

first_span = document.getElementsByTagName('span')[0]
console.log(first_span)

first_span = document.getElementById('span1')
console.log(first_span)

// 4

let subjects = document.getElementsByTagName('table')[0]
	.childNodes[1].childNodes[4]
	.childNodes[3].childNodes[1]
	.firstElementChild.getElementsByTagName('tr')
let score = 0
for (let i = 1; i < subjects.length; i++) {
	score += Number(subjects[i].lastElementChild.innerText)
}
score /= (subjects.length - 1)
console.log('average score: ', score)
document.getElementsByTagName('span')[1].innerHTML += ' ' + score
