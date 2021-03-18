// Create a function that will receive a bidimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the number

export function extractCol(ar : Array<string | number>, colNo : number) : Array<string | number> {
  const arCol : Array<string | number> = [];

  for (let i = 0; i < ar.length; i += 1) {
    // arCol.push(ar[i][colNo]);
  }
  return arCol;
}
