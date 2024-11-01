class Employee {
    #salary;

    constructor(firstName, lastName, profession, salary) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._profession = profession;
        this.#salary = salary;
    }
     get firstName() {
        return this._firstName;
     }
     get lastName() {
        return this._lastName;
     }
     get profession() {
        return this._profession;
     }
     get salary() {
        return this.#salary;
     }
     getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
console.log(emp1.getFullName());

class Company {
    #employees = [];

    constructor(title, phone, address) {
        this._title = title;
        this._phone = phone;
        this._address = address;
    }
    get title() {
        return this._title;
    }
    get phone() {
        return this._phone;
    }
    get address() {
        return this._address;
    }
    addEmployee(employee) {
        if(!(employee instanceof Employee)) {
            throw new Error ('не является экземпляром Employee')
        }
        this.#employees.push(employee)
    }
    getEmployees() {
        return this.#employees;
    }
    getInfo() {
        return `Компания ${this._title}\nАдрес ${this._address}\nКоличество сотрудников ${this.#employees.length}`
    }
}
const company = new Company("Tech Corp", "123-456", "Main Street");
    // const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee] 
console.log(company.getInfo()); 