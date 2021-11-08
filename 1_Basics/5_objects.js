////////////////////////////////////////////////////////////////////////////////
// Welcome to the 2nd exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// You have already learned about a few primitive types and you are ready
// to master objects and loops now. Great!

// EXERCISE 0. Definitions.
//////////////////////////

// Let's do the usual type checking with morpho for warming up.

// Objects.

morpho = {};
// An empty object.

console.log('Morpho: ' + morpho);
console.log('The type of morpho is: ' + typeof morpho);

// Objects are containers for variables indexed by a key (in other programming
// languages they may be called maps or dictionaries). They can contain
// variables of any type inside.

// A special type of object, the null object.
obj = null;
console.log(typeof null);
// Ok, this is confusing. null is an object? In fact, in JavaScript
// everything is an object behind the scenes, but this is an unfortunate
// design decision for the language. You just have to live with this quirk,
// it is not too terrible, if you know about it.

// Question. How is null different from undefined? null is an explicit value
// assigned by the programmer, undefined may just happen to be.

// EXERCISE 1. Create an object to represent a person.
//////////////////////////////////////////////////////

// a. The person is identified by two properties: name and year.
// Let's pick Brendan Eich, the creator of JavaScript. The guy who
// decided that the type of null is 'object'.
// Hint. The property name must contain the full name (Brendan Eich), and
// the property birth must contain the year in which he was born (1961).

// b. Access the properties of the person object and create a sentence of the
// type: "X was born in Y." where X is Brendan Eich and Y is 1961.

// c. Bonus exercise. Instead of saying that year of birth, you could say that
// Brendan Eich is Z years old.  


// EXERCISE 2. Add and remove properties to the person object.
//////////////////////////////////////////////////////

// Now you realize that it makes more sense to split the property 'name' into
// two: 'first' and 'last' name. Accordingly you delete the propery name.



// EXERCISE 3. Bonus. Constant objects.
///////////////////////////////////////
// This is weird, and it takes a lot of JavaScript to understand why it is so.
// Constant objects are not constant. For now, just embrace it.

const myObject = {
    a: 1,
    b: 2
};

// Can you change the properties of constant objects? Yes.
myObject.b = 3; // No error thrown.
// Can you add a new property to constant objects.
myObject.c = 4; // No error thrown.

// Can you re-assign it? No!
myObject = brendan; // it throws an error, it does not want to be brendan.

// Explanation. Objects are pointers to memory addresses. You can change
// the content of the address, but you can't change the address,
// which happens upon re-assignment.

// Great work! You finished the second exercise sheet!
// Pat yourself on the back or ask the person to your left to do it,
// if that is appropriate.