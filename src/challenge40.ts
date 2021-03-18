// Implement the bubble sort algorithm for an array of numbers

export function bubbleSort(ar : number[]) : number[] {
  let shouldSort = true;
  let length = ar.length;
  const ar2 = ar;
  while (shouldSort) {
    shouldSort = false;
    length -= 1;

    for (let i = 0; i < length; i += 1) {
      const a = ar[i];
      if (a > ar[i + 1]) {
        ar2[i] = ar[i + 1];
        ar2[i + 1] = a;
        shouldSort = true;
      }
    }
  }
  return ar2;
}
