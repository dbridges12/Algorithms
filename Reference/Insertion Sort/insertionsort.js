/**
 * Created by dbridges on 10/26/16.
 */

function insertionSort(arr) {
    var tempVal = '', len = arr.length,j='';
    for (var i = 0; i < len; i++) {
        tempVal = arr[i];
        j=i-1;

        // keep shifting numbers larger than tempVal to the right //
        while (j >= 0 && tempVal < arr[j]) {
            arr[j+1] = arr[j];
            j=j-1;  // move to the left
        }

        // place the tempval to the left of where we stop shifting
        arr[j+1] = tempVal;
        console.log('insert ' + tempVal + ' at position ' + (j+1))

    }
    return arr;
}

var unsortedArray = [3,6,1,56,43,35,56,77,3,5,21,4546,11,2,0,34,77,87,3,22,44];
//var unsortedArray = ['f','a','g','x','S','A'];

console.log(insertionSort(unsortedArray));