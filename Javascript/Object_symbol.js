/*Symbol type
By specification, object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.

Till now we’ve only seen strings. Now let’s see the advantages that symbols can give us.*/

alert("We are learning about Symbol");
/*Symbols
“Symbol” value represents a unique identifier.

A value of this type can be created using Symbol():*/

let id = Symbol();

/*We can also give symbol a description (also called a symbol name), mostly useful for debugging purposes:*/
let id2 = Symbol("id2"); 
let id3 = Symbol("id2"); 
/*Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.

For instance, here are two symbols with the same description – they are not equal:*/

alert(id2 == id3);

/*Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.

For instance, this alert will show an error:*/

let id4 = Symbol("id4");
alert(id4); // TypeError: Cannot convert a Symbol value to a string

/*That’s a “language guard” against messing up, because strings and symbols are fundamentally different and should not occasionally convert one into another.

If we really want to show a symbol, we need to call .toString() on it, like here:*/

let id5 = Symbol("id5");
alert(id5.toString()); // Symbol(id), now it works
//Or get symbol.description property to get the description only:
 

let id6 = Symbol("id6");
alert(id6.description); // id

/*“Hidden” properties
Symbols allow us to create “hidden” properties of an object, that no other part of code can occasionally access or overwrite.

For instance, if we want to store an “identifier” for the object user, we can use a symbol as a key for it:*/

let user = { name: "Rajat" };
let id7 = Symbol("id7");

user[id7] = "ID Value";
alert( user[id] );

/*What’s the benefit of using Symbol("id") over a string "id"?

Let’s make the example a bit deeper to see that.

Imagine that another script wants to have its own “id” property inside user, for its own purposes. That may be another JavaScript library, so the scripts are completely unaware of each other.

Then that script can create its own Symbol("id"), like this*/

user.desc = "Professional"
user.desc = "Student";

alert(user.desc);

age = symbol("age");

user[age] = 27;

alert(`Age of the user is ${user[age]}`);


