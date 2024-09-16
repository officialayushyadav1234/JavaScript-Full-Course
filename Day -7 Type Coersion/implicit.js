// -----------  Implicit Type Coersion  -------------------

// Implicit type coercion happens automatically when JavaScript encounters an operation involving different data types. The JS engine tries to convert the types to a common one to make the operation possible.



/*
1.  Number argument -------------- > return  ----------->  Number
2.  Symbol ------------  return --->  TypeError
3.  BigInt ------------ return ---->  TypeError
4.  Undefined argument---- return ---> NaN (Not a Number)
5.  null ----------- return ----> 0
6.  false ------------ return ----> 0
7.  true -----------  return ----> 1
 */

/*
//----------------  Example 1  ------------

let a = 1;
let b = true;       // ( b=true into Number ) implecitly converted not user converted 
console.log(a-b);  



//------------------- Example 2 --------------------

let c = 20;
let d;
console.log(c-d);  // return NaN


// ----------------  Example 3  --------------------

let result = '5' + 2;
console.log(result);  // "52"
//Here, the number 2 is implicitly coerced into a string, and the result is the string "52".

let res = 5 * true; 
console.log(res);    // 5
// The boolean true is implicitly coerced into the number 1.

let re = '5' == 5;
console.log(re);   // true
// JavaScript converts the string '5' to the number 5 before performing the comparison.
*/


let a=1;
let b="a";
console.log(a-b);

let c = 20;
let d;
console.log(c-d);