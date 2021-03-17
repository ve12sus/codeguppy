// Rotate an array to the left 1 position

export function rotateLeft(ar : number[]) : number[] {
  let first = 0;
  if (ar.length > 1) {
    first = ar.shift() as number;
    ar.push(first);
  }
  return ar;
}
