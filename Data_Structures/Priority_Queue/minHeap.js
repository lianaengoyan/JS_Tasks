//MIN 
class PriorityQueue {
    #heap; 

    constructor(){
        this.#heap = [];
    }

    //HELPERS
    #parent(i) {
        return Math.floor((i - 1 ) / 2);
    }

    #left(i) {
        return (i * 2) + 1;
    }

    #right(i) {
        return (i * 2) + 2;
    }

    #shift_Up(i){
        while(i > 0) {
            let parent = this.#parent(i);
            if(this.#heap[i] < this.#heap[parent]) {
                [this.#heap[i], this.#heap[parent]] = 
                [this.#heap[parent], this.#heap[i]]

                i = parent;
            } else {
                break;
            }
        }
    }

    #shift_Down(i){
        const n = this.#heap.length;

        while(true) {
            const left = this.#left(i);
            const right = this.#right(i);

            let smallest = i;

            if(left < n && this.#heap[left] < this.#heap[smallest]) smallest = left;
            if(right < n && this.#heap[right] < this.#heap[smallest]) smallest = right;

            if(i !== smallest) {
                [this.#heap[i], this.#heap[smallest]] = 
                [this.#heap[smallest], this.#heap[i]];

                i = smallest;
            } else {
                break;
            }
        }
    }

    //INTERFACE
    size() {
        return this.#heap.length;
    }

    empty() {
        return this.#heap.length === 0;
    }

    push(elem) {
        this.#heap.push(elem);
        this.#shift_Up(this.#heap.length - 1);
    }

    pop() {
        if(this.empty()) throw new Error('underflow');

        const root = this.#heap[0];
        const last = this.#heap.pop();

        if(!this.empty()) {
            this.#heap[0] = last;
            this.#shift_Down(0)
        }
        return root;
    }

    peek(){
        return this.#heap[0];
    }

    print() {
        console.log(`[${this.#heap}]`);
    }
}






