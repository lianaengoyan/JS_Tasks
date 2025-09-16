//SELECTION SORT
function selectionSort (arr) {
    let n = arr.length;

    for(let i = 0; i < n; ++i) {
        let minIndex = i;
        let swapped = false;
        
        for(let j = i + 1; j < n; ++j) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j; //stex menq gtnum enq arr[minIndex]-ic poqr tiv ev swapp enq anum
            }
        }

        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] //swapp-i irakanacumy
            swapped = true; //swapped ayn npatakov e grac, vor ete array shut sortavorvi, avel chfra
        }
        
        if(!swapped) {
            break;
        }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4]));
