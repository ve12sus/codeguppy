// Create a function that will return a Boolean specifying if a number is prime

export function isPrime(n : number) : boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  const maxDiv : number = Math.sqrt(n);
  for (let i = 2; i <= maxDiv; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
