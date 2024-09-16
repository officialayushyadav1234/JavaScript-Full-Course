/*
In ES6, 
JavaScript introduced the class syntax, which makes it easier to write and understand inheritance. 
Even though it looks like classical inheritance from other languages (like Java or C++), it's still using JavaScript's prototype-based inheritance under the hood.
*/


// -----------------  Example ---------------------
// class based inheritance

class Animal
{
    constructor(name)
    {
        this.name=name;
    }
    sound(){
        console.log(`${this.name} can sound..!!`)
    }
}

class Dog extends Animal
{
    constructor(name,breed)
    {
        super(name)
        this.breed=breed
    }
    speak()
    {
        console.log("Bhaoooo Bhaooooo")
    }
}

const dog1=new Dog("Sheru","Rotwiller")

console.log(dog1.name)
console.log(dog1.breed)

dog1.speak()
dog1.sound()