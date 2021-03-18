// Deep copy a jagged array with numbers or other arrays in a new array

export function copyArray(ar : (number | (number | number[])[])[]) :
(number | (number | number[])[])[] {
  const array2 = [...ar];
  return array2;
}
