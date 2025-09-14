// INSERTION SORT
let insertionSort = function (nums) {
    for(let i = 0; i < nums.length; ++i) {
        let curr = nums[i];
        let j = i - 1;

        while(j >= 0 && nums[j] > curr) {
            nums[j + 1] = nums[j]; //ete mer tivy hajordic me e linum appa ayn tanum enq araj
            j--;
        }
        nums[j + 1] = curr; //verjum amenapoqr tivy bernum enq 0 dirin
    }
    return nums;
}

console.log(insertionSort([5,2,4,6,1,3]))