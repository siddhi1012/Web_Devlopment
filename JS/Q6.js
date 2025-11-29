let str = "Siddhi";
if(str == " "){
    console.log("String is empty");
}else{
     console.log("String is not empty");
}

// Q.7
let str1 = "SiDDhiGaVhanE";
let index = 4;
if(str1[index] == str1[index].toLowerCase()){
    console.log("Character is in lowerCase");
}else{
     console.log("Character is in Not lowerCase");
}

// Q.8
let str3 = prompt ("Enter the String");
console.log(`String Before White Spaces : ${str3}`);
console.log(`String After White Spaces : ${str3.trim()}`);

// Q.9
let arr = [67,90,14,45,23];
let ele = 14 ;
if(arr.indexOf(ele)!= -1) {
    console.log(`${ele} element present in the array`);
}else{
    console.log(`${ele} element not present in the array`);
}