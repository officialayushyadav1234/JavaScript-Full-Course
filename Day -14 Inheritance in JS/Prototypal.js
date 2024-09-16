/*
In JavaScript, objects can directly inherit properties from other objects via prototypes.
 Every JavaScript object has a hidden [[Prototype]] property,
  which can be accessed using Object.getPrototypeOf() or by the __proto__ property.
   When you try to access a property on an object,
    JavaScript will first look for the property on the object itself. 
    If it doesn't find it, it will then look up the chain in its prototype.

*/

// ----------------- Example ------------
const human={
  eat:function(){
      console.log(`${this.name} can east`)
  },
  sleep:function(){
      console.log(`${this.name} can sleep`)
  }
}

const user={
  name:"Chombu",
  age:"24",
  work:function(){
      console.log(`${this.name} can work..!!`)
  }
}

user.__proto__=human;
console.log(user.hasOwnProperty("sleep"))