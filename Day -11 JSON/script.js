/*
1. JSON stands for javascript object notation.
2. It is data only format to represent values and objects.
3. It is used to transfer data between applications through apis.
4. JSON keys must be strings enclosed in double quotes.
5. It supports six data types: object, array, string, number, boolean, and null.
6. It supports nested structures, allowing objects and arrays to be nested within each other.
                       
            
#JSON methods   
1. JSON.stringify(value)
- JSON.stringify() is a method that converts a JavaScript object or value into a JSON string.
- Returns JSON.
- It does not support : function properties,symbolic keys and values and Properties that store undefined.
2. JSON.parse(value)
- JSON.parse() is a method that converts JSON string into JavaScript object or value.
- Returns plain javascript object.

*/

// -------------------- Example 1 ---------------
/*
const person = {
  name: "John",
  age: 30,
  isStudent: false
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"John","age":30,"isStudent":false}  */


// -------------------- Example 2 ------------------

const jsonString = `{"name": "John", "age": 30, "isStudent": false}`;

const person = JSON.parse(jsonString);
console.log(person.name);  // Output: John


// ------------------- Example 3 ----------------
/*
const obj={
  name:"Chombu",
  age:24
}
//convert data into JSON
const json_obj=JSON.stringify(obj)
console.log(json_obj)

// Convert JSON data into JS
const js_obj=JSON.parse(json_obj)
console.log(js_obj)
*/