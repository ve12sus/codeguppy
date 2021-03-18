// Create a function to return the longest word(s) in a string

import { getWords } from './challenge34';

function getElements(ar : string[], arPositions : number[]) {
  const arNew = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const pos of arPositions) {
    arNew.push(ar[pos]);
  }
  return arNew;
}

export function getLongestWords(text : string) : string[] {
  const words = getWords(text);

  let maxSize = 0;
  let maxPositions : number[] = [];

  for (let i = 0; i < words.length; i += 1) {
    const currentWordSize = words[i].length;

    if (currentWordSize > maxSize) {
      maxSize = currentWordSize;
      maxPositions = [i];
    } else if (currentWordSize === maxSize) {
      maxPositions.push(i);
    }
  }
  return getElements(words, maxPositions);
}
