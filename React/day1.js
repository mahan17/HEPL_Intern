let myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let currTime = new Date().getTime();
        if (currTime % 2 === 0) {
            resolve('Success');
        } else {
            reject('Failed!!!');
        }
    }, 2000);
});

// myPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// CLass 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }}

let person1 = new Person('Mahan', 20);
console.log(person1);
console.log(person1.name);
console.log(person1.age);