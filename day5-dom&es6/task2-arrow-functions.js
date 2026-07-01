// ----------------------------------
// Traditional Function
// ----------------------------------

function add(a, b) {
    return a + b;
}

console.log("Traditional Function (Addition):", add(10, 20));


// ----------------------------------
// Arrow Function
// ----------------------------------

const square = (num) => {
    return num * num;
};

console.log("Arrow Function (Square):", square(5));


// ----------------------------------
// Arrow Function with Implicit Return
// ----------------------------------

const greet = name => `Hello, ${name}!`;

console.log(greet("Akheeba"));