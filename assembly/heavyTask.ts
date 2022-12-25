// The entry file of your WebAssembly module.

export function heavyTask(a: f64, b: f64): f64 {
  let outcome:f64 = 0;

  for (let index:i32 = 0; index < 1000000; index++) {
    outcome += a + b;
  }

  for (let index:i32 = 0; index < 5000000; index++) {
    outcome += a + b;
  }

  return outcome;
}

