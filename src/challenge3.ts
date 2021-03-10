// print the multiplication table with 7

export function multiplesOfSeven() : string[] {
  const list : string[] = [];
  for (let i = 0; i <= 10; i += 1) {
    list.push(`7 times ${i} equals ${i * 7}`);
  }
  return list;
}
