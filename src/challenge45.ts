// Calculate the sum of all the numbers in a jagged array
// (array contains numbers or other arrays of numbers on
// an unlimited number of levels

export function sumArray(ar : (number | (number | number[])[])[]) : number {
  let sum = 0;

  ar.forEach(el => {
    if (Array.isArray(el)) {
      el = sumArray(el);
    }

    sum += el;
  });
  return sum;
}
