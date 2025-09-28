// QUICK SORT with MEDIAN-OF-THREE PIVOT SELECTION
const quickSort = (arr, low, high) =>  {
    if(low < high) {
        const pi = partition(arr,low,high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

const medianOfThree = (arr, low, high) => {
    let mid = Math.floor((low + high) / 2);

    if(arr[low] > arr[mid]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
    if(arr[low] > arr[high]) [arr[low], arr[high]] = [arr[high], arr[low]];
    if(arr[mid] > arr[high]) [arr[high], arr[mid]] = [arr[mid], arr[high]];

    return mid;
}

const partition = (arr, low, high) => {

    //medianOfThree
    let pivotIndex = medianOfThree(arr, low, high);
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