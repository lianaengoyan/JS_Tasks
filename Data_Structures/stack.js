class Stack {
    #size = 0;
    #capacity = 0;
    #arr = [];

    constructor(cap = 8) {
        this.#capacity = cap;
    }

    isEmpty() {
        return this.#size === 0;
    }

    isFull(){
        return this.#size === this.#capacity;
    }

    push(elem) {
        if(this.isFull()) throw new Error("Max size exceeded");
        this.#arr[this.#size++] = elem;
    }

    pop(elem) {
        if(this.isEmpty()) throw new Error("There is no element to pop out");
        let result = this.#arr[--this.#size];
        this.#arr.length = this.#size;

        return result;
    }

    peek() {
        if(this.isEmpty()) throw new Error("");
        return this.#arr[this.#size - 1];
    }

    getSize() {
        return this.#size;
    }

    print() {
        for(let i of this.#arr) {
            console.log(i);
        }
    }
}

let stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(8);
stack.push(3);
stack.push(2);
stack.print();

console.log("--------------------")

stack.pop();
stack.print();

