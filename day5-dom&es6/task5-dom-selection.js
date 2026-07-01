// -----------------------------
// getElementById()
// -----------------------------

const heading = document.getElementById("mainHeading");
console.log("getElementById():", heading);


// -----------------------------
// getElementsByClassName()
// -----------------------------

const paragraphs = document.getElementsByClassName("description");
console.log("getElementsByClassName():", paragraphs);


// -----------------------------
// getElementsByTagName()
// -----------------------------

const paragraphTags = document.getElementsByTagName("p");
console.log("getElementsByTagName():", paragraphTags);


// -----------------------------
// querySelector()
// -----------------------------

const button = document.querySelector(".btn");
console.log("querySelector():", button);


// -----------------------------
// querySelectorAll()
// -----------------------------

const listItems = document.querySelectorAll("li");
console.log("querySelectorAll():", listItems);