//  Shuffle an array of strings

function randomInt(min : number, max : number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(ar : string[] | number[]) : string[] | number[] {
  for (let i = ar.length - 1; i > 0; i -= 1) {
    const j = randomInt(0, i - 1);

    const t = ar[i];
    ar[i] = ar[j];
    ar[j] = t;
  }
  return ar;
}
