//17. Letter Combinations of a Phone Number
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    let obj = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    }

    let result = [""];
    
    for(let digit of digits) {
        let temp = [];
        for(let comb of result) {
            for(let letter of obj[digit]) {
                temp.push(comb + letter);
            }
        }
        result = temp;
    }
    return result;
};