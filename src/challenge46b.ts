// Find the maximum number in a jagged array of
// numbers or array of numbers Requirements: Do not use recursion

export function findMax(arElements : (number | (number | number[])[])[]) : string {
  // let max = -Infinity;
  const arrays = [];

  arrays.push(arElements);

  /* while (arrays.length > 0) {
    const ar : (number | (number | number[])[])[] = arrays.pop();
    if (ar) {
      for (let i = 0; i < ar.length; i += 1) {
        let el = ar[i];

        if (Array.isArray(el)) {
          arrays.push(el);
          continue;
        }
        if (el > max) {
          max = el;
        }
      }
    }
  } */

  return 'max';
}
