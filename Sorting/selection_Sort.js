//SELECTION SORT
function selectionSort (arr) {
    let n = arr.length;

    for(let i = 0; i < n; ++i) {
        let minIndex = i;
        for(let j = i + 1; j < n; ++j) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j; //stex menq gtnum enq arr[minIndex]-ic poqr tiv ev swapp enq anum
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] //swapp-i irakanacumy
    }
    return arr;
}

console.log(selectionSort([5, 3, 8, 4]));