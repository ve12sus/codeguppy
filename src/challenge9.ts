// create a function that will convert from Fahrenheit to Celsius
// Reminder: C = F - 32 / 1.8

export function fahrenheitToCelsius(n : number) : number {
  const f = ((n - 32) / 1.8);
  return f;
}
