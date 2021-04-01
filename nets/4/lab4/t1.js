function Gruppa(n, spec, number) {
	this.n = n
	this.spec = spec
	this.number = number
	this.add_stud = function (k) {
		this.number += k
		document.write('В группу ' + this.n + ' добавили ' + k + ' студентов.<br>')
	}
	this.sub_stud = function sub_stud(k) {
		this.number -= k
		document.write('Из группы ' + this.n + ' исключили ' + k + ' студентов.<br>')
	}
}

let gr2 = new Gruppa(2, 'Физика', 10)
let gr3 = new Gruppa(3, 'Биология', 6)
let gr4 = new Gruppa(4, 'Информатика', 17)

gr2.add_stud(3)
gr3.sub_stud(1)
gr4.add_stud(5)
gr3.sub_stud(2)
gr4.sub_stud(4)
gr2.add_stud(3)

function print_number(group) {
	document.write('In group ' + group.n + ' ' + group.number + ' students<br>')
}

print_number(gr2)
print_number(gr3)
print_number(gr4)
