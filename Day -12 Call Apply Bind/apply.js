/*
1. Apply method accepts of 2 arguments where object reference is first argument and 2nd argument is the array of arguments.
2. Here arguments are passed to the function's parameters list.
3. It will call the function immediately
4. Example : Print name , age of object human2 and print function arguments.

*/


const obj={
  name:"Dinga",
  age:21
}

function getDetails(city,pin)
{
  console.log(`User Name: ${this.name}`)
  console.log(`Age: ${this.age}`)
  console.log(`city: ${city}`)
  console.log(`pin: ${pin}`)
}
getDetails.apply(obj,["Noida",201301])