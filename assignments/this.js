/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - This means if you're not pointing to a specific object, the `this` keyword will point to the window, the parent object.
* 2. Implicit binding - This is when you have an object being called to the left of the dot when calling a function. 
* 3. New Binding - A constructor function that can create a new object. This will require the use of the `new` keyword.
* 4. Explicit Binding - When you use the methods `.apply()`, `.bind()`, or `.call()`. This methods allow parameters in a special order to be passed through as well as data, with type requirements. For example, `.apply()` allows the first parameter to be the object you want `this` to apply to and the 2nd parameter would be data, but in the case of apply, it must be an array.
*
* write out a code example of each explanation above, respectively.
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2

// code example for Implicit Binding
myObj = {
    name: "Amanda",
    age: 32,
    speak: function(){
        return `Hi, I'm ${this.name}!`;
    }
}
console.log(myObj.speak());
// Principle 3

// code example for New Binding
function FriendsChar(name){
    this.name = name;
    this.speak = function(){
        return `Hi, my name is ${this.name}.`
    }
}

const rachel = new FriendsChar('Rachel');
const monica = new FriendsChar("Monica");
const phoebe = new FriendsChar("Phoebe");
const joey = new FriendsChar("Joey");
const ross = new FriendsChar("Ross");
const chandler = new FriendsChar("Ms. Chanandaler Bong");

console.log(rachel.speak());
console.log(monica.speak());
console.log(phoebe.speak());
console.log(joey.speak());
console.log(ross.speak());
console.log(chandler.speak());

// Principle 4

// code example for Explicit Binding
const jim = {
    name: "Jim",
    likes: "office pranks"
};

const bearsEat = ["Bears","beets","Battlestar Galatica"];

function WhatDoBearsEat(thing1, thing2, thing3){
    this.name = jim.name;
    this.likes = jim.likes;
    return `FACT. Bears eat ${thing2}. ${thing1}, ${thing2}, ${thing3}. My name is ${this.name} and I really like ${this.likes}.`;
};

console.log(WhatDoBearsEat.apply(jim, bearsEat));