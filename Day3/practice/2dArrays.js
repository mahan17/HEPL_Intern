// 2D Arrays
let num = [
           [1,2,3],
           [4,5,6],
           [7,8,9]
        ];

// ! To access 2D arrays
// console.log(num[1][1]);

// !Accessing using for loop

for(let i=0; i<num.length; i++){
    for(let j=0; j<num[i].length; j++) {
        console.log(`Element at (${i}, ${j}): ${num[i][j]}`);
    }
}