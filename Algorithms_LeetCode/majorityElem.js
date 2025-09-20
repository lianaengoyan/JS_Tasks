//169. Majority Element

function majorityElement (nums) {
    let count = {};
    let majorEl = nums[0];

    for(let num of nums) {
        count[num] = (count[num] || 0) + 1;
        if(count[num] > count[majorEl]) {
            majorEl = num;
        }
    }
    return majorEl;
}

console.log(majorityElement([3,2,5,6,6,8,6]));