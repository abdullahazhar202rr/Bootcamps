//  Arithmetic Operators

let a = 10, b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation(Power):a^b, 10^3 = 1000

// Increment & Decrement
let x = 5;
console.log(x++); // Post-increment:  prints 5 then x becomes 6
console.log(x--); // Post-decrement: prints 7 then x becomes 6




// Assignment Operators
let y = 10;

y+=5; //y=y+5

console.log(y); // Final result: 4




// Comparison Operators

let num1 = 5;
let num2 = "5";

console.log(num1 == num2);  // true (only value compared)
console.log(num1 === num2); // false (value + type compared)
console.log(num1 != num2);  // false
console.log(num1 !== num2); // true

console.log(num1 > 3);  // true
console.log(num1 < 3);  // false
console.log(num1 >= 5); // true
console.log(num1 <= 4); // false




// Logical Operators

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND: false
console.log(isAdult || hasID); // OR: true
console.log(!isAdult);         // NOT: false
