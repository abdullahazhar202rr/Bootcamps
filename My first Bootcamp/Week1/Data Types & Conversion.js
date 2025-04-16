let name = "Alice"; // String with double quotes
let city = 'New York'; // String with single quotes
let age = 25;       // Integer
let temperature = 36.6;  // Floating-point number
console.log(age);        // Output: 25
console.log(temperature); // Output: 36.6


let isStudent = true;
let hasLicense = false;
console.log(isStudent);  // Output: true
console.log(hasLicense); // Output: false



//object
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30

//array
let colors = ["red", "green", "blue"];
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3






//Type Conversion
// Example 1: Adding a string and a number:
let result = "5" + 10;
console.log(result);  // Output: "510" (number 10 is added into a string)

let isEqual = "5" == 5;
console.log(isEqual);  // Output: true (JavaScript converts the string "5" to a number)


let strInt = "123";
let strFloat = "123.45";
let intNum = parseInt(strInt);
let floatNum = parseFloat(strFloat);
console.log(intNum);  // Output: 123
console.log(floatNum); // Output: 123.45

let num = 123;
let str = num.toString();
console.log(str);  // Output: "123"

// let num = 123;
// let str = String(num);
// console.log(str);  // Output: "123" (string type)

let number = 0;
let stringg = "Hello";
let bool1 = Boolean(number);  // Output: false (because 0 is falsy)
let bool2 = Boolean(stringg);  // Output: true (because a non-empty string is truth)
// Falsy values: 0, "", null, undefined, NaN, false.
console.log(bool1);
console.log(bool2);
