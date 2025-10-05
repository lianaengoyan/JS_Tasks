//SINGLY LINKED LIST
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SList {
    #size;
    #head;

    constructor(iterables = null) {
        this.#head = null;
        this.#size = 0;

        if(iterables) {
            for(let i = 0; i < iterables.length; ++i) {
                this.push_back(iterables[i]);
            } 
        } 
    }

    push_back(elem) { 
        if(!this.#head) {
            this.#head = new Node(elem);
            return;
        }

        let current = this.#head;

        while(current.next !== null) {
            current = current.next;
        }

        current.next = new Node(elem);
        this.#size++;
    }

    push_front(elem) {
        let newNode = new Node(elem);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#size++;
    }

    reverse() {
        let current = this.#head;
        let prev = null;
        let next = null;

        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.#head = prev;
    }

    sort() {
        if(this.#size < 2) return;
        this.#head = this.mergeSort(this.#head)
    }

    mergeSort(head) {
        if(!head || !head.next) return head;

            let fast = head.next;
            let slow = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let mid = slow.next;
        slow.next = null;

        const left = this.mergeSort(head);
        const right = this.mergeSort(mid);

        return this.merge(left, right);
    }

    merge(left, right) {
        if(!left) return right;
        if(!right) return left;

        let dummy = new Node(null);
        let current = dummy;

        while(left && right) {
            if(left.data <= right.data) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }

        if(left) {
            current.next = left;
        }

        if(right) {
            current.next = right;
        }

        return dummy.next;
    }

    print() {
        let result = [];
        let current = this.#head;

        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

let list = new SList([1, 2, 3, 4, 5]);
list.print();

list.push_back("0");
list.push_front("0")

list.print();   

list.reverse();
list.print();   

list.sort();
list.print();
