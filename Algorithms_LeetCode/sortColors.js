//75. Sort Colors

function sortColors(nums) {
    let max = Math.max(...nums);
    let count = new Array(max + 1).fill(0);

    for(let i = 0; i < nums.length; ++i) {
        count[nums[i]]++;
    }

    let index = 0;

    for(let i = 0; i < count.length; ++i) {
        while(count[i] > 0) {
            nums[index++] = i;
            count[i]--;
        }
    }
    return nums;
}

console.log(sortColors([2,0,2,1,1,0]));