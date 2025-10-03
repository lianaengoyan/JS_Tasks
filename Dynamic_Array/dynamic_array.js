class DArray {
    #size = 0;
    #capacity = 0;
    #arr = null;
    #CAP_EXPONENT = 2;

    constructor(cap) {
        if(cap <= 0) return;

        this.#capacity = cap;
        this.#arr = new Uint32Array(cap);
    }

    resize(new_cap, fill = 0) {
        const tmp_arr  = new Uint32Array(new_cap);

        for(let i = 0; i < this.#size; ++i) {
            tmp_arr[i] = this.#arr[i];
        }

        for(let i = this.#size; i < new_cap; ++i) {
            tmp_arr[i] = fill;
        }

        this.#capacity = new_cap;
        this.#arr = tmp_arr;
    }

    push_back(elem) {
        if(this.#size === this.#capacity) {
            this.resize(this.#capacity * this.#CAP_EXPONENT);
        }
        this.#arr[this.#size++] = elem;
    }

    pop_back(elem) {
        if(this.#size === 0) return undefined;

        const val = this.#arr[--this.#size];
        return val;
    }

    insert(pos, value) {
        if (pos < 0 || pos > this.#size) {
            throw new RangeError("index out of bounds");
        }

        if(this.#size === this.#capacity) {
            this.resize(this.#capacity > 0 ? this.#capacity * this.#CAP_EXPONENT : 1);
        }

        for(let i = this.#size; i > pos; --i) {
            this.#arr[i] = this.#arr[i - 1];
        }

        this.#arr[pos] = value;
        this.#size++;
    }

    erase(pos) {
        if (pos < 0 || pos >= this.#size) {
            throw new RangeError("index out of bounds");
        }

        const val = this.#arr[pos];

        for(let i = pos; i < this.#size - 1; ++i) {
            this.#arr[i] = this.#arr[i + 1];
        }

        this.#size--;
        return val;
    }

    swap(i, j) {
        if(i < 0 || i >= this.#size || j < 0 || j >= this.#size) {
            throw new RangeError("index out of bound")
        }

        const tmp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = tmp;
    }


    //iteration-i hamar(for...of) kam copy-i hamar, like: const copy = Array.from(arr)
    [Symbol.iterator] () {
        const collection = this.#arr;
        const collection_length = this.#size;

        let index = 0;

        return {
            next() {
                if(index < collection_length) {
                    return {value: collection[index++], done: false};
                }
                return {value: undefined, done: true};
            }
        }
    }

    values() {
        let index = 0;

        return {
            next: () => {

                if(index < this.#size) {
                    return {value: this.#arr[index++], done: false};
                } 
                return {done: true};
            },

            [Symbol.iterator]() { 
                return this; 
            }
        }
    }

    keys() {
        let index = 0;

        return {
            next: () => {
                if(index < this.#size) {
                    return {value: index++, done: false};
                }
                return {done: true};
            },

            [Symbol.iterator]() { 
                return this; 
            }
        }
        
    }

    entries() {
        let index = 0;

        return {
            next: () => {
                if(index < this.#size) {
                    return {value: [index, this.#arr[index++]], done: false};
                }
                return {done: true};
            },

            [Symbol.iterator]() { 
                return this; 
            }
        }
    }

    //METHODS
    forEach(fn) {
        for(let i = 0; i < this.#size; ++i) {
            fn(this.#arr[i], i, this);
        }
    }

    map(fn) {
        const res = new DArray(this.#size);
        
        for(let i = 0; i < this.#size; ++i) {
            res.push_back(fn(this.#arr[i], i, this));
        }
        return res;
    }

    filter(fn) {
        const res = new DArray(this.#size);

        for(let i = 0; i < this.#size; ++i) {
            if(fn(this.#arr[i], i, this)) {
                res.push_back(this.#arr[i]);
            }
        }
        return res;
    }

    reduce(fn, init) {
        let acc, start = 0;

        if(init !== undefined) {
            acc = init;
        } else {
            if(this.#size === 0) {
                throw new TypeError("There are no elements in this array");
            }

            acc = this.#arr[0];
            start = 1;
        }
            
        for(let i = start; i < this.#size; ++i) {
            acc = fn(acc, this.#arr[i], i, this);
        }
        return acc;
    }

    some(fn) {
        for(let i = 0; i < this.#size; ++i) {
            if(fn(this.#arr[i], i, this)) return true;
        }
        return false;
    }

    every(fn) {
        for(let i = 0; i < this.#size; ++i) {
            if(!fn(this.#arr[i], i, this)) return false;
        }
        return true;
    }

    find(fn) {
        for(let i = 0; i < this.#size; ++i) {
            if(fn(this.#arr[i], i, this)) return this.#arr[i];
        }
        return undefined;
    }

    findIndex(fn) {
        for(let i = 0; i < this.#size; ++i) {
            if(fn(this.#arr[i], i, this)) return i;
        }
        return -1;
    }

    includes(value) {
        for(let i = 0; i < this.#size; ++i) {
            if(this.#arr[i] === value) return true;
        }
        return false;
    }
}


//CLIENT CODE
const arr = new DArray(2);

arr.push_back(10);
arr.push_back(20);
arr.push_back(40);
console.log("First Array:", ...arr);

arr.insert(2, 30); 
console.log("Added 30 to the position 2:", ...arr);

arr.erase(1); 
console.log("Took 20 out of array:", ...arr);

arr.swap(0, 2);
console.log("Swaped 10 and 40:", ...arr);

arr.pop_back();
console.log("Took the last one:", ...arr);

arr.resize(5, 99);
console.log("Just a resize:", ...arr);

console.log("Iteration:")
for(let elem of arr) {
    console.log(elem);
}

//METHODS
console.log([...arr.map(x => x * 2)]);

console.log([...arr.filter(x => x > 5)]);

console.log(arr.reduce((a, b) => a + b, 0));

console.log(arr.some(x => x > 8));

console.log(arr.every(x => x > 0));

console.log(arr.find(x => x % 2 === 0));

console.log(arr.findIndex(x => x === 40));

console.log(arr.includes(30));
