// Create a function that will receive two arrays and will return an array
// with elements that are in the first array but not in the second

export function mergeLeft(ar1 : number[], ar2 : number[]) : number[] {
  const ar : number[] = [];
  ar1.forEach(el => {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  });
  return ar;
}
