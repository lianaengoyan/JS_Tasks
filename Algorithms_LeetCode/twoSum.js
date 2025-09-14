//1. Two Sum
let twoSum = function (nums, target) {
    let original = [...nums];
    let arr = nums.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    let nums1 = null;
    let nums2 = null;

    while(left < right) {
        let sum = arr[left] + arr[right];

        if(sum === target) {
            nums1 = arr[left];
            nums2 = arr[right];
            break;
        } else if (sum < target) {
            left ++;
        } else {
            right--;
        }
    }

    let index1 = original.indexOf(nums1);
    let index2 = original.lastIndexOf(nums2);

    return [index1, index2];
}

console.log(twoSum([2,7,11,15], 9)) //[0,1]



//1. Two Sum (another variation)
function twoSum2 (arr, target) {
    let obj = {};
    for(let i = 0; i < arr.length; ++i) {
        let newTarget = target - arr[i];

        if(obj[newTarget] !== undefined) {
            return [obj[newTarget], i];
        }

        obj[arr[i]] = i;
    }
    return [];
}

console.log(twoSum2([2,7,11,15], 9)) //[0,1]
