// Find the maximum number in an array of numbers

export function findMax(ar : number[]) : number {
  let max : number = ar[0];
  for (let i = 0; i < ar.length; i += 1) {
    if (ar[i] > ar[0]) {
      max = ar[i];
    }
  }
  return max;
}
