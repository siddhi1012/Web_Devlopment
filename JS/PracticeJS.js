let i =1;
while(i<=5){
    if( i == 3){
        break;
    }
    console.log(i);
    i++;
}
console.log("We are Using the break Statement");

// Arrays 
let arr = ["mango","apple","banana","litchi","orange"];
arr.push("Pineapple");
// for(let i =0; i<arr.length; i++){
//     console.log(i,arr[i]);
// }
//reverse array
for(let i=arr.length-1; i>=0; i--){
    console.log(i,arr[i]);
}

let heroes = [["ironman","thor","Spiderman"],["Superman","flash","wonder woman"]];

for(let i=0; i<heroes.length; i++){
    console.log(`List is ${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);

    }
}

console.log("Use of the for of loop");
let array = ["mango","apple","banana","litchi","orange"];
for(i of array){
    console.log(i);
}