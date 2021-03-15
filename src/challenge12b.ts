// Create a function that receives an array of numbers and returns an array
// containing only the positive numbers.
// Requirement: Use Array.prototype.forEach()

export function getPositives(ar : number[]) : number[] {
  const ar2 : number[] = [];

  ar.forEach(el => () => {
    if (el >= 0) {
      ar2.push(el);
    }
  });
  return ar2;
}
