// Create a function that will add two indefinite size numbers.
// Requirements: Only positive numbers will be used and will be provided to
// the function as strings. The result should be also returned as a string

export function add(sNumber1 : string, sNumber2 : string) : string {
  const maxSize = Math.max(sNumber1.length, sNumber2.length);

  const s1 = sNumber1.padStart(maxSize, '0');
  const s2 = sNumber2.padStart(maxSize, '0');

  let s = '';
  let carry = 0;

  for (let i = maxSize - 1; i >= 0; i -= 1) {
    const digit1 = parseInt(s1[i], 10);
    const digit2 = parseInt(s2[i], 10);

    const sum = digit1 + digit2 + carry;
    const digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry.toString() + s;
  return s;
}
