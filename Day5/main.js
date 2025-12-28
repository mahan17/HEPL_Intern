//! Example 1 - Promises
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("User data loaded 'Promise Resolved'");
//     }, 2000);
//   });
// }

// fetchData().then(data => console.log(data));


//! Example 2 - Promises
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Data received successfully");
//   } else {
//     reject("Something went wrong");
//   }
// });

// myPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });


// !fetch() - GET method
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// !Axios example
// import axios from 'axios';
// const axios = require('axios');

//   axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => console.log(res.data))
//     .catch(err => console.error(err));