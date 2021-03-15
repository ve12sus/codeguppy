// calculate the sum of odd numbers greater than 10 and less or equal than 30

export function sumOfOdd() : number {
  let sum = 0;

  for (let i = 11; i <= 30; i += 2) {
    sum += i;
  }

  return sum;
}
