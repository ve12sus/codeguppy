// Calculate the average of the numbers in an array of numbers

export function avgArray(ar : number[]) : number {
  const n = ar.length;
  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    sum += ar[i];
  }
  return sum / n;
}
