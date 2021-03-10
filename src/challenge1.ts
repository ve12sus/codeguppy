// print numbers from 1 to 10

export function printNumbers() : number[] {
  const numbers = [];
  for (let i = 1; i <= 10; i += 1) {
    numbers.push(i);
  }
  return numbers;
}
