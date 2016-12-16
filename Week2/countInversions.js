/**
 * Created by davidbridges on 11/27/16.
 */

// Brute force method //
function countInv(arr) {
    var totalInversions = 0;

    for (var i=0; i < arr.length; i++) {
        for (var j=i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                totalInversions = totalInversions + 1;
            }
        }
    }

    return totalInversions;
}

function merge(left, right) {
    var result = [],
        inversions = left[0] + right[0],
        leftArr = left[1],
        rightArr = right[1];

    while(leftArr.length || rightArr.length) {
        if(leftArr.length && rightArr.length) {

            if(leftArr[0] < rightArr[0]) {
                result.push(leftArr.shift());
            } else {
                result.push(rightArr.shift());
                inversions = inversions + leftArr.length;
            }
        } else if (leftArr.length) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }
    return [inversions,result];
}

function mergeSort(array) {
    if(array.length === 1) {
        return [0,array];
    }

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    var x = mergeSort(left);
    var y = mergeSort(right);

    return merge(x,y);

}

var thisArr = [3, 1, 5, 2, 7, 6, 4, 3, 1, 5, 2, 7, 6, 4, 3, 1, 5, 2, 7, 6, 4];

console.log('Original Array: ' + thisArr);
console.log('Sorted Array: ' + mergeSort(thisArr)[0]);
console.log('Total Brute Force Inversions: ' + countInv(thisArr));