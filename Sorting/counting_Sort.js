function countingSort (arr) {
    let n = arr.length;
    let max = Math.max(arr);
    let countingArray = new Array(max + 1).fill(0);

    for(let i = 0; i < n; ++i) {
        countingArray[arr[i]]++;
    }

    /*
    let index = 0;
    for(let i = 0; i < countionArray.length; ++i) {}
        while(countingArray[i] > 0) {
            arr[index++] = i;
            countingArray[i]--;
        }
    }
        return arr;
    }
    */

    const newArray = [];
    let index = 0;

    for(let i = 0; i < countingArray.length; ++i) {
        for(let j = 0; j < countingArray[i]; ++j) {
            newArray[index++] = i;
        }
    }
    return newArray;
} 