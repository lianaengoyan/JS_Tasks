//338. Counting Bits

var countBits = function(n) {
    let newArr = new Array(n + 1).fill(0);

    for(let i = 1;  i <= n; ++i) {
     newArr[i] = newArr[i >>> 1] + (i & 1);   
    }
    return newArr;
};