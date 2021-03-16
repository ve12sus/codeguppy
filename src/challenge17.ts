// Calculate the sum of digits of a positive integer number

export function sumDigits(n : number) : number {
  let sum = 0;
  const s = n.toString();
  for (let i = 0; i < s.length; i += 1) {
    const digit = parseInt(s[i], 10);
    sum += digit;
  }
  return sum;
}
