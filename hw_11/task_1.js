// 1. Создайте класс Employee с полями:
//   firstName — имя сотрудника (строка).
//   lastName — фамилия сотрудника (строка).
//   profession — профессия сотрудника (строка).
//   Приватное поле salary — зарплата сотрудника (число).
class Employee {
    #salary;

    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }

// 2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
     get firstName() {
        return this._firstName;
     }
     set firstName(newFirstName) {
        if (typeof newFirstName !== 'string') {
            throw new Error('Invalid name')
        }
        this._firstName = newFirstName;
     }
     get lastName() {
        return this._lastName;
     }
     set lastName(newLastName) {
        if (typeof newLastName !== 'string') {
            throw new Error('Invalid surname');
        }
        this._lastName = newLastName;
     }
     get profession() {
        return this._profession;
     }
     set profession(newProfession) {
        if (typeof newProfession !== 'string') {
            throw new Error('Invalid profession');
        }
        this._profession = newProfession;
     }
     get salary() {
        return this.#salary;
     }
     set salary(newSalary) {
        if(typeof newSalary !== 'number') {
            throw new Error('Invalid salary');
        }
        this.#salary = newSalary;
     }
// 3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
     getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

// 4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:
const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
console.log(emp1.getFullName());

// 5. Создайте класс Company с полями:
//     title — название компании (строка).
//     phone — телефон компании (число).
//     address — адрес компании (строка).
//     Приватное поле employees — массив сотрудников (пустой массив на старте). 

class Company {
    #employees = [];

    constructor(title, phone, address) {
        this.title = title;
        this.phone = phone;
        this.address = address;
    }
//6. Реализуйте геттеры для полей title, phone, и address.
    get title() {
        return this._title;
    }
    set title(newTitle) {
        if (typeof newTitle !== 'string') {
            throw new Error('Invalid data')
        } 
        this._title = newTitle;
    }
    get phone() {
        return this._phone;
    }
    set phone(newPhone) {
        if (typeof newPhone !== 'string') {
            throw new Error('Invalid data')
        }
        this._phone = newPhone;
    }
    get address() {
        return this._address;
    }
    set address(newAddress) {
        if (typeof newAddress !== 'string') {
            throw new Error ('Invalid data')
        }
        this._address = newAddress;
    }
// 7. Добавьте методы:
//     addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
//     getEmployees() - возвращает массив всех сотрудников.

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
//8. Проверьте корректную работу:
const company = new Company("Tech Corp", "123-456", "Main Street");
    // const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee] 
console.log(company.getInfo()); 