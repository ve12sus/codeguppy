// Create a function that receives an array of numbers and returns an array
// containing only the positive numbers.
// Requirement: Use Array.prototype.filter()

export function getPositives(ar : number[]) : number[] {
  const ar2 = ar.filter(el => el >= 0);
  return ar2;
}
