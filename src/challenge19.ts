// Return an array the first "nPrimes" prime numbers greater than a number "startAt"
import { isPrime } from './challenge16';

export function getPrimes(nPrimes : number, startAt : number) : number[] {
  let i = startAt;
  const primes : number[] = [];

  while (primes.length < nPrimes) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i += 1;
  }

  return primes;
}
