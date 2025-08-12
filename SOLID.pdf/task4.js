//Polymorphism in Action
class Employee {
    getSalary() {
        throw new Error("Need to be implemented")
    }
}

class FullTimeEmployee extends Employee {
    getSalary() {  
        console.log("Salary for Full Time job: 240000$")
    }
}

class PartTimeEmployee extends Employee {
    getSalary() {
        console.log("Salary for Part Time job: 170000$")
    }
}

class Freelancer extends Employee {
    getSalary() {
        console.log("Salary for Freelancer: 273000$")
    }
}

const employees = [new FullTimeEmployee(), new PartTimeEmployee(), new Freelancer()];
employees.forEach((emp) => emp.getSalary());