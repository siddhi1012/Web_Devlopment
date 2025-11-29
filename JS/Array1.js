
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
