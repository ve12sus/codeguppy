// Print the distance between the first 100 prime numbers
import { isPrime } from './challenge16';

export function primeDistances(n : number) : number[] {
  const primes : number[] = [];
  let lastPrime = 2;
  let i = lastPrime + 1;
  let foundPrimes = 1;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      primes.push(i - lastPrime);
      foundPrimes += 1;
      lastPrime = i;
    }
    i += 1;
  }
  return primes;
}
