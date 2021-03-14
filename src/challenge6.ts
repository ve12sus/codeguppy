// calculate 10!

export function factorial(n : number) : number {
  let prod = 1;

  for (let i = 1; i <= n; i += 1) {
    prod *= i;
  }

  return prod;
}