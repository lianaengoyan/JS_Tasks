//DOUBLY LINKED LIST

// const MAGIC_NUMBERS = {
//     ZERO: 0,
// }

class Node {
    constructor(data = null, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;
    #magic_zero = 0;
    
    constructor(iterables) {
        if(iterables === undefined) return;

        if(iterables && typeof iterables[Symbol.iterator] !== 'function') {
            iterables = [iterables];
        }
            
        for(const item of iterables) {
            this.push_back(item);
        }
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === this.#magic_zero; //or...return this.#size === MAGIC_NUMBERS.ZERO;
    }

    clear() {
        this.#head = this.#tail = null;
        this.#size = 0;
    }
  
    push_front(value) {
        const n = new Node(value);

        if(!this.#size) {
            this.#head = n;
            this.#tail = n;
        } else {
            n.next = this.#head;
            this.#head.prev = n;
        }

        ++this.#size;
        this.#head = n;
    }

    push_back(value) {
        const n = new Node(value);

        if(!this.#size) {
            this.#head = n;
            this.#tail = n;
        } else {
            n.prev = this.#tail;
            this.#tail.next = n;
        }
        
        ++this.#size;
        this.#tail = n;
    }
  
    pop_front() {
        if(!this.#size) return null;
    
        const n = this.#head.data;

        if(this.#size === 1) {
            this.#head = this.#tail = null;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = null;
        }

        --this.#size;
        return n;

    }

    pop_back() {
        if(!this.#size) return null;
    
        const n = this.#tail.data;

        if(this.#size === 1) {
            this.#head = this.#tail = null;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
        }

        --this.#size;
        return n;
    }
  
    front() {
        return this.#head ? this.#head.data : null;
    }

    back() {
        return this.#tail ? this.#tail.data : null;

    }
  
    at(index) {
        if(index < 0 || index >= this.#size) return null;

        let current;
        if(index < this.#size / 2) {
            current = this.#head;
            for(let i = 0; i < index; ++i) {
                current = current.next;
            }
        } else {
            current = this.#tail;
            for(let i = this.#size - 1; i > index; --i) {
                current = current.prev;
            }
        }
        return current.data;
    }
  
    insert(index, value) {
        if (index < 0 || index > this.#size) return;

        if(index === 0) return this.push_front(value);
        if(index === this.#size) return this.push_back(value);

        let current = this.#head;
        for(let i = 0; i < index; ++i) current = current.next;

        const n = new Node(value);
        n.prev = current.prev;
        n.next = current
        current.prev.next = n;
        current.prev = n;

        ++this.#size;

    }

    erase(index) {
        if (index < 0 || index > this.#size) return;

        if (index === 0) return this.pop_front();
        if (index === this.#size - 1) return this.pop_back();

        let current = this.#head;
        for(let i = 0; i < index; ++i) current = current.next;

        current.prev.next = current.next;
        current.next.prev = current.prev;

        --this.#size;
        return current.data;

    }

    remove(value, equals = Object.is) {
        let current = this.#head;
        let removed = 0;

        while (current) {
            if (equals(current.data, value)) {
                const next = current.next;

                if (current.prev) current.prev.next = current.next;
                else this.#head = current.next;

                if (current.next) current.next.prev = current.prev;
                else this.#tail = current.prev;

                --this.#size;
                ++removed;
                current = next;
            } else {
                current = current.next;
            }
        }

        return removed;
    }

    reverse() {
        let current = this.#head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) this.#head = temp.prev; 
    }

    sort() {
        this.#head = this.mergeSort(this.#head);

        let current = this.#head;
        while (current && current.next) current = current.next;
        this.#tail = current;
    }
    
    mergeSort(head) {
        if (!head || !head.next) return head;
        let slow = head;
        let fast = head.next;
    
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }

        let mid = slow.next;
        slow.next = null;
        if(mid) mid.prev = null;
    
        const left = this.mergeSort(head);
        const right = this.mergeSort(mid);

        return this.merge(left, right);
    }

    merge(left, right) {
        if (!left) return right;
        if (!right) return left;
    
        let result = null;
    
        if (left.data < right.data) {
            result = left;
            left = left.next;
        } else {
            result = right;
            right = right.next;
        }
    
        let current = result;
 
        while (left && right) {
            if (left.data < right.data) {
                current.next = left;
                left.prev = current;
                left = left.next;
            } else {
                current.next = right;
                right.prev = current;
                right = right.next;
            }
            current = current.next;
        }
    
        if (left) {
            current.next = left;
            left.prev = current;
        } else if (right) {
            current.next = right;
            right.prev = current;
        }
    
        return result;
    }
    
    print() {
        let current  = this.#head;
        const result = [];

        while(current) {
            result.push(current.data);
            current = current.next;       
        }
        console.log(result.join(' -> '));
    }
}

const list = new LinkedList([10, 5, 12, 53]);

list.sort();
list.print()

list.push_back(6);
list.push_front(8);
list.print();

list.pop_back();
list.print();

list.pop_front();
list.print();

console.log(list.front());
console.log(list.back());

console.log(list.at(2))

list.insert(1, 24)
list.print();

list.erase(2);
list.print();

list.remove(10); 
list.print();          

list.reverse();         
list.print(); 