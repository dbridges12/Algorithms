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

            // count inversions when moving from right array to result array
            if(leftArr[0] <= rightArr[0]) {
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

    var leftResult = mergeSort(left);
    var rightResult = mergeSort(right);

    return merge(leftResult,rightResult);

}

function countInversions() {
    var LineByLineReader = require('./line-by-line.js'),
        lr = new LineByLineReader('IntegerArray.txt', {skipEmptyLines: true }),
        row = 0,
        numVals=0,
        arr=[];

    lr.on('error', function (err) {
        throw err;
    });

    lr.on('line', function (line) {
        arr.push(parseInt(line,10));
        numVals++
    });

    lr.on('end', function () {
        console.log("Rows imported: " +  numVals);
        console.log("Array: " +  arr);
        console.log(Date.now());
        console.log('Merge Sort Inversions: ' + mergeSort(arr)[0]);
        console.log(Date.now());
        //console.log('Brute Force Inversions: ' + countInv(arr));
        //console.log(Date.now());
    });
}

countInversions();
