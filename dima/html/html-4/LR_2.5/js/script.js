//Task one
document.write('</br>')
let all_tags = [];
for(let i = 0; i < document.all.length; i++){
	all_tags += `<p>${i}: ` + document.all[i].tagName + '</p>';
}
document.write(`<p>ALL tags:</p>${all_tags}`);

//Task one
document.write('</br>');
let body_child = [];
for(let i = 0; i < document.body.childNodes.length; i++){
	body_child += `<p>${i}: ` + document.body.childNodes[i].tagName + '</p>';
}
document.write(`<p>Body child tags:</p>${body_child}`);

//Task three
document.write('</br>');
document.write('<p>Span 1: ' + document.all("firstSpan").textContent + '</p>');
document.write('<p>Span 2: ' + document.querySelectorAll("span")[0].textContent + '</p>');
document.write('<p>Span 3: ' + document.querySelector("#firstSpan").textContent + '</p>');

//Task four
let score = 0, counter = 0;
let table = document.querySelector('#tableData');
for (let index = 1; index < table.rows.length; index++) {
    score += Number(table.rows[index].cells[2].textContent);
    counter++;
}
// let secondSpan = document.querySelector("#secondSpan")
// secondSpan.innerHTML = average;
document.querySelector("#secondSpan").innerHTML = `</br>${score / counter}</br>`;
