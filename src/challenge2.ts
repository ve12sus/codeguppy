// print the odd numbers less than 100

export function printOddNumbers() : number[] {
  const oddNumbers = [];
  for (let i = 0; i <= 100; i += 1) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}
