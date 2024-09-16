Key Concepts
Prototype Chain:
                Every object in JavaScript has a prototype, and objects inherit properties and methods from their prototype.
                This creates a chain known as the prototype chain.
Constructor Functions:
                      Before ES6 classes, constructor functions were commonly used to create objects and achieve inheritance by setting the prototype with Object.create() or the prototype property.
super() in Classes: 
                   In ES6 class-based inheritance, the super() function is used to call the parent class’s constructor.


#Differences Between Prototypal and Class-based Inheritance:======>>>

Prototypal Inheritance:
                       More flexible, allowing objects to directly inherit from other objects without class structures.
Class-based Inheritance: 
                       Introduced to mimic traditional OOP patterns seen in other languages. Easier syntax but still based on prototypes.