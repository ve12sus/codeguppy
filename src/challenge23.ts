// Reverse a string

export function reverseString(s : string) : string {
  let s2 = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const char = s[i];
    s2 += char;
  }
  return s2;
}
