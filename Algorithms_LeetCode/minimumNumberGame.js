//2974. Minimum Number Game

var numberGame = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let newArr = [];

    for(let i = 0; i < sortedNums.length; i += 2) {
        newArr.push(sortedNums[i + 1]);
        newArr.push(sortedNums[i]);
    }
    return newArr;
};