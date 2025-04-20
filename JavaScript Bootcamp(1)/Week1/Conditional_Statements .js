// if statement
let age=20;

if(age>=18){
  console.log("You are an adult.");
}

// if...else statement
let isRaining=true;

if(isRaining){
  console.log("Take an umbrella");
}else{
  console.log("Enjoy the sunshine");
}

// if...else if...else statement
let marks=72;

if(marks>=80){
  console.log("Grade: A");
}
else if(marks>=60){
  console.log("Grade: B");
}
else if(marks>=40){
  console.log("Grade: C");
}
else{
  console.log("Fail");
}

//Ternanry operator

let score = 80;
console.log(score >= 50 ? "Pass" : "Fail"); // Ternary operator


// nested if statements
let username="abdullah";
let password="12345";

if(username==="abdullah"){
  if(password==="12345"){
    console.log("Login successful");
  }
  else{
    console.log("Wrong password");
  }
}
else{
  console.log("User not found");
}
