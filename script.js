//complete this code
class Person {
	constructor(name, age) {
        this._name = name;
        this._age = age;

		   get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }
}
}

class Student extends Person {
	constructor(name, age) {
        super(name, age);

		study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
	constructor(name, age) {
        super(name, age);
}
let student1 = new Student('Devesh', 20);
let teacher1 = new Teacher('Mr. Jayesh', 35);

student1.study(); 
teacher1.teach(); 
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
