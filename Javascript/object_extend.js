/*This is for Object Extend version*/
alert(`Now we are looking in Object Next Part`);

/*Existence Check*/
/*A notable objects feature is that it’s possible to access any property. There will be no error if the property doesn’t exist! 
Accessing a non-existing property just returns undefined. It provides a very common way to test whether the property exists – to get it and compare vs undefined:*/

let user_ext = {};

//user_ext.noSuchProperty = 10;

alert(user_ext.noSuchProperty === undefined ); // true means "no such property"

//There also exists a special operator "in" to check for the existence of a property.

user_ext.name = "Rajat";
user_ext.age = 27;

alert("Name" in user_ext); //True
alert("age" in user_ext);  //True
alert("Sex" in user_ext); //False

/*The “for…in” loop
To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

The syntax:

for (key in object) {
  // executes the body for each key among object properties
}*/

for(key in user_ext){

alert(`Key ${key}`);
alert(`Value of ${key} is ${user_ext[key]}`); 
}

/*Ordered like an object
Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.*/

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

/*Copying by reference
One of the fundamental differences of objects vs primitives is that they are stored and copied “by reference”.

Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.*/

let admin = user_ext;

alert(`Value of admin is ${admin.name}`);

/*Comparison by reference
The equality == and strict equality === operators for objects work exactly the same.

Two objects are equal only if they are the same object.*/

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
