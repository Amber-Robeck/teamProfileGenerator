const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super calls on the employee class and gets the name id and email
        super(name, id, email);
        //adds github to engineer
        this.github = github;
    }

    // Change role from employee to engineer 
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}
// Engineer is working
// const amber = new Engineer("amber", 4, "arr5533@gmail.com", "Amber-Robeck");
// console.log(amber)
// console.log(amber.getRole())

const engineerQuest = [
    {
        type: "input",
        name: "name",
        message: "What is the engineers's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the engineers's name!");
                return false;
            }
        }
    },
    {
        type: "number",
        name: "id",
        message: "What is the engineers's ID number?",
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
        name: "github",
        message: "What is the engineers gitHub profile name?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the engineers gitHub profile!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
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

//exports
module.exports = { Engineer, engineerQuest }; 