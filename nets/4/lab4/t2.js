function student(name, surname, phisics, math, info) {
	this.name = name
	this.surname = surname
	this.phisics = phisics
	this.math = math
	this.info = info
	this.show_cred = function show_cred() {
		document.write(`<br>Student ${this.name} ${this.surname}`)
	}
	this.avg_score = function avg_score() {
		let a = this.phisics + this.math + this.info
		a /= 3
		document.write(`<br>Average score: ${a}`)
	}
}

let s1 = new student('Galiev', 'Ilia', 3, 4, 5)
let s2 = new student('Mark', 'Tven', 5, 5, 3)
let s3 = new student('Someone', 'else', 5, 4, 5)

s1.show_cred()
s1.avg_score()

s2.show_cred()
s2.avg_score()

s3.show_cred()
s3.avg_score()

student.prototype.age = this.age

s1.age = 20
s2.age = 21
s3.age = 18

student.prototype.show_all_info = function() {
	this.show_cred()
	document.write(`, ${this.age} yo`)
	this.avg_score()
};

document.write('<br><b>All info:</b>')
s1.show_all_info()
s2.show_all_info()
s3.show_all_info()
