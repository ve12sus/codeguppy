//  will receive n as argument and return an array of n random numbers from 1 to n

import { shuffleArray } from './challenge49';

export function getRandomNumbers(n : number) : number[] {
  const ar : number[] = [];

  for (let i = 1; i <= n; i += 1) {
    ar.push(i);
  }

  shuffleArray(ar);

  return ar;
}
