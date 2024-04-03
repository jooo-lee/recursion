/**
 * Solutions to questions from a Code Quiz on recusion.
 * https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
 */

// Q1
function sumRange(n) {
    if (n == 1) return 1;
    return n + sumRange(n - 1);
}

// Q2
function power(base, exp) {
    return exp == 0 ? 1 : base * power(base, exp - 1);
}

// Q3
function factorial(n) {
    return n == 1 ? 1 : n * factorial(n - 1);
}

// Q4
function all(arr, cb) {
    if (!arr.length) return true;
    const copy = [...arr]; // Shallow copy of arr
    if (cb(copy[0])) {
        copy.shift(); // Remove first element of copy
        return all(copy, cb);
    } else {
        return false;
    }
}

// Solution to Q4 without creating a shallow copy of arr
function all(arr, cb) {
    if (!arr.length) return true;
    if (cb(arr[0])) {
        arr.shift();
        return all(arr, cb);
    } else {
        return false;
    }
}

// Q5
function productOfArray(arr) {
    if (arr.length == 1) return arr[0];
    const copy = [...arr];
    return copy.shift() * productOfArray(copy);
}

// Q6
function contains(obj, searchVal) {
    if (typeof obj !== 'object' || obj === null) {
        return obj === searchVal;
    }

    for (const val of Object.values(obj)) {
        if (contains(val, searchVal)) return true;
    }

    return false;
}

// Q7
function totalIntegers(arr) {
    if (arr.length === 0) return 0;
    let total = 0;

    // Deal with first elem
    let first = arr.shift();
    if (Array.isArray(first)) {
        total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
        total += 1;
    }

    // Deal with rest of arr
    return total + totalIntegers(arr);
}

// Q8
function SumSquares(arr) {
    if (arr.length === 0) return 0;
    let total = 0;

    let first = arr.shift();
    if (Array.isArray(first)) {
        total += SumSquares(first);
    } else {
        total += first * first;
    }
    return total + SumSquares(arr);
}

// Alternate solution to Q8
function SumSquares(arr) {
    if (arr.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            total += SumSquares(arr[i]);
        } else {
            total += arr[i] * arr[i];
        }
    }
    return total;
}

// Q9
function replicate(reps, num) {
    if (reps < 1) return [];
    // Careful: Array.concat creates a new array!
    return [num].concat(replicate(reps - 1, num));
}
