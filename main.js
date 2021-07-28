// declaring a variable and assigning a value 
const kelvin = 0

// declaring a variable and assigning a value 
const celsius = kelvin - 273;

// declaring a variable and assigning a value 
let fahrenheit = celsius * (9 / 5) + 32;
let newton = celsius * (33/100)
// declaring a variable and assigning a value 
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
