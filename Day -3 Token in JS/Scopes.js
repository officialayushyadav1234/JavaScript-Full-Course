// ----- Example 1 -----

// var a=1;
// let b=2;
// const c=3;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log("Inside Block a:"+a)
//     console.log("Inside Block b:"+b)
//     console.log("Inside Block c:"+c)
// }
// console.log("Outside Block a:"+a)
// console.log("Outside Block b:"+b)
// console.log("Outside Block c:"+c) 


// ------------- Example 2 -------------
// let b=2;
//     {
//         b=20;
//         console.log("Inside Block "+b)
//     }
// console.log("Outside Block "+b) 

//------------ Example 3 ---------------
// var a=1;
// let b=2;
// const c=3;
// {
//     var a=10;
//     b=20;
//     const c=30;
//     console.log("Inside Block "+a)   
//     console.log("Inside Block "+b)   
//     console.log("Inside Block "+c)   
// }
// console.log("Outside Block "+a)
// console.log("Outside Block "+b)
// console.log("Outside Block "+c) 

// ----------------  Example 4 ---------------
// let a=1;
// var b=2;
// const c=3;
// {   
//     b=10;
//     var b=20;
//     const c=30;
//     console.log("Inside Block "+a)
//     console.log("Inside Block "+b)
//     console.log("Inside Block "+c)
// }
// console.log("Outside Block "+a)
// console.log("Outside Block "+b)
// console.log("Outside Block "+c)


// ---------- Example 5 ------------

var globalVar = "global";

function outerFunction() {
    var outerVar = "outer";
    
    function innerFunction() {
        var innerVar = "inner";
        console.log(innerVar);  // inner
        console.log(outerVar);  // outer
        console.log(globalVar); // global
    }

    innerFunction();
}

outerFunction();
