//                        Scope of Variables

//let as global

let globalVar = "I am global!";
console.log(globalVar);  // Output: I am global!


//                       Block Scope (accessible inside the block):
if (true) {
    let blockVar = "I am inside a block!";
    console.log(blockVar);  // Output: I am inside a block!
}

console.log(blockVar);  // Error: blockVar is not defined


