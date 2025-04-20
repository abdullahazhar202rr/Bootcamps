// Define a class
class Person {
    // Constructor method (automatically called when a new object is created)
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method (function inside a class)
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  
    // Another method
    birthday() {
      this.age++;
      console.log(`Happy Birthday ${this.name}! You are now ${this.age}.`);
    }
  }
  
  // Create objects from the class
  const person1 = new Person("Abdullah", 19);
  
  // Call methods
  person1.greet();       // Hello, my name is Ali and I'm 20 years old.
  person1.birthday();    // Happy Birthday Ali! You are now 21.
  
  person2.greet();       // Hello, my name is Sara and I'm 25 years old.
  