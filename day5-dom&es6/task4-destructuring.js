// --------------------------------------
// Object Destructuring
// --------------------------------------

const student = {
    name: "Akheeba",
    age: 18
};

// Renaming and default value

const {
    name: studentName,
    age: studentAge,
    city = "Unknown"
} = student;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student City:", city);


// --------------------------------------
// Array Destructuring
// --------------------------------------

const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes"
];

// Skip second element and collect the rest

const [
    firstFruit,
    ,
    thirdFruit,
    ...remainingFruits
] = fruits;

console.log("First Fruit:", firstFruit);
console.log("Third Fruit:", thirdFruit);
console.log("Remaining Fruits:", remainingFruits);