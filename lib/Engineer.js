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

//exports
module.exports = Engineer; 