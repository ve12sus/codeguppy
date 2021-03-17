// Rotate an array to the right 1 position

export function rotateRight(ar : number[]) : number[] {
  let last = 0;
  if (ar.length > 1) {
    last = ar.pop() as number;
    ar.unshift(last);
  }
  return ar;
}
