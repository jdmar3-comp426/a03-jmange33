import {sumToString} from "./src/mild/mild_1.js";
console.log(sumToString(3,4));

import {getIncreasingArray} from "./src/mild/mild_1.js";
console.log(getIncreasingArray(3, 7));

import { maxAndMin } from "./src/mild/mild_1.js";
console.log(maxAndMin([1, 2, 3, 4, 8, 14, 5]));

import { countArray } from "./src/mild/mild_1.js";
console.log(countArray([1, 2, 4, 2, 3, 6, 4, 1, 7, 9, 3, 5, 8]));

import { identifyVariable } from "./src/mild/mild_2.js";
console.log(identifyVariable(3));

import { identifyArray } from "./src/mild/mild_2.js";
console.log(identifyArray(['some', 3, [3, 4], false]));

let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
//import { removeKey } from "./src/mild/mild_2.js";
//console.log(removeKey(obj, 'title'));

import { removeKeyNonDestructive } from "./src/mild/mild_2.js";
console.log(removeKeyNonDestructive(obj, 'title'));

import { removeKeys } from "./src/mild/mild_2.js";
console.log(removeKeys(obj, ['password', 'age']));

import { getSum } from "./src/medium/medium_1.js";
console.log(getSum([2, 4, 3, 5, 9]));

import { getMedian } from "./src/medium/medium_1.js";
console.log(getMedian([4,5,7,34,44,50]));

import { getStatistics } from "./src/medium/medium_1.js";
console.log(getStatistics([2,3,5,5,5,7,7,7,8,9,14,47]));