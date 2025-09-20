//912. Sort an Array

function sortArray (nums) {
    if(nums.length <= 1) {
        return nums;
    }

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    
    return merge(left, right);
}

function merge (left, right) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

let nums = [5,2,3,1];
console.log(sortArray(nums));