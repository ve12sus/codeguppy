// print all the multiplication tables with numbers from 1 to 10

function printTable(n : number) {
  const rows : string[] = [];
  for (let i = 0; i <= 10; i += 1) {
    const row = `${n} times ${i} equals ${n * i}`;
    // n + " times " + i + " = " + n * i;
    rows.push(row);
  }
  return rows;
}

export function multiplyTable(n : number) : string[] {
  let table : string[] = [];
  for (let i = 0; i <= n; i += 1) {
    const oneRow = printTable(i);
    table = table.concat(oneRow);
  }
  return table;
}
