//13. Roman to Integer
let romanToInt = function(s) {
    const roms = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;

    for(let i = 0; i < s.length; ++i) {
            if(i + 1 < s.length && roms[s[i]] < roms[s[i + 1]]) {
                result -= roms[s[i]]
            } else {
                result += roms[s[i]];
            }
    }
    return result;
};

console.log(romanToInt("LIXVIV"))