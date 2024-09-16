/*
1. Bind method accepts object reference as 1st argument and excepts 'n' number of arguments.
2. Here 'n' number of arguments are passed to the function's parameter list.
3. It will not call the function immediately.
4. It returns a new function in which 'this' Keyword is pointing to the object reference we have passed.
5. To execute the function we need function reference and parenthesis
6. Example : Print name , age of object human3 and print function arguments.
*/

const obj={
  name:"Chombu",
  age:21
}

function getDetails(city,isWorking)
{
  console.log(`User Name: ${this.name}`)
  console.log(`Age: ${this.age}`)
  console.log(`city: ${city}`)
  console.log(`Working Status: ${isWorking}`)
}

const result=getDetails.bind(obj,"Noida",true)
result()