const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./src/page-template");
const { Manager, managerQuest } = require("./lib/Manager");
const { Engineer, engineerQuest } = require("./lib/Engineer");
const { Intern, internQuest } = require("./lib/Intern");
let myTeam = [];

//starts app and creates manager with userInput
const init = () => {
    inquirer.prompt(managerQuest)
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const teamManager = new Manager(name, id, email, officeNumber);
            myTeam.push(teamManager);
            moreEmployees();
        });
}
//prompts user about adding more team members
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
            if (choices.name === "I don't have any more to add.") {
                //write html file
                writePage();
                return;
            }
            else if (choices.name === "Intern") {
                //Intern questions
                newIntern();
                return;
            }
            else if (choices.name === "Engineer") {
                //engineer questions
                newEngineer();
                return;
            } else {
                console.log("invalid choice!")
                return;
            }
        });
}

//starts intern questions and creates intern with user input
const newIntern = () => {
    inquirer.prompt(internQuest)
        .then(internInput => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            myTeam.push(intern);
            moreEmployees();
        });
}

//starts engineer questions and creates engineer with user input
const newEngineer = () => {
    inquirer.prompt(engineerQuest)
        .then(engineerInput => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            myTeam.push(engineer);
            moreEmployees();
        });
}

//creates html page and writes team to page
function writePage() {
    let htmlCode = team(myTeam);
    fs.writeFile("./dist/index.html", htmlCode,
        (err) => {
            if (err) {
                //throw error??
                //catch error??
                console.log(err);
            }
            console.log("Successful!");
        })
}

init();