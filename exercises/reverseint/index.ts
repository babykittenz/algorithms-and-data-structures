// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

import {parse} from "ts-jest";

function reverseInt(n: number): number {
    // check if the number is negative
    // returns -1 for negative, 0 for 0 and 1 for positive
    let sign = Math.sign(n);

    // convert int to string, reverse it, then convert it back to int
    n  = parseInt( n.toString().split('').reverse().join('') );

    // return number with the sign
    return sign * n;
}

export default reverseInt;
