// Create a function that will return a Boolean value indicating if two circles defined
// by center coordinates and radius are intersecting

import { getDistance } from './challenge41';

export function collisionCircleCircle(circle1X: number, circle1Y: number, circle1R : number,
  circle2X : number, circle2Y : number, circle2R : number) : boolean {
  const d = getDistance(circle1X, circle1Y, circle2X, circle2Y);
  return d <= circle1R + circle2R;
}
