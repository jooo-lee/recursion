/**
 * Takes in an array and returns a sorted array, using a recursive merge sort
 * methodology.
 */

function mergeSort(arr) {
    /**
     * Base case:
     * - If arr is just one element, return arr (sorted by definition)
     *
     * Recursive case:
     * - Sort left half of array
     * - Sort right half of array
     * - Merge two sorted halves by comparing first elements of each half
     *   and placing the lower number in the output array
     * - If either half still has elements left at the end of the merge step,
     *   add them all to the end of the output array
     * - Return output array
     */

    if (arr.length === 1) return arr;

    const halfLen = Math.ceil(arr.length / 2);

    // Recursively sort halves
    const leftHalf = mergeSort(arr.slice(0, halfLen));
    const rightHalf = mergeSort(arr.slice(halfLen));

    // Merge step
    let outputArr = [];
    while (leftHalf.length && rightHalf.length) {
        if (leftHalf[0] <= rightHalf[0]) {
            outputArr.push(leftHalf.shift());
        } else {
            outputArr.push(rightHalf.shift());
        }
    }

    // Check if either half still has elements
    if (leftHalf.length) {
        outputArr = outputArr.concat(leftHalf);
    } else if (rightHalf.length) {
        outputArr = outputArr.concat(rightHalf);
    }

    return outputArr;
}
