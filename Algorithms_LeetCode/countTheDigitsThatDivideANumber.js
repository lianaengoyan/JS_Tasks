//2520. Count the Digits That Divide a Number

var countDigits = function(num) {
    let tmp = num;
    let count = 0;

    
    while(tmp !== 0) {
        let digit = tmp % 10;

        if(digit !== 0 && num % digit === 0){
            count++;
        }   

        tmp = Math.floor(tmp / 10);
    }
    return count;
};