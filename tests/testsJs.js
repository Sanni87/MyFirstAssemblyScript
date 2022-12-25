import assert from "assert";
import * as tsadd from '../js/index.js';
import * as tsconcatStrings from '../js/concatString.js';
import * as tssquare from '../js/square.js';
import * as tsheavyTask from '../js/heavyTask.js';
import * as tsfib from '../js/fibonacci.js';

let init, end, seconds;
let fibFirstNum = 40, fibSecondNum = 41, fibthirdNum = 42;

init = new Date();

assert.strictEqual(tsadd.add(1, 2), 3);
assert.strictEqual(tsconcatStrings.concatStrings(["hola","adios"]), "hola,adios");
assert.strictEqual(tssquare.square(5), 25);
let result2 = tsheavyTask.heavyTask(3, 7);
console.log(`result: ${result2}`);
console.log(`tsfib.fib(${fibFirstNum}): ${tsfib.fib(fibFirstNum)}`);
console.log(`tsfib.fib(${fibSecondNum}): ${tsfib.fib(fibSecondNum)}`);
console.log(`tsfib.fib(${fibthirdNum}): ${tsfib.fib(fibthirdNum)}`);
end = new Date();
seconds = (end.getTime() - init.getTime()) / 1000;
console.log(`Js testsTime: ${seconds}`);

console.log("ok");
