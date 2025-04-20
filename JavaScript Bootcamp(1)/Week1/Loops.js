// for loop
for(let i=1;i<=5;i++){
    console.log("For Loop: i =",i);
  }
  
  // while loop
  let j=1;
  
  while(j<=5){
    console.log("While Loop: j =",j);
    j++;
  }
  
  // do...while loop
  let k=1;
  
  do{
    console.log("Do While Loop: k =",k);
    k++;
  }while(k<=1);
  

  

  // for...of loop (better for arrays)
  let colors=["Red","Green","Blue"];
  
  for(let color of colors){
    console.log("Color:",color);
  }
  
  // for...in loop (used for object keys)
  let person={
    name:"Abdullah",
    age:21,
    city:"Faisalabad"
  };
  
  for(let key in person){
    console.log(key+":",person[key]);
  }