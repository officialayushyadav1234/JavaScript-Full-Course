/*
1. It is a keyword.
2. It is a variable , which holds the reference.
3. In GEC it holds the address of window object.
4. It is a local variable of every function in js, and holds the address of window object. Except in Arrow function (for arrow function is stores undefined).
5. Inside object methods, 'this' holds the reference of current object(not in arrow function).
*/


// ----------------- Example 1 ---------------
/*
const obj={
    name:"Tinku",
    getDetails:function () {
        console.log(this)
      }
}

obj.getDetails()
*/

// ------------------- Example 2 ----------------
/*
const obj={
  name:"Tinku",
  getDetails:()=>{
      console.log(obj)
      console.log(this)
   }
}

obj.getDetails()
*/