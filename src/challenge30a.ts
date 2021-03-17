// Create a function that will add two indefinite size numbers.
// Requirements: Only positive numbers will be used and will be provided to
// the function as strings. The result should be also returned as a string

function digitFromRight(s : string, digitNo : number) {
  if (digitNo >= s.length) return 0;
  const char = s[s.length - 1 - digitNo];
  return parseInt(char, 10);
}

export function add(sNumber1 : string, sNumber2 : string) : string {
  let s = '';
  let carry = 0;

  const maxSize = Math.max(sNumber1.length, sNumber2.length);

  for (let i = 0; i < maxSize; i += 1) {
    const digit1 = digitFromRight(sNumber1, i);
    const digit2 = digitFromRight(sNumber2, i);

    const sum = digit1 + digit2 + carry;
    const digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry.toString() + s;

  return s;
}
