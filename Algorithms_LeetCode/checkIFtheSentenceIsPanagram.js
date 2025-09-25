//1832. Check if the Sentence Is Pangram

var checkIfPangram = function(sentence) {
    let seen = {};
    let uniqueChar = 0;

    for(let char of sentence) {
        if(!seen[char]) {
            
            seen[char] = true;
            uniqueChar++;
            
            if(uniqueChar === 26) return true;
        }
    }
    return false;
};