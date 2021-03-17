// Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either in the
// first array or second array but not in both

export function mergeExclusive(ar1 : number[], ar2 : number[]) : number[] {
  const ar : number[] = [];
  ar1.forEach(el => {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  });
  ar2.forEach(el => {
    if (!ar1.includes(el)) {
      ar.push(el);
    }
  });
  return ar;
}
