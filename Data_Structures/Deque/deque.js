//DEQUE IMPLEMENTATION

class Deque {
    #map = null;

    #headBlock;
    #headIndex;

    #tailBlock;
    #tailIndex;

    #blockSize;
    #size;

    constructor(initialBlockSize = 8, initialBucket = 4) {
        if(initialBucket < 2) {
            throw new Error();
        }

        this.#map = new Array(initialBucket).fill(null);

        const mid = Math.floor(initialBucket / 2);

        this.#headBlock = mid - 1;
        this.#headIndex = initialBlockSize - 1;

        this.#tailBlock = mid;
        this.#tailIndex = 0;

        this.#blockSize = initialBlockSize;
        this.#size = 0;
    }
    

    //HELPERS
    #copy(b, i) {
        return {block: b, index: i};
    }

    #inc(pos){
        if(pos.index === this.#blockSize - 1) {
            if(pos.block > this.#map.length - 1) {
                const offset = this.#resize();
                pos.block += offset;
            }
            ++pos.block;
            pos.index = 0;
        } else {
            ++pos.index;
        }
    }   

    #dec(pos){
        if(pos.index === 0) {
            if(pos.block === 0) {
                const offset = this.#resize();
                pos.block += offset;
            }
            --pos.block;
            pos.index = this.#blockSize - 1;
        } else {
            --pos.index;
        }
    }

    #resize () {
        let oldMap = this.#map;
        let newMap = new Array(oldMap.length * 2).fill(null);
        let offset = Math.floor((newMap.length - oldMap.length) / 2);

        for(let i = 0; i < oldMap.length; ++i) {
            newMap[i + offset] = oldMap[i];
        }

        this.#map = newMap;
        this.#headBlock += offset;
        this.#tailBlock += offset;

        return offset;
    }

   #write(pos, value){
        this.#ensureBucketExists(pos.block);
        this.#map[pos.block][pos.index] = value;
    }

    #read(pos){
        this.#ensureBucketExists(pos.block);
        return this.#map[pos.block][pos.index];
    }

    #ensureBucketExists(block) {
        const bucket = this.#map[block];
        if(!bucket)  this.#map[block] = new Array(this.#blockSize).fill(null);
    }


    //METHODS
    getSize() {
        return this.#size;
    }

    at(index) {
        if(index < 0 || index >= this.#size) throw new Error();

        const pos = this.#copy(this.#headBlock, this.#headIndex);
        this.#inc(pos);
          
        for (let i = 0; i < index; ++i) {
            this.#inc(pos);
        }
          
        return this.#read(pos);
    }

    push_back(value) {
        const pos = this.#copy(this.#tailBlock, this.#tailIndex);
        this.#write(pos, value);
        this.#inc(pos);
        
        this.#tailBlock = pos.block;
        this.#tailIndex = pos.index;
        ++this.#size;
    }
 
    push_front(value){
        const pos = this.#copy(this.#headBlock, this.#headIndex);
        this.#write(pos, value);
        this.#dec(pos);
        
        this.#headBlock = pos.block;
        this.#headIndex = pos.index;
        ++this.#size;
    }

    [Symbol.iterator](){
        const pos = this.#copy(this.#headBlock, this.#headIndex);
        this.#inc(pos);

        let count = 0;
        const _this = this; 

        return {
            next() {
                if(count >= _this.#size) {
                    return {done: true};
                }

                const value = _this.#read(pos);
                _this.#inc(pos);
                count++;

                return {value, done: false};
            }
        }
    }
}