// Print the first 10 Fibonacci numbers using recursion.

export function getFibs(n : number) : number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return getFibs(n - 1) + getFibs(n - 2);
}

const x = getFibs(9);
console.log(x);
