
console.log("Question-1");
let arr = [1,2,3,4,5,6,2,3];
let n = arr.length;
let num = 2 ; 
for(let i = 0; i<n; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

console.log("Question-2");
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0){
    copy = Math.floor(copy/10);
    count++;
}
console.log(count);


console.log("Question-3");
let num1 = 287152;
let sum = 0;
let copy1 = num1;
while(copy1 > 0){
    let digit = copy1 % 10;
    sum = sum + digit;
    copy1= Math.floor(copy1/10);

}
console.log("Sum is :",sum);


console.log("Question-4");
let n1 = 5;
let fact = 1;
for(let i=1; i<=n1; i++){
    fact = fact * i;
}
 console.log("Factorial is",fact);

console.log("Question-5");
let arr1 = [23,56,72,90,16,34];
let large = 0;
for(let i=0; i<arr1.length;i++){
    if(large < arr1[i]){
        large = arr1[i];

    }
}
console.log("Largest element in arr",large);