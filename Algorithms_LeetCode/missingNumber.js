//268. Missing Number

var missingNumber = function(nums) {
    let sum = 0;
    let sum2 = 0;
    
    for(let num of nums) {
        sum += num;
    }

    for(let i = 0; i <= nums.length; ++i) {
        sum2 += i;
    }
    return (sum2 - sum); 
};