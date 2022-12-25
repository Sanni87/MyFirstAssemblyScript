// The entry file of your WebAssembly module.

export function heavyTask(a, b) {
  let outcome = 0;

  for (let index = 0; index < 1000000; index++) {
    outcome += a + b;
  }

  for (let index = 0; index < 5000000; index++) {
    outcome += a + b;
  }

  return outcome;
}

