/*
function outer(){

  consolre.log("Outer Function");

  function inner(){
    console.log("Inner function")
  }
  inner();
}
outer();
*/



// ------------- Lexical Scoping --------------

/*
let atmPin = 3552;

function lexical(name,city){

  console.log("Name is:"+name);
  console.log("City is:"+city);
  console.log("ATM Pin Is:"+atmPin);   // Lexical scope
}
lexical("Ayush","Noida");
*/

// --------------  Closure --------------------

function outer(){

  console.log("Inside Outer function");
  let a=10;                
  
  function closure(){

      console.log("Inside inner Fucntion");
      console.log(a);
  }
  return closure;
}

let res = outer();
res();