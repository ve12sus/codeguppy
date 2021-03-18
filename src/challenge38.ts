// Create a function that will convert an array containing ASCII codes in a string

export function codesToString(ar : number[]) : string {
  return String.fromCharCode(...ar);
}
