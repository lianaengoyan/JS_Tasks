//1365. How Many Numbers Are Smaller Than the Current Number

function smallerNumThanCurrent (nums) {
    let max = Math.max(...nums);
    let count = new Array(max + 1).fill(0);

    for(let i = 0; i < nums.length; ++i) {
        count[nums[i]]++;
    }

    for(let i = 1; i < count.length; ++i) {
        count[i] += count [i - 1];
    }

    let result = [];

    for(let num of nums) {
        if(num === 0) {
            result.push(0);
        } else {
            result.push(count[num - 1]);
        }
    }
    return result;
}

console.log(smallerNumThanCurrent([8,1,2,2,3]))