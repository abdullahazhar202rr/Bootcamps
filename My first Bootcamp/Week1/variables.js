//                                    variable let

let name = "Abdullah Azhar";  // Declare a variable called name and assign it a value.
let age = 25;
let isStudent = true; //boolean




//                                    variable var
// var (Old Way of Declaring Variables)  
// var is function-scoped, which means it’s only available inside the function where it's declared
// var does not have block scope like let does (e.g., inside a loop or an if block).

function exampleVar() {
    var greeting = "Hello!";
    console.log(greeting); 
}
console.log(greeting);  // Error: greeting is not defined

if (true) {
    var blockVar = "I am a block variable!";
}
console.log(blockVar);  // Output: I am a block variable!


//                                    const (For Constant Values)

const PI = 3.14;
console.log(PI);  // Output: 3.14

PI = 3.14159;  // Error: Assignment to constant variable.





//                        Scope of Variables

//let as global

let globalVar = "I am global!";
console.log(globalVar);  // Output: I am global!


// Block Scope (accessible inside the block):
if (true) {
    let blockVar = "I am inside a block!";
    console.log(blockVar);  // Output: I am inside a block!
}

console.log(blockVar);  // Error: blockVar is not defined


