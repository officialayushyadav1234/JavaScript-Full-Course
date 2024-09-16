/* Function is object.
2. Function is a block of instruction which is used to perform a specific task.
3. A function get executed only when it is called.
4. The main advantage of function is we can achieve code reusability.
5. Any member with local scope cannot be used outside the function block.
12. A parameter of function will have local scope.
13. Variable written inside function even using var have local scope.
14. Inside a function we can use the members of global scope.
15. In javascript 'this' is a property of every function.(every function will have 'this' Keyword except arrow function)
*/

/*
//--------------------- Example:-1  ------------------------
function modi(parameters)
{
    console.log("Vah kya scene hai..!!")

    return `Me apse kuch maang sakta hu kya..!!`
} 
modi()                 //  Vah kya scene hai..!!  

let result=modi()
console.log(result)     //Vah kya scene hai..!! 
                        //  Me apse kuch maang sakta hu kya..!! 

console.log(modi())    // Vah kya scene hai..!! 
                       // Me apse kuch maang sakta hu kya..!!  
*/


/*
//   ---------------------  Example:-2 ( default return not use return keyword ) --------------------- 

// Function by default return undefined when we are not using return keyword

function raju(){
    console.log("Ladki ka chakkar babu bhaiya...!")
}

let result=raju();
console.log(result) 
*/

/*
// --------------------------   Example:-3  ( Default Parameter )  ----------------
//    Default Parameter

function task(name){
    // Default parameter in ES-5 (Older Version)
    name===undefined?name="chombu":name 

    name!=="chombu"?alert(`User ${name} Logged in..!`):alert("Please enter login credentials..!");

}

// task()            // Please enter login credentials..!
// task("chombu")    // Please enter login credentials..!
task("Vihan")        // User Vihan Logged in..!
*/


/*
// ------------------------- Example:-4 ( arguments variable ) -----------------------

function task(){
   for(let i=0;i<4;i++){
        let name=arguments[i]
            if(name==="satyam")
            {
                 console.log(`${name} Bhai bulati h magar jane ka nahi..!!`)
            }
            else if(name==="Ramesh")
            {
                console.log(`${name} Jaldi waha se hato`)
            }
            else{
                console.log(`${name}, gajab topibaaz h`)
            }
   }
}

task("Ramesh","Pawan","Aman","satyam")
*/



// let result= 13^2 - 5^2
/*
function power(a,b){
  return (a**b);
}

let result= Math.sqrt(power(13,2) - power(5,2))
console.log(result)
*/