import assert from "assert";
import { add, concatStrings, square, heavyTask } from "../build/release.js";
import * as tsadd from '../js/index.js';
import * as tsconcatStrings from '../js/concatString.js';
import * as tssquare from '../js/square.js';
import * as tsheavyTask from '../js/heavyTask.js';

let init, end, seconds;

init = new Date();
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(concatStrings(["hola","adios"]), "hola,adios");
assert.strictEqual(square(5), 25);
let result = heavyTask(3, 7);
end = new Date();
seconds = (end.getTime() - init.getTime()) / 1000;
console.log(`WebAssembly testsTime: ${seconds}`);

init = new Date();

assert.strictEqual(tsadd.add(1, 2), 3);
assert.strictEqual(tsconcatStrings.concatStrings(["hola","adios"]), "hola,adios");
assert.strictEqual(tssquare.square(5), 25);
let result2 = tsheavyTask.heavyTask(3, 7);

end = new Date();
seconds = (end.getTime() - init.getTime()) / 1000;
console.log(`Js testsTime: ${seconds}`);

console.log("ok");
