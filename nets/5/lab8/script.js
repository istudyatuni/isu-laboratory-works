// 1
document.getElementById('change-color').onmouseover = (e) => {
	e.target.style.color = 'green'
}

// 2
document.getElementById('change-font-size').onclick = (e) => {
	e.target.style.fontSize = '1.5em'
}

// 3
document.getElementById('change-image').onclick = (e) => {
	e.target.src = 'doge.jpg'
}

// 4
document.getElementById('change-text-to-img').onclick = (e) => {
	e.target.innerHTML = '<img src="cat.jpg">'
}

// 5
document.getElementById('change-width').onmouseover = (e) => {
	e.target.width = 220
}
document.getElementById('change-width').onmouseout = (e) => {
	e.target.width = 200
}

// 6
document.getElementById('change-border').ondblclick = (e) => {
	e.target.style.border = 'double'
}
