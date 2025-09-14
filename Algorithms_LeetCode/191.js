//191. Number of 1 Bits

let hammingWeight = function (n) {
    let count = 0;

    while(n !== 0) {
        if((n & 1) === 1) {
            count++;
        }
        n >>>= 1;
    }
    return count;
}

console.log(hammingWeight(11)); //3