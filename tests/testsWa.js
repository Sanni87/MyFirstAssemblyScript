import assert from "assert";
import { add, concatStrings, square, heavyTask, fib } from "../build/release.js";
import * as tsadd from '../js/index.js';
import * as tsconcatStrings from '../js/concatString.js';
import * as tssquare from '../js/square.js';
import * as tsheavyTask from '../js/heavyTask.js';
import * as tsfib from '../js/fibonacci.js';

let init, end, seconds;
let fibFirstNum = 40, fibSecondNum = 41, fibthirdNum = 42;

init = new Date();
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(concatStrings(["hola","adios"]), "hola,adios");
assert.strictEqual(square(5), 25);
let result = heavyTask(3, 7);
console.log(`result: ${result}`);
console.log(`fib(${fibFirstNum}): ${fib(fibFirstNum)}`);
console.log(`fib(${fibSecondNum}): ${fib(fibSecondNum)}`);
console.log(`fib(${fibthirdNum}): ${fib(fibthirdNum)}`);
end = new Date();
seconds = (end.getTime() - init.getTime()) / 1000;
console.log(`WebAssembly testsTime: ${seconds}`);

console.log("ok");
