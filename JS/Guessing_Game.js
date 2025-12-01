const max = prompt("Enter Max Number");
console.log(max);

const random = Math.floor(Math.random()*max) + 1;
 
let guess=prompt("guess the random number")
while(true){
    if(guess == "quit"){
        console.log("User quit the game");
        break;
    }
    if(guess == random){
        console.log("Congrats!!!...Random Number was",random);
        break;
    }else if(guess < random ){
        guess = prompt("hint: Your guess was too small...Please try again...");
    }else {
        guess = prompt("hint: Your guess was too Large...Please try again...");
    }
}