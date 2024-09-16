/*
1. Call method accepts object reference as first argument And accepts 'n' number of arguments.
2. Here, arguments are passed to the function's parameter list.
3. It will call the function Immediately.
4. Example : Print name , age of object human1 and print function arguments.

*/

const obj={
  name:"Tinku",
  age:21
}

function getDetails(city,pin){
  console.log(`User Name: ${this.name}`)
  console.log(`User age: ${this.age}`)
  console.log(`city: ${city}`)
  console.log(`Pin: ${pin}`)
}
getDetails.call(obj,"Noida",201301)