/**
 * Created by dbridges on 10/24/16.
 */

function mergeArrays(arrA, arrB) {
    var mergedArr = [];

    console.log(arrA + ' ** ' + arrB);

    // compare the first item in each array and move the smallest to the merged array //
    while (arrA.length && arrB.length) {
        if (arrA[0] <= arrB[0]) {
            mergedArr.push(arrA.shift());  // shift removes the first element from the array
        } else {
            mergedArr.push(arrB.shift());
        }
    }

    // go through any remaining items in either array //
    while (arrA.length) {
        mergedArr.push(arrA.shift());
    }

    while (arrB.length) {
        mergedArr.push(arrB.shift());
    }

    console.log('mergedArr - ' + mergedArr);

    // return the merger arrays
    return mergedArr;
}

function mergeSort(arr) {
    // base case - array length < 2 //
    if (arr.length < 2) {
        return arr;
    }

    // calculate the half-way point in the array //
    var middle = Math.floor(arr.length / 2);

    // divide //
    var leftArr = arr.slice(0, middle);
    var rightArr = arr.slice(middle, arr.length);

    // conquer //
    console.log(arr + ':  ' + leftArr + '  --  ' + rightArr);
    return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));

}

//var unsortedArray = [3,6,1,56,43,35,56,77,3,5,21,4546,11,2,0,34,77,87,3,22,44];
var unsortedArray = ['f','a','g','x','S','A'];

console.log(mergeSort(unsortedArray));