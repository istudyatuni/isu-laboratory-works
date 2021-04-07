function print_student() {
	let elements = document.forms['student-data'].elements
	let data = {
		text: elements.bigtext.value,
		// elements.lastname
		name: elements[3].value,
		// elements.spec
		spec: elements[4].value,
		cource: elements.cource.value,
		subjects: Array.from(elements.subjects)
			.filter((e) => e.checked)
			.map((e) => e.value),
	}
	let sub_list =
		data.subjects
			.map((e) => `<li>${e}</li>`)
			.join('')

	let text = `${data.text}<br>` +
	`Студент ${data.name} специальность ${data.spec} курс` +
	` ${data.cource} должен сдавать следующие предметы:` +
	`<ul>${sub_list}</ul>`

	document.getElementById('student-data').innerHTML = text
}
function fill_form_from_old() {
	let select = document.forms['new-data'].elements.data
	select.innerHTML = ''

	let subs = document.forms['student-data'].elements.subjects
	subs = Array.from(subs)
		.filter((e) => e.checked)
		.map((e) => e.value)

	if (subs.length !== 0) {
		subs.forEach((e) => {
			let options = document.createElement('option')
			let text = document.createTextNode(e)
			options.appendChild(text)
			select.appendChild(options)
		})
	} else {
		let options = document.createElement('option')
		let text = document.createTextNode('empty')
		options.appendChild(text)
		select.appendChild(options)
	}
}
