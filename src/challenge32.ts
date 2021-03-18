// Create a function that will capitalize the first letter of each word in a
// text

import { isSeparator } from './challenge31';

export function capitalizeWords(text : string) : string {
  let text2 = '';

  for (let i = 0; i < text.length; i += 1) {
    let currChr = text[i];
    const prevChr = i > 0 ? text[i - 1] : ' ';

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      currChr = currChr.toUpperCase();
    }

    text2 += currChr;
  }

  return text2;
}
