interface IVehicle {
    getDetails(): string;  // Метод для получения информации о транспортном средстве
    start(): string;       // Метод для запуска транспортного средства
  }

abstract class Vehicle implements IVehicle {
    constructor(public make: string, public model: string) {}
    abstract getDetails(): string;
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting`;
    }
}

class Car extends Vehicle {
    year: number;
    constructor(make: string, model: string, year: number) {
        super(make, model);
        this.year = year;
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}

const myCar = new Car('Mashina', 'Rabochaya', 1900);
console.log(myCar.getDetails()); // "Toyota Corolla, 2020"
console.log(myCar.start()); // "The vehicle Toyota Corolla is starting."