const inquirer = require("inquirer");
const fs = require("fs");
const pt = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const init = () => {
    inquirer.prompt([
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
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const teamManager = new Manager(name, id, email, officeNumber);

            console.log(teamManager);
            moreEmployees();
        });
}

const moreEmployees = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "Who are your other team members?",
            choices: ["Engineer", "Intern", "I don't have any more to add."]
        },
    ])
        .then(choices => {
            // console.log(choices.name)
            if (choices.name === "I don't have any more to add.") {
                //write html file
                console.log("no more to add")
                return;
            }
            else if (choices.name === "Intern") {
                //Intern questions
                newIntern();
                console.log("you are adding an Intern")
                return;
            }
            else if (choices.name === "Engineer") {
                //engineer questions
                console.log("you are adding an engineer");
                return;
            } else {
                console.log("invalid choice!")
                return;
            }
        });
}

const newIntern = () => {
    inquirer.prompt([
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
    ])
        .then(internInput => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);

            console.log(intern);
            moreEmployees();
        });
}

init();