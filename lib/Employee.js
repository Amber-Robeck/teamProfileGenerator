class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //input name
    getName() {
        return this.name;
    }
    //input id
    getId() {
        return this.id;
    }

    //input email
    getEmail() {
        return this.email;
    }

    //input type 
    getRole() {
        return 'Employee';
    }
};
// Employee is working
// const amber = new Employee("amber", 4, "arr5533@gmail.com");
// console.log(amber)
// console.log(amber.getName())
// console.log(amber.getId())
// console.log(amber.getEmail())
// console.log(amber.getRole())
module.exports = Employee; 