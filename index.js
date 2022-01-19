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
}

init();