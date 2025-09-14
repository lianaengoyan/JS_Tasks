//14. Longest Common Prefix

let longestCommonPrefix = function(str) {
    if(str.length === 0) {
        return 0;
    }

    let shortest = str[0];
    for(let i = 1; i < str.length; ++i) {
        if(str[i].length < shortest.length) {
            shortest = str[i];
        }
    }

    for(let i = 0; i < shortest.length; ++i) {
        let char = shortest[i];

        for(let ch of str) {
            if(ch[i] !== char) {
                return shortest.slice(0, i);
            }
        }
    }
    return shortest;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); //fl