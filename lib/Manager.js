const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super calls on the employee class and gets the name id and email
        super(name, id, email);
        //adds office number to the manager
        this.officeNumber = officeNumber;
    }

    // Change role from employee to manager 
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
// Manager is working
// const amber = new Manager("amber", 4, "arr5533@gmail.com", 1);
// console.log(amber)
// console.log(amber.getRole())

//exports
module.exports = Manager; 