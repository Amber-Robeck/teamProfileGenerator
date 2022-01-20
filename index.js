const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./src/page-template");
const Manager = require("./lib/Manager");
const { Engineer, engineerQuest } = require("./lib/Engineer");
const { Intern, internQuest } = require("./lib/Intern");
let myTeam = [];


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
            myTeam.push(teamManager);
            // console.log(team(teamManager));
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
                console.log(myTeam)
                writePage();
                //This needs to write to page
                console.log(team(myTeam))
                return;
            }
            else if (choices.name === "Intern") {
                //Intern questions
                newIntern()
                // console.log("you are adding an Intern")
                return;
            }
            else if (choices.name === "Engineer") {
                //engineer questions
                newEngineer();
                console.log("you are adding an engineer");
                return;
            } else {
                console.log("invalid choice!")
                return;
            }
        });
}

const newIntern = () => {
    inquirer.prompt(internQuest)
        .then(internInput => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            myTeam.push(intern);
            // console.log(intern);
            moreEmployees();
        });
}

const newEngineer = () => {
    inquirer.prompt(engineerQuest)
        .then(engineerInput => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            myTeam.push(engineer);
            console.log(engineer);
            moreEmployees();
        });
}

function writePage() {
    let htmlCode = team(myTeam);
    fs.writeFile("./dist/index.html", htmlCode,
        (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Successful!");
        })
}

init();