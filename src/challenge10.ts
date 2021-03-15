// calculate the sum of numbers in an array of numbers

export function sumArray(ar : number[]) : number {
  let sum = 0;
  for (let i = 0; i < ar.length; i += 1) {
    sum += ar[i];
  }
  return sum;
}
