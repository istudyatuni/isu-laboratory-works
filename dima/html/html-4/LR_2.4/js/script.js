//Task one
function Group(number, specialty, quantity){
	this.number = number;
	this.specialty = specialty;
	this.quantity = quantity;

	this.add_stud = function add_stud(q){
		this.quantity += q;
		document.write("<p>" + q + " students added to the group " + this.number + ".</p>");
	}
	this.sub_stud = function sub_stud(q){
		this.quantity -= q;
		document.write("<p>" + q + " students removed to the group " + this.number +".</p>");
	}
}

Group.prototype.group_quantity = function group_quantity(){
	document.write("<p>Number of sutdents in the group number " + this.number + ": " + this.quantity + ".</p>");
}

document.write("<h2>Task one</h2>");

let group_1 = new Group(1,"Physics",12);
let group_2 = new Group(2,"Physics",17);
let group_3 = new Group(3,"Physics",13);

group_1.add_stud(5);
group_1.sub_stud(2);

group_2.add_stud(3);
group_2.sub_stud(7);

group_3.add_stud(1);
group_3.sub_stud(9);

group_1.group_quantity();
group_2.group_quantity();
group_3.group_quantity();

//Student
function Student(firstName = '', secondName = '', physicsMark = 0, mathMark = 0, informaticsMark = 0, avarageMark = 0){
	this.firstName = firstName;
	this.secondName = secondName;
	this.physicsMark = physicsMark;
	this.mathMark = mathMark;
	this.informaticsMark = informaticsMark;
	this.avarageMark = avarageMark;

	this.dataInput = function (){
		fullName = prompt("Enter your full name")
		let space = 0;
		for(i = 0; i < fullName.length; i++){
			if(space == 0)
				if(fullName[i] == ' ')
					space = 1;
				else
					this.firstName += (fullName[i]);
			else
				this.secondName += (fullName[i]);
		}
		this.physicsMark = parseInt(prompt("Enter your physics mark"));
		this.mathMark = parseInt(prompt("Enter your math mark"));
		this.informaticsMark = parseInt(prompt("Enter your informatics mark"));
	}
	this.avarage = function (){
		this.avarageMark = (this.physicsMark + this.mathMark + this.informaticsMark) / 3;
	}
	this.scholarshipFunc = function(s){
		if(s=="YES")
			this.scholarship = "YES";
		else if(s == "NO")
			this.scholarship = "NO";
	}
}

document.write("<h2>Task two</h2>")

let student_1 = new Student();
let student_2 = new Student();
let student_3 = new Student();

student_1.dataInput();
student_1.avarage();

student_2.dataInput();
student_2.avarage();

student_3.dataInput();
student_3.avarage();

Student.prototype.scholarship = this.scholarship;

student_1.scholarshipFunc("YES");
student_2.scholarshipFunc("NO");
student_3.scholarshipFunc("NO");

Student.prototype.info = function () {
	document.write(`<p>First name: ${this.firstName}</p>` + 
					`<p>Second name: ${this.secondName}</p>` + 
				    `<p>Physics: ${this.physicsMark}</p>` + 
					`<p>Math: ${this.mathMark}</p>` + 
					`<p>Informatics: ${this.informaticsMark}</p>` + 
					`<p>Avarage: ${this.avarageMark}</p>` + 
					`<p>Scholarship: ${this.scholarship}</p>`);
}

student_1.info();
student_2.info();
student_3.info();

//Task three
document.write('<h2>Task three</h2>')
let expressions = new Array((6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8)),
	(2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3)),
    (3 * Math.sin(9) + Math.log(5) + Math.sqrt(3)),
    (2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12)));

let expressions_copy = expressions.slice();
delete expressions_copy[3];
document.write(`<p>Original: ${expressions}</p>`);
document.write(`<p>Copy: ${expressions_copy}</p>`);
if(2 in expressions_copy)
	document.write(`<p>The second element is present in the array</p>`);
else
	document.write(`<p>Array is missing second element</p>`);
document.write("</br>");

document.write("<p>The object has the property scholarship: ");
if("scholarship" in student_1)
	document.write("YES</p>");
else
	document.write("NO</p>");

document.write("<p>The object has the property mathMark: ");
if("mathMark" in student_2)
	document.write("YES</p>");
else
	document.write("NO</p>");

document.write("<p>The object has the property mark: ");
if("mark" in student_3)
	document.write("YES</p>");
else
	document.write("NO</p>");
document.write("</br>");

document.write(`<p>Student_1 is object: ${student_1 instanceof Object}</p>`);
document.write(`<p>Student_2 is string: ${student_2 instanceof String}</p>`);
document.write(`<p>Expressions is Array: ${expressions instanceof Array}</p>`);

let return5Func = () => {return 5};
document.write(`<p>Type of expressions: ${typeof expressions}</p>`);


document.write(`<p>Type of group_1: ${typeof group_1}</p>`);
document.write(`<p>Type of group_1.number:${typeof group_1.number}</p>`);
document.write(`<p>Type of group_1.specialty:${typeof group_1.specialty}</p>`);
document.write(`<p>Type of group_1.quantity:${typeof group_1.quantity}</p>`);
document.write(`<p>Type of group_1.add_stud():${typeof group_1.add_stud}</p>`);
document.write(`<p>Type of group_1.sub_stud():${typeof group_1.sub_stud}</p>`);

document.write(`<p>Type of student_1: ${typeof student_1}</p>`);
document.write(`<p>Type of student_1.firstName:${typeof student_1.firstName}</p>`);
document.write(`<p>Type of student_1.secondName:${typeof student_1.secondName}</p>`);
document.write(`<p>Type of student_1.physicsMark:${typeof student_1.physicsMark}</p>`);
document.write(`<p>Type of student_1.mathMark:${typeof student_1.mathMark}</p>`);
document.write(`<p>Type of student_1.informaticsMark:${typeof student_1.informaticsMark}</p>`);
document.write(`<p>Type of student_1.avarageMark:${typeof student_1.avarageMark}</p>`);
document.write(`<p>Type of student_1.scholarship:${typeof student_1.scholarship}</p>`);
document.write(`<p>Type of student_1.dataInput():${typeof student_1.dataInput}</p>`);
document.write(`<p>Type of student_1.avarage():${typeof student_1.avarage}</p>`);
document.write(`<p>Type of student_1.scholarshipFunc():${typeof student_1.scholarshipFunc}</p>`);

document.write(`<p>Type of return5Func: ${typeof return5Func}</p>`);


