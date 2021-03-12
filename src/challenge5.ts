// calculate the sum of numbers from 1 to 10

export function summation(n : number) : number {
  let sum = 0;

  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}
