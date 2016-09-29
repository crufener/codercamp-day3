var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.allInfo = function () {
        return "\n        Make: " + this.make + "\n        Year: " + this.year + "\n        ";
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(make, year, size) {
        _super.call(this, make, year);
        this.size = size;
    }
    Car.prototype.getSize = function () {
        return this.size;
    };
    Car.prototype.allInfo = function () {
        _super.prototype.allInfo.call(this);
        return "Size: " + this.size;
    };
    return Car;
}(Vehicle));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(make, year, condition) {
        _super.call(this, make, year);
        this.condition = condition;
    }
    Truck.prototype.getCondition = function () {
        return this.condition;
    };
    Truck.prototype.allInfo = function () {
        _super.prototype.allInfo.call(this);
        return "Condition: " + this.condition;
    };
    return Truck;
}(Vehicle));
var car1 = new Car("Ford", 2004, "small");
car1.allInfo();
var truck1 = new Truck("Toyota", 2015, "like new");
truck1.allInfo();
console.log("car1:    " + car1.allInfo() + "\n                truck1:    " + truck1.allInfo());
