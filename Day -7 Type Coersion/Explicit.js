// ---------------  Explicit Type Coersion -----------

// Explicit type coercion occurs when you manually convert a value from one type to another using built-in functions or constructors.



// ------------------  1. Number(_) , + Symbol of a Number  ----------------  
/*
(Argument)       (Return)        
Null --------->   0
Undefined ---->   NaN
""(Empty)----->   0
" " ---------->   0
"1" ---------->   1
"abc" -------->   NaN
"a"  --------->   NaN
"12+3" ------->   NaN
true --------->   1
false -------->   0

let a = "5";
// const b = Number(a);              //  In ECMAScript 5 
const b = +(a);                      // In ECMAScript 6  ( add feature )
*/

/*
//-------- Example --------
let age = +prompt("Enter Your Age");
console.log(age);

// ---------- Exapmle --------
var x ;
var y = +(x)
console.log(y);  // NaN
*/


/*
// ------------------ 2. Undefined  --------------------
var age;
console.log(age);    // return ( Undefined )  It can be used to var variable.
*/


/*
// ------------------  3. Boolean  ----------------------
// -----------------  Comparison of two value return true or false ----------------------
const a = 5;
let b = true;
console.log(a - b)   // 4

let x = 4;
const y = false;
console.log(x - y);     // 4
*/

// --------------------- 4. TypeOf() Operator  -------------
// This Operator is used to finding the Data type Of given value.
let a=null;
let b=Number(a)
console.log(typeof(b),b);


//----------------------  Examples  -----------------

let num = Number('5'); 
console.log(num);      // 5
// Here, the string '5' is explicitly converted to the number 5.

let str = String(123); 
console.log(str);    // "123"
// The number 123 is explicitly converted to the string "123".

let bool = Boolean(0);  
console.log(bool);     // false
// The number 0 is explicitly converted to the boolean false.


const x = 5;
const y = true;
console.log(x-y);