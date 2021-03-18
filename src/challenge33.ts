// Calculate the sum of numbers received in a comma delimited string

export function sumCSV(s : string) : number {
  const ar = s.split(',');
  let sum = 0;

  ar.forEach(n => {
    sum += parseFloat(n);
  });

  return sum;
}
