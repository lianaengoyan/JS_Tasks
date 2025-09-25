//2535. Difference Between Element Sum and Digit Sum of an Array

var differenceOfSum = function(nums) {
    let elemSum = 0;
    let digitSum = 0;

    for(let i = 0; i < nums.length; ++i) {
        elemSum += nums[i];
        let tmp = nums[i];

        while(tmp !== 0) {
            digitSum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
    }
    return (elemSum - digitSum);
};