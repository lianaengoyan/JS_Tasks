// QUICK SORT with RANDOMIZED PIVOT
const quickSort = (arr, low, high) =>  {
    if(low < high) {
        const pi = partition(arr,low,high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

const partition = (arr, low, high) => {
    //Random Elemenet
    let pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    [arr[low], arr[pivotIndex]] = [arr[pivotIndex], arr[low]];

    let pivot = arr[low];
    let i = low, j = high;

    while(i < j) {
        while(arr[i] <= pivot && i < high) {
            i++;
        }

        while(arr[j] > pivot && j > low) {
            j--;
        }

        if(i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

let arr = [3,4,7,1,3,5];
console.log(quickSort(arr, 0, arr.length - 1));