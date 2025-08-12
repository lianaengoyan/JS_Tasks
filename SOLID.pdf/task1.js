//Abstract Class Simulation
class Shape {
    constructor() {
        if(new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
    }

    getArea() {
        throw new Error("getArea() must be implemented in subclass.");
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.height * this.width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea () {
        return Math.PI * this.radius * this.radius;
    }
}

//const shape = new Shape();
const rect = new Rectangle(10, 5);
const circle = new Circle(7);

console.log("Ara of Rectangle is", rect.getArea());
console.log("Area of Circle is", circle.getArea().toFixed(1));


