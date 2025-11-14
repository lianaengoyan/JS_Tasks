const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;

    for(let i = 3; i * i <= num; i += 2) {
        if(num % i === 0) return false;
    }
    return true;
}

const nextPrime = (num) => { 
    let n = num + 1;
    while(!isPrime(n)) n++;
    return n;
}

class HashTable {
    #size;

    constructor(initialCap = 11, maxLoadFactor = 1.0) {

        if(!isPrime(initialCap)) {
            initialCap = nextPrime(initialCap);
        }

        this.bucketCount = initialCap;
        this.maxLoadFactor = maxLoadFactor;
        this.#size = 0;
        this.buckets = new Array(this.bucketCount).fill(null).map(() => []);
    }

    #hash(key) {
        let hash = 0;
        for(let char of key) {
            hash = (hash * 31 + char.charCodeAt(0)) % this.bucketCount;
        }
        return hash;
    }

    #loadFactor(key) {
        return this.#size / this.bucketCount;
    }

    #resize() {
        const newCapacity = nextPrime(this.bucketCount * 2);
        const newBuckets = new Array(newCapacity).fill(null).map(() => []);

        for(let bucket of this.buckets) {
            for(pair of bucket) {
                const {key, value} = pair; 

                let hash = 0;

                for (let char of key) {
                    hash = (hash * 31 + char.charCodeAt(0)) % newCapacity;
                }

                newBuckets[hash].push({ key, value });
            }
        }
        
        this.bucketCount = newCapacity;
        this.buckets = newBuckets;
    }

    set(key, value) {
        if(this.#loadFactor > this.maxLoadFactor) this.#resize();

        const index = this.#hash(key);
        const bucket = this.buckets[index];

        for(let pair of key) {
            if(pair.key === key) {
                pair.value = value;
                return;
            } 
        }

        bucket.push({key, value});
        this.#size++;
    }

    get(key) {
        const index = this.#hash(key);
        const bucket = this.buckets[index];

        for(let pair of bucket) {
            if(pair.key === key) return pair.value;
        }
        return undefined;
    }

    remove(key) {
        const index = this.#hash(key);
        const bucket = this.buckets[index];

        for(let i = 0; i < bucket.length; ++i) {
            if(bucket[i].key === key) {
                bucket.slice(i, 1);
                this.#size--;
                return true;
            }
        }
        return false;
    }

    print() {
        for (let i = 0; i < this.bucketCount; i++) {
            console.log(`${i}:`, this.buckets[i]);
        }
    }
}



const ht = new HashTable();
ht.set("alice", 24);
ht.set("nancy", 19);
ht.set("david", 17);
ht.set("mark", 24);
ht.set("bob", 64);
ht.set("mark", 77)
ht.print();

console.log("____________________________________");

ht.remove("bob");
ht.print();

