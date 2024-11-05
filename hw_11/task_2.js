class Employee {
    #salary;

    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        if (typeof firstName !== "string" || !(/^[a-zA-Z]{2,50}$/.test(firstName))) {
            throw new Error(`Invalid firstName ${firstName}`);
        }
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        if (typeof lastName !== "string" || !(/^[a-zA-Z]{2,50}$/.test(lastName))) {
            throw new Error(`Invalid lastName ${lastName}`);
        }
        this._lastName = lastName;
    }
    get profession() {
        return this._profession;
      }
      set profession(profession) {
        if ((typeof profession !== "string") || (!(/^[A-Za-z\s]*$/).test(profession))) {
            throw new Error (`Invalid profession ${this._profession}`)     
        }  this._profession = profession;
    }

    get salary() {
        return this.#salary;
      }
      set salary(salary) {
        if ((typeof salary !== "number") || (salary < 0 || salary > 10000)){
            throw new Error (`Invalid salary ${this.#salary}`)
        }  this.#salary = salary;
    }
    getFullName (){
    return (`${this.firstName} ${this.lastName}`);
        }

    }

class Company {
    #employees = [];
    constructor(title, phone, address){
        this._title = title;
        this._phone = phone;
        this._address = address
    }
        
    get title(){
        return this._title
    }
        
    get phone(){
        return this._phone
    }
    get address(){
        return this._address
    }
        
    addEmployee(employee) {
          if(!(employee instanceof Employee)) {
            throw new Error ('не является экземпляром Employee')
        }
        this.#employees.push(employee)
    }
    getEmployees() {
        return this.#employees
    }
    getInfo() {
        return `Компания ${this._title}\n Адрес ${this._address}\n Количество сотрудников ${this.#employees.length}`
    }
    findEmployeeByName(firstName){
        if(typeof firstName !== "string"){
            throw new Error ('Invalid data');
        } 
        const employee = this.#employees.find(employee => employee.firstName === firstName);
        if (!employee) {
            console.log(`${firstName} not found`);
        }
        return employee;
    }
    #getEmployeeIndex(firstName) {
        const index = this.#employees.findIndex(employee => employee.firstName === firstName);
        if (index === -1) {
            throw new Error(`Employee ${firstName} not found.`);
        }
        return index;
    }
    removeEmployee(firstName) {
        const index = this.#getEmployeeIndex(firstName);  
        this.#employees.splice(index, 1); 
    }
    getTotalSalary() {
        return this.#employees.reduce((total, employee) => total + employee.salary, 0)
    }
}

        
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);
        
const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
        
console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
company.removeEmployee("John");
console.log(company.getEmployees()); // [Employee, Employee]