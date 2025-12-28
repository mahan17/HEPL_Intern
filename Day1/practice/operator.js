//! Arithmetic Operator
let add = 11+34
console.log(add);

let sub = 11-34
console.log(sub);

//! Logical Operator
//  AND
let a = 6;
let b = 3;
let z = (a < 10 && b > 1)
console.log(z);

//  OR
let res = (x > 0 || y > 0)
console.log(res);

//  NOT Operator
let x = (5 == 8);
let y = !(5 == 8);
console.log(x ,y);

//! Assigment Operator
let l = 10;
l += 5;
console.log(l);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);


// !Comparison Operator
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

//! TypeOf Operator
const am = 9;

console.log(typeof am); // number
console.log(typeof '9'); // string
console.log(typeof false); // boolean