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
}

//exports
module.exports = Manager; 