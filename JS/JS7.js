const square = (n) => n*n;
console.log(square(6));


 
let id = setInterval (() =>{
    console.log("Hello World");

},2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval Ran")
},10000);
