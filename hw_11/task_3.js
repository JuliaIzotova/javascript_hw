class Employee {
    #salary;

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
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
class Developer extends Employee {
    constructor(firstName, lastName, salary, programmingLanguages = []) {
        super(firstName, lastName, salary);
        this.programmingLanguages = programmingLanguages;
    }
    addProgrammingLanguages(programmingLanguage) {
        if (typeof programmingLanguages !== 'string') {
            throw new Error ('Incorrect language')
        }
        this.programmingLanguages.push(programmingLanguage);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, salary, teamSize = 0) {
        super(firstName, lastName, salary);
        this.teamSize = teamSize;
    }
    increaseTeamSize(num) {
       return this.teamSize += num;
    }
}
class Designer extends Employee {
    constructor(firstName, lastName, salary, designTools = []) {
        super(firstName, lastName, salary);
        this.designTools = designTools;
    }
    addDesignTools(designTool) {
        if (typeof designTool !== 'string') {
            throw new Error ('not valid data')
        }
        this.designTools.push(designTool);
    }
}
class Company {
    #employees = [];
    constructor(){
    }

    addEmployee(employee) {
        if (this.#employees.some(newEmployee => newEmployee.getFullName() === employee.getFullName())) {
            throw new Error(`Такой тип как '${employee.getFullName()}' уже есть`);
        }
        this.#employees.push(employee);
    }

    getEmployeesByProfession(profession) {
        return this.#employees.filter(employee => employee.constructor.name === profession);
    }
}

const company = new Company("Tech Corp", "123-456", "Main Street");
const emp1 = new Developer('Hulk', 'Hulkovich', 5000, ['JS', 'TS']);
const emp2 = new Developer('SpiderMan', 'Spiderovich', 1000 , ['Java', 'C++']);
const emp3 = new Developer('Batman', 'Barmanovich',  2000, ['Python', 'JS']);
const emp4 = new Designer('IronMan', 'Zheleznyi',  3000, ['Figma', 'Photoshop']);
const emp5 = new Designer('Thor', 'Thorovich',  3000, ['Photoshop']);
const emp6 = new Manager('Wonder', 'Women',  10000, 10);
const emp7 = new Manager('Captain', 'America', 8000, 5);

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);
company.addEmployee(emp5);
company.addEmployee(emp6);
company.addEmployee(emp7);
emp6.increaseTeamSize(100); 
console.log(company.getEmployeesByProfession('Developer'));
console.log(company.getEmployeesByProfession('Designer'));
console.log(company.getEmployeesByProfession('Manager'));
console.log(company.getEmployeesByProfession('Лентяи'))