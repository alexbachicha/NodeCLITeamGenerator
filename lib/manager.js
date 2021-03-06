// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

/* In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager' 
*/

const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, managerNumber) {
        super(name, id, email);
        this.managerNumber = managerNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.managerNumber;
    }
}

module.exports = Manager;
