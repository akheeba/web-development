// -----------------------------
// Copy an Array
// -----------------------------

const fruits = ["Apple", "Banana", "Mango"];

const copiedFruits = [...fruits];

console.log("Original Array:", fruits);
console.log("Copied Array:", copiedFruits);


// -----------------------------
// Merge Two Arrays
// -----------------------------

const moreFruits = ["Orange", "Grapes"];

const mergedArray = [...fruits, ...moreFruits];

console.log("Merged Array:", mergedArray);


// -----------------------------
// Merge Two Objects
// -----------------------------

const student = {
    name: "Akheeba",
    age: 18
};

const details = {
    course: "ECE",
    city: "Nellore"
};

const mergedObject = {
    ...student,
    ...details
};

console.log("Merged Object:", mergedObject);