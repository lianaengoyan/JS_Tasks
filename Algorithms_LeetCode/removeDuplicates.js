//26. Remove Duplicates from Sorted Array

let removeDuplicates = function(nums) {
    let j = 0;

    for(let i = 1; i < nums.length; ++i) {
        if(nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
}

console.log(removeDuplicates([1,2,2]))