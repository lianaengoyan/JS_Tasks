//2108. Find First Palindromic String in the Array

var firstPalindrome = function(words) {
    for(let word of words) {
        let isPalindrome = true;
        let size = word.length;

        for(let i = 0; i < Math.floor(size / 2); ++i) {
            if(word[i] !== word[size - i - 1]) {
                isPalindrome = false;
                break;
            }
        }
        if(isPalindrome) return word;
    }
    return "";
}; 