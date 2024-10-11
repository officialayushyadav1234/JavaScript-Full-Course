/*
1. It is a keyword.
2. It is a variable , which holds the reference.
3. In GEC it holds the address of window object.
4. It is a local variable of every function in js, and holds the address of window object. Except in Arrow function (for arrow function is stores undefined).
5. Inside object methods, 'this' holds the reference of current object(not in arrow function).
*/


// ----------------- Example 1 ---------------

// Inside Object method
const obj={
    name:"Tinku",
    getDetails:function () {
        console.log(this)     // refer current object -->> {name: 'Tinku', getDetails: ƒ}
      }
}

obj.getDetails()


// ------------------- Example 2 ----------------

// Inside Object method In Arrow function
/*
const obj={
  name:"Tinku",
  getDetails:()=>{
    console.log(obj)             // refer current object-->> {name: 'Tinku', getDetails: ƒ}
    console.log(this)            // refer -->> window Objects
   }
}
obj.getDetails()
*/