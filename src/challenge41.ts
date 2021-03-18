// Calculate the distance between two points defined by their x, y coordinates

export function getDistance(x1 : number, y1 : number, x2 : number, y2 : number) : number {
  const l1 = x2 - x1;
  const l2 = y2 - y1;
  return Math.sqrt(l1 * l1 + l2 * l2);
}
