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


module.exports = Employee; 