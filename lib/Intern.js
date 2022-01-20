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

const internQuest = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: "number",
        name: "id",
        message: "What is the intern's ID number?",
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
        type: "input",
        name: "school",
        message: "What school did the intern attend?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the interns email address?",
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
]



//exports class Intern and intern array of questions
module.exports = { Intern, internQuest }; 