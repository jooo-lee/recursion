/**
 * Using iteration, the function fibs takes a number and returns an array
 * containing that many numbers from the Fibonacci sequence.
 */

function fibs(num) {
    if (num < 0 || !Number.isInteger(num)) {
        throw new Error('Invalid input!');
    }

    const seq = [];
    if (num === 0) return seq;

    seq.push(0);
    if (num === 1) return seq;

    seq.push(1);
    if (num === 2) return seq;

    for (let i = 3; i <= num; i++) {
        seq.push(seq[i - 2] + seq[i - 3]);
    }

    return seq;
}
