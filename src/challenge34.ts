// Create a function that will return an array with words inside a text

import { isSeparator } from './challenge31';

export function getWords(text : string) : string[] {
  let startWord = -1;
  const ar : string[] = [];

  for (let i = 0; i <= text.length; i += 1) {
    const c = i < text.length ? text[i] : ' ';

    if (!isSeparator(c) && startWord < 0) {
      startWord = i;
    }

    if (isSeparator(c) && startWord >= 0) {
      const word = text.substring(startWord, i);
      ar.push(word);

      startWord = -1;
    }
  }

  return ar;
}
