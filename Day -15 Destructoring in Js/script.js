 
 //----------  1. Object Destructuring ------------
 const obj={
    name:"Tinku",
    age:24,
    city:"Noida"
}

// Basic Object destructuring
/*
const {name,age,city}=obj   
console.log(name)            // Output -->> Tinku
*/

//----------- OR ---------------

// You can also rename variables while destructuring:
const {name:a1,age,city:c1}=obj
console.log(a1)     //  Output -->> Tinku  
console.log(age)    //  Output -->> 24 
console.log(c1)     //  Output -->> Noida





/*
//-----------  2. Array Destructuring ----------------

const actors=["Srk","Akshay","Salman","Hrithik","Amir"]

// You can skip elements by leaving spaces between commas:
const [a,,,,b]=actors
console.log(a)        // Output -->>  Srk
console.log(b)        // Output -->>  Amir

// You can also use default values when destructuring:
const [a,b,c=10] = [1,2];
console.log(c)   // 10

*/