// Reverse an array

export function reverseArray(ar : number[]) : number[] {
  const ar2 : number[] = [];
  for (let i = ar.length - 1; i >= 0; i -= 1) {
    ar2.push(ar[i]);
  }
  return ar2;
}
