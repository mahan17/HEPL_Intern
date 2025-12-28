//! forEach

function welcomeMsg(greet){
    console.log(`Hi ${greet} Welcome to HEPL`);
}

const users = [
    {name:'Ajith'},
    {name:'Karthik'},
    {name:'Surya'}
];

// users.forEach((user)=>{
//     welcomeMsg(user.name)
// })

//! Map method
let nums = [1, 2, 3,4,5];
console.log(nums);

let doubled = nums.map(n => n * 2);
console.log("Map method");
console.log(doubled);

//! Filter method
let even = nums.filter(n => n % 2 === 0);
console.log("Filter");
console.log(even);

//! Reduce method
let total = nums.reduce((sum, n) => sum + n, 0);
console.log("Reduce");
console.log(total);