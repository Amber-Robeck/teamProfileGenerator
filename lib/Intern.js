const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //super calls on the employee class and gets the name id and email
        super(name, id, email);
        //adds school to intern
        this.school = school;
    }

    // Change role from employee to intern
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}
// // Intern is working
// const amber = new Intern("amber", 4, "arr5533@gmail.com", "uofM");
// // console.log(amber)
// console.log(amber.getRole())

//exports
module.exports = Intern; 