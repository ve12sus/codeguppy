// Print the first 100 prime numbers
import { isPrime } from './challenge16';

export function printPrimes(nPrimes : number) : number[] {
  let n = 0;
  let i = 2;
  const primes : number[] = [];

  while (n < nPrimes) {
    if (isPrime(i)) {
      primes.push(i);
      n += 1;
    }
    i += 1;
  }

  return primes;
}
