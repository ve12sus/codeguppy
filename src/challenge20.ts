// Rotate an array to the left 1 position

export function rotateLeft(ar : number[]) : number[] {
  let first = 0;
  console.log(ar);
  if (ar.length > 1) {
    console.log(ar);
    first = ar.shift() as number;
    console.log(first);
    ar.push(first);
  }
  return ar;
}
