class Queue {
    #arr;
    #front = 0;
    #rear = 0;
    #size = 0;
    #capacity = 0;

    constructor(cap = 8) {
        this.#capacity = cap;
        this.#arr = new Array(this.#capacity).fill(null);
    }

    isEmpty() {
        return this.#size === 0;
    }

    isFull() {
        return this.#size === this.#capacity;
    }

    getSize() {
        return this.#size;
    }

    enqueue(elem) { 
        if(this.isFull()) throw new Error("Can not push");
        this.#arr[this.#rear] = elem;
        this.#rear = (this.#rear + 1) % this.#capacity;
        this.#size++;
    }

    dequeue() {
        if(this.isEmpty()) throw new Error("Can not do pop out");
        const elem = this.#arr[this.#front];

        this.#arr[this.#front] = null;
        this.#front = (this.#front + 1) % this.#capacity;
        this.#size--;

        return elem;
    }

    print() {
        for(let i = 0; i < this.#size; ++i) {
            const index = (this.#front + i) % this.#capacity;
            console.log(this.#arr[index]);
        }
    }
}

let queue = new Queue();

queue.enqueue(6);
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(5);
queue.print();

console.log("-------------");

queue.dequeue();
queue.print();
