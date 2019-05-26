/*s we know from the chapter Data types, there are seven data types in JavaScript. Six of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.*/


/*Below is one of the below way is needed to create objects*/
alert("We are going to see some objects creation here");

let user_new = new Object();
let desc = {};

let user = {
	name: "Rajat",
	age: 27,
    "job status": "Y" /*This is how you create a multiple word litterals*/
}

user_new.isAdmin = "True";
alert(user_new.isAdmin);

/*We can add, remove and read files from it any time.

Property values are accessible using the dot notation:*/

alert(`User Name will be ${user.name}`);
alert(`Age will be ${user.age}`);

/*Addition*/
user_new.isAdmin = "True";
alert(user_new.isAdmin);

user.getDeleted = "Yes";

/*Delete can be done using below command*/
alert(user.getDeleted);
delete user.getDeleted;

/*Multiple name can be add in below way also*/

desc["learner way"] = "Best Practice"
alert(`Job status for ${user.name} is ${user["job status"]}`);

alert(`You can learn JavaScript at ${user.age} by ${desc["learner way"]} only`);

/*Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:*/

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

/*Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. 
That gives us a great deal of flexibility. The dot notation cannot be used in a similar way.*/

let out = prompt("What do you know about the user", 'name');
alert(`${out} of the user will be ${user[out]}`);

/*Computed properties
We can use square brackets in an object literal. That’s called computed properties.

For instance:*/

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

/*Reserved words are allowed as property names*/