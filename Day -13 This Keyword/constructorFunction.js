// A function which is used to create an object is known as constructor function.
// 2. A constructor function behaves like blueprint or template for object , and there is no need to write code again and again
// 3. It helps us to create multiple objects of same type.
// 4. Syntax : function identifier (parameter,...){ }

// 5. We can copy the values into the keys of the object from parameter using this keyword.
// 6. We can create a object using the constructor function with the help of new keyword.
// 7. To create constructor function we will not use arrow function because they does not have 'this' keyword .

// 8. Synatx : let variable = new function_name(arguments)



// ------------  Global call (this) refer ------->  window
console.log(this)


// -----------   Local call (this) refer --------> window Object
function find() {
            console.log(this)
      }
find()

// -------- Example  --------------
/*
function Car(model,color,engine) {
  this.model = model;
  this.color = color;
  this.engine = engine;
  }
  
  let car1 = new Car(1021,"red","V8");
  console.log(car1);
  // { model:1021,color:"red",engine:"V8" }
*/

