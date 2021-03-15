// Print the first 10 Fibonacci numbers without using recursion.

export function getFibs(n : number) : number[] {
  const fibs: number[] = [0, 1];
  for (let i = 2; i < n + 1; i += 1) {
    fibs.push(fibs[i - 2] + fibs[i - 1]);
  }
  return fibs;
}
