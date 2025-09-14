//58. Length of Last Word
let lengthOfTheLastWord = function(str) {
    str = str.trim();
    let count = 0;

  for(let i = str.length - 1; i >= 0; --i) {
    if(str[i] === " ") {
        return count;
    }
    count++;
  }
  return count++;
}

console.log(lengthOfTheLastWord("Hello World")); //5


//another variant
let lengthOfTheLast = function(str) {
    let count = 0;

    for(let i = str.length - 1; i >= 0; --i) {
        if(str[i] === " ") {
            if(count === 0) {
                continue;
            } else {
                break;
            }
        } else {
            count++
        }
    }
    return count;
}

console.log(lengthOfTheLast("Hello World")); //5
