//20. Valid Parentheses
let isValid = function(str) {
    let stack = [];
    let parentheses = {
        '}': '{',
        ')': '(',
        ']': '['
    }

    for(let char of str) {
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if(stack.pop() !== parentheses[char]) {
            return false;
        }
    }
    return stack.length === 0;
}