//  Calculate the sum of first 100 prime numbers
import { isPrime } from './challenge16';

export function sumPrimes(n : number) : number {
  let foundPrimes = 0;
  let i = 2;
  let sum = 0;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      foundPrimes += 1;
      sum += i;
    }

    i += 1;
  }
  return sum;
}
