const middle = document.querySelector("p:nth-child(2)");

const previousElement = middle.previousElementSibling;
const nextElement = middle.nextElementSibling;

const firstChild = middle.firstElementChild;
const lastChild = middle.lastElementChild;

console.log(previousElement.textContent);
console.log(nextElement.textContent);
console.log(firstChild); // null if no child elements
console.log(lastChild);  // null if no child elements