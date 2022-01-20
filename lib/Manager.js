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

const managerQuest = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: "number",
        name: "id",
        message: "What is the team manager's ID number?",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter a valid ID number!");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team managers email address?",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
                return true;
            } else {
                console.log('Please enter a valid email!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log('Please enter a valid office number!');
                return false;
            } else {
                return true;
            }
        }
    }
]

//exports
module.exports = { Manager, managerQuest }; 