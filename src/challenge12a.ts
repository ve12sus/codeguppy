// Create a function that receives an array of numbers and returns an array 
// containing only the positive numbers.
// Requirement: Use a “for” loop

export function getPositives(ar : number[]) : number[] {
  const ar2 : number[] = [];

  for (let i = 0; i < ar.length; i +=1) {
    const el = ar[i];
    if (el >= 0) {
      ar2.push(el);
    }
  }
  return ar2;
}
