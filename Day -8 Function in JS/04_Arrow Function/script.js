let a=5;
const b=4;
//Single line Arrow Function ( not use curly bracket )
let add = () => a+b;
console.log(add());      // 9

const sub = (a=6,b=7) => a-b;
console.log(sub());      // -1

let mul = (a=5,b=3) => a*b;
console.log(mul(2,3));      // 6

const div = () => a/b;
console.log(div());        // 1.25

const findSquare=(a=1,b=1)=>a**b;
console.log(findSquare(4,2))  // 16



// Multi-line Arrow Function ( Always use curly bracket )

// -------------  Example  ------------

const findPower=(a,b)=>
{
    const pow=a**b
    console.log(`${a}**${b} is: ${pow}`)
    return pow;
}
findPower(4,2);


