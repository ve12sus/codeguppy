// Create a function that will receive an array of numbers as argument and
// will return a new array with distinct elements

export function getDisctinctElements(ar : number[]) : number[] {
  const ar2 : number[] = [];
  for (let i = 0; i < ar.length; i += 1) {
    if (!ar2.includes(ar[i])) {
      ar2.push(ar[i]);
    }
  }
  return ar2;
}
