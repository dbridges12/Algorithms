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
    var result = [];

    while(left.length || right.length) {
        if(left.length && right.length) {

            if(left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } else if (left.length) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result;
}

function mergeSort(array) {
    if(array.length === 1) {
        return array;
    }

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    var x = mergeSort(left);
    var y = mergeSort(right);

    return merge(x,y);

    //return merge(mergeSort(left), mergeSort(right));
}

var thisArr = [3, 1, 5, 2, 7, 6, 4];

console.log('Original Array: ' + thisArr);
console.log('Sorted Array: ' + mergeSort(thisArr));
console.log('Total Inversions: ' + countInv(thisArr));