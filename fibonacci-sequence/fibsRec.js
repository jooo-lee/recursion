/**
 * Using recursion, the function fibs takes a number and returns an array
 * containing that many numbers from the Fibonacci sequence.
 */

function fibsRec(num) {
    if (num < 0 || !Number.isInteger(num)) {
        throw new Error('Invalid input!');
    }

    if (num === 0) {
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        const prevFibSeq = fibsRec(num - 1);
        const newNum =
            prevFibSeq[prevFibSeq.length - 1] +
            prevFibSeq[prevFibSeq.length - 2];
        const newSeq = prevFibSeq;
        newSeq.push(newNum);
        return newSeq;
    }
}
