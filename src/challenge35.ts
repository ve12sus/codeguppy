// Create a function to convert a CSV text to a “bi-dimensional” array

export function csvToArray(data : string) : string[] {
  const arLines = data.split('\n');

  for (let i = 0; i < arLines.length; i += 1) {
    const arLine = arLines[i].split(';');
    // arLines[i] = arLine;
  }

  return arLines;
}
