// Find the maximum number in a jagged array of
// numbers or array of numbers Requirements: Use recursion

export function findMax(ar : (number | (number | number[])[])[]) : number {
  let max = -Infinity;

  for (let i = 0; i < ar.length; i += 1) {
    let el = ar[i];

    if (Array.isArray(el)) {
      el = findMax(el);
    }
    if (el > max) {
      max = el;
    }
  }
  return max;
}
