//BUBBLE SORT
function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; ++i) {
        let swapped = false; 
        
        for(let j = 0; j < n - 1 - i; ++j)  {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true;
            }
        }
        if(!swapped) break; //ete swapp chi irakanacvum uremn sortavorvac e ev durs kga ciklic
    }
    return arr;
}

console.log(bubbleSort([5,1,3,7,8,2]));

