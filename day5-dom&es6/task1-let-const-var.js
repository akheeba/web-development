// -------------------------
// let - Reassignment
// -------------------------

let number = 10;

console.log("Original let value:", number);

number = 20;

console.log("Reassigned let value:", number);


// -------------------------
// const - Cannot Reassign
// -------------------------

const PI = 3.14159;

console.log("const PI:", PI);

// Uncommenting the next line will cause an error
// PI = 3.14;


// -------------------------
// var Scope
// -------------------------

if (true) {

    var messageVar = "I am var";

}

console.log("var outside block:", messageVar);


// -------------------------
// let Scope
// -------------------------

if (true) {

    let messageLet = "I am let";

    console.log("let inside block:", messageLet);

}

// Uncommenting the next line will cause an error
// console.log(messageLet);