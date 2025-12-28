//? ---------------Assigning-----------------------
// !VAR
var name = "From assigning VAR";
console.log(name);

//? ----------------Re-Declaration---------------------
// var name = "Yousuf"
// console.log("Re-Declaration VAR",name);

//? ------------------Re-Assigning--------------------
// name = 'Mahan'
// console.log("Re-Assigning",name);


// !LET
//? ---------------Assigning-----------------------
let x = 1+2
console.log("From Assigning LET=",x);

//? ----------------Re-Declaration---------------------
// let x = 1 + 2
// console.log("Re-Declaration LET",x);

//? ------------------Re-Assigning--------------------
// x = 1+45
// console.log("Re-Assigning",x);


// !CONST
//? ---------------Assigning-----------------------
const y = 23+43
console.log("From Assigning CONST",y);

//? ----------------Re-Declaration---------------------
// const y = 33+4
// console.log("Re-Declaration CONST",y);

//? ------------------Re-Assigning--------------------
// y = 23+43
// console.log("Re-Assigning",y);

//! --------------Block Scope-----------------
// ? LET vs VAR vs CONST
if (true) {
    var age = 30; 
    // console.log("Accessing inside Block",age);
}
// console.log("Accessing age outside block", age)
//----------------Function Scope-----------------

function test() {
  var z = 10;
}
test()
//! ReferenceError
console.log("Accessing Outside Function Scope",z);