//8. String to Integer (atoi)
var myAtoi = function(s) {
    s = s.trim();
    if(s.length === 0) {
        return 0;
    }

    let sign = 1;
    let i = 0;

    if(s[i] === "-") {
        sign = -1;
        i++;
    } else if (s[i] === "+") {
        i++;
    }

    let digits = '';

    while(i < s.length && s[i] >= '0' && s[i] <= '9') {
        digits += s[i];
        i++
    }   

    let num = Number(digits) * sign;

    const MIN = -2147483648;
    const MAX = 2147483647;

    if (num < MIN) return MIN;
    if (num > MAX) return MAX;

    return num;
};