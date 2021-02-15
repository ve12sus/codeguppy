// create a function that will convert from Fahrenheit to Celsius
// Reminder: C = F - 32 / 1.8

function fahrenheitToCelsius(n : number) {
    let f = ((n - 32) / 1.8);
    return f;
}

console.log(fahrenheitToCelsius(68));