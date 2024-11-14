interface Iperson {
    name: string;
    surname: string;
    experienceYears: number; 
    getDetails(): string;
}

abstract class Employee implements Iperson {
   protected salary = 0;
    constructor(public name: string, public surname: string, public experienceYears: number) {
        this.calculateSalary(); 
    }

    protected abstract calculateSalary(): number; 
    abstract getDetails(): string; 
}

class Manager extends Employee {
    constructor(
        public name: string,
        public surname: string,
        public experienceYears: number,
        public prefered = 'scrum | kanban' 
    ) {
        super(name, surname, experienceYears); 
    }

    protected calculateSalary(): number {
        return (this.salary = this.experienceYears * 500);  
    }

    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am project manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`;
      }
    }

class Developer extends Employee {
    constructor(
      public name: string,
      public surname: string,
      public experienceYears: number,
      public programmingLanguage: 'js' | 'ts' | 'java' | 'python'
    ) {
      super(name, surname, experienceYears);
      this.programmingLanguage = programmingLanguage;
    }
    protected calculateSalary(): number {
      return (this.salary = this.experienceYears * 1000);
    }
    getDetails(): string {
      return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`;
    }
  }

const manager = new Manager('Julia', 'Izotova', 2, 'scrum');
console.log(manager.getDetails());
const developer = new Developer('Julien', 'Izotikus', 5, 'ts')
console.log(developer.getDetails())