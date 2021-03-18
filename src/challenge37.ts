// Create a function that will convert a string in an array containing the ASCII
// codes of each character

export function getCharCodes(s : string) : number[] {
  const ar : number[] = [];

  for (let i = 0; i < s.length; i += 1) {
    const code = s.charCodeAt(i);
    ar.push(code);
  }
  return ar;
}
