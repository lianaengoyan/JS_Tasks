//Multi-Level Inheritance
class Device {
    info(){
        console.log("Device");
        
    }
}

class Computer extends Device {
    info() {
        super.info();
        console.log("Computer");
    }
}

class Laptop extends Computer {
    info() {
        super.info();
        console.log("Laptop");   
    }
}

const myLaptop = new Laptop();
myLaptop.info();