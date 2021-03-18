// Create a function that will return the number of words in a text

export function isSeparator(c : string) : boolean {
  const separators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
  return separators.includes(c);
}

export function countWords(text : string) : number {
  let words = 0;

  if (text.length > 0 && !isSeparator(text[0])) words += 1;

  for (let i = 1; i < text.length; i += 1) {
    const currChr = text[i];
    const prevChr = text[i - 1];

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      words += 1;
    }
  }
  return words;
}
