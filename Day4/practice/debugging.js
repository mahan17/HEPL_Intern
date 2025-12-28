// const arr = [1,2,3]

// try {
//     const newArr = arr[5];
//     console.log('accessing index value of 4 in a 2',newArr);
//     console.log("Try part has executed successfully");
// } catch (error) {
//     console.error("AN error occured while accessing the array element",error.message);
// }

// console.log("Program continues after error message");

// ! Example - 2
// const obj = undefined;
// try {
//     const propValue = obj.prop;
//     console.log("Property Value ",propValue);
//     console.log("This msg will be reached");
// } catch (error){
//     console.error("AN error occured ",error.message);
// }
// console.log("Program continues after error msg");

// ! Without try ,catch (debugging)
const obj = undefined;
const propValue = obj.prop;
console.log("Property Value ",propValue);
console.log("Program continues after error msg");