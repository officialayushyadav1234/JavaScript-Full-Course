
// ---------------------- Example -----------------
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log(this.name + " makes a sound.");
};

function Dog(name) {
  Animal.call(this, name);     // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
  console.log(this.name + " barks.");
};

const dog = new Dog("Buddy");
dog.makeSound();             // Output: Buddy barks.


/*
In this example:
                Dog inherits from Animal using the prototype chain.
                Animal.call(this, name) is used to invoke the parent constructor within the child constructor.
*/
