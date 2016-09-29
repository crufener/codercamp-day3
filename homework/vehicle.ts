class Vehicle {
    constructor(public make: string, public year: number) {}
    getMake() {
        return this.make;
    }
    getYear() {
        return this.year;
    }
    allInfo() {
        return `
        Make: ${this.make}
        Year: ${this.year}
        `;
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, public size: string) {
        super(make, year);
    }
    getSize() {
        return this.size;
    }
    allInfo() {
        super.allInfo()
        return `Size: ${this.size}`;
    }
}


class Truck extends Vehicle {
    constructor(make: string, year: number, public condition: string) {
        super(make, year);
    }
    getCondition() {
        return this.condition;
    }
    allInfo() {
        super.allInfo()
        return `Condition: ${this.condition}`;
    }
}
// create a car
let car1 = new Car("Ford", 2004, "small");
car1.allInfo();

// create a truck
let truck1 = new Truck("Toyota", 2015, "like new");
truck1.allInfo();

console.log(`car1:    ${car1.allInfo()}
                truck1:    ${truck1.allInfo()}`);
