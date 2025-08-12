//Method Overriding and Super
class Animal {
    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak(){
        super.speak();
        console.log("Dog barks");
    }
}

let dog = new Dog();
dog.speak()